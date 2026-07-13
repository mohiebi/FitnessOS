import { useState, type ReactNode } from "react";
import { PublicNav, Footer } from "@/fitnessos/components/public-nav";
import { Card } from "@/fitnessos/components/ui/card";
import { Button } from "@/fitnessos/components/ui/button";
import { Input } from "@/fitnessos/components/ui/input";
import { Label } from "@/fitnessos/components/ui/label";
import { Textarea } from "@/fitnessos/components/ui/textarea";
import { Progress } from "@/fitnessos/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/fitnessos/components/ui/radio-group";
import { Check, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

const steps = ["About you", "Your goals", "Your history", "Investment", "Review"];

function Apply() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <PublicNav />
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary"><Check className="h-8 w-8" /></div>
          <h1 className="mt-6 text-4xl font-semibold">Application received</h1>
          <p className="mt-3 text-muted-foreground">We'll review and reply within 24 hours. Check your email.</p>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PublicNav />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-xs uppercase tracking-widest text-primary flex items-center gap-2">
          <Sparkles className="h-3 w-3" /> Coaching application
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Let's build your plan.</h1>
        <p className="mt-3 text-muted-foreground">Takes 5 minutes. We review every application personally.</p>

        <div className="mt-10">
          <div className="mb-2 flex justify-between text-xs text-muted-foreground">
            <span>Step {step + 1} of {steps.length}</span>
            <span>{steps[step]}</span>
          </div>
          <Progress value={((step + 1) / steps.length) * 100} className="h-1.5" />
        </div>

        <Card className="mt-8 border-border/60 bg-card p-8 shadow-card-premium">
          {step === 0 && (
            <div className="space-y-5">
              <Field label="Full name"><Input placeholder="Sarah Chen" /></Field>
              <Field label="Email"><Input type="email" placeholder="you@email.com" /></Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Age"><Input type="number" placeholder="28" /></Field>
                <Field label="Country"><Input placeholder="United States" /></Field>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-5">
              <Field label="Primary goal">
                <RadioGroup defaultValue="fat-loss" className="grid grid-cols-2 gap-3">
                  {["Fat loss", "Muscle gain", "Recomp", "Strength", "Endurance", "Health"].map(g => (
                    <label key={g} className="flex cursor-pointer items-center gap-2 rounded-xl border border-border/60 bg-card p-3 hover:border-primary/40">
                      <RadioGroupItem value={g.toLowerCase()} />
                      <span className="text-sm">{g}</span>
                    </label>
                  ))}
                </RadioGroup>
              </Field>
              <Field label="Target timeline"><Input placeholder="e.g. 12 weeks before a wedding" /></Field>
              <Field label="What would success look like?"><Textarea rows={4} placeholder="Describe what winning looks like for you." /></Field>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-5">
              <Field label="Training experience">
                <RadioGroup defaultValue="intermediate" className="grid grid-cols-3 gap-3">
                  {["Beginner", "Intermediate", "Advanced"].map(g => (
                    <label key={g} className="flex cursor-pointer items-center gap-2 rounded-xl border border-border/60 bg-card p-3 hover:border-primary/40">
                      <RadioGroupItem value={g.toLowerCase()} />
                      <span className="text-sm">{g}</span>
                    </label>
                  ))}
                </RadioGroup>
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Height (cm)"><Input type="number" placeholder="175" /></Field>
                <Field label="Weight (kg)"><Input type="number" placeholder="82" /></Field>
              </div>
              <Field label="Injuries or limitations"><Textarea rows={3} placeholder="Any injuries or restrictions we should know about?" /></Field>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-5">
              <Field label="Which package interests you?">
                <RadioGroup defaultValue="pro" className="space-y-3">
                  {[
                    { v: "starter", n: "Starter", p: "$99/mo", d: "8-week starter program" },
                    { v: "pro", n: "Pro", p: "$199/mo", d: "12-week 1:1 coaching" },
                    { v: "elite", n: "Elite", p: "$399/mo", d: "24-week premium coaching" },
                  ].map(p => (
                    <label key={p.v} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/40">
                      <RadioGroupItem value={p.v} />
                      <div className="flex-1"><div className="font-medium">{p.n}</div><div className="text-xs text-muted-foreground">{p.d}</div></div>
                      <div className="font-semibold">{p.p}</div>
                    </label>
                  ))}
                </RadioGroup>
              </Field>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-4 text-sm">
              <div className="rounded-xl bg-primary/10 p-4 text-primary">Application ready to submit — we'll reply within 24h.</div>
              <p className="text-muted-foreground">Please confirm your details are correct on the previous steps. By submitting you agree to our terms.</p>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <Button variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
            {step < steps.length - 1 ? (
              <Button className="rounded-full bg-brand-gradient text-primary-foreground" onClick={() => setStep(step + 1)}>Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
            ) : (
              <Button className="rounded-full bg-brand-gradient text-primary-foreground" onClick={() => setSubmitted(true)}>Submit application</Button>
            )}
          </div>
        </Card>
      </section>
      <Footer />
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <div><Label className="mb-2 block">{label}</Label>{children}</div>;
}

export default Apply;
