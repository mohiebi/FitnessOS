import { PageHeader } from "@/fitnessos/components/app-shell";
import { Card } from "@/fitnessos/components/ui/card";
import { Badge } from "@/fitnessos/components/ui/badge";
import { Button } from "@/fitnessos/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/fitnessos/components/ui/avatar";
import { Progress } from "@/fitnessos/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/fitnessos/components/ui/tabs";
import { clients, weightSeries, strengthSeries, checkins, meals, workoutWeek, messages } from "@/fitnessos/lib/mock-data";
import { MessageSquare, Phone, MoreHorizontal, Utensils, Dumbbell, ClipboardCheck, FileText } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function ClientDetail({ id }: { id?: string }) {
  const c = clients.find((client) => client.id === id) ?? clients[0];
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Avatar className="h-16 w-16"><AvatarImage src={c.avatar} /><AvatarFallback>{c.name[0]}</AvatarFallback></Avatar>
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{c.name}</h1>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary">{c.goal}</Badge>
            <Badge className={c.status === "Active" ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"}>{c.status}</Badge>
            <span>·</span><span>{c.package}</span>
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm"><MessageSquare className="mr-2 h-4 w-4" />Message</Button>
          <Button variant="outline" size="sm"><Phone className="mr-2 h-4 w-4" />Book call</Button>
          <Button size="icon" variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-6 flex-wrap">
          {["overview","assessment","workout","nutrition","progress","checkins","messages","documents","payments","notes"].map(t => (
            <TabsTrigger key={t} value={t} className="capitalize">{t}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { l: "Program week", v: "Week 12 / 16" },
              { l: "Current weight", v: "85.4 kg" },
              { l: "Weight change", v: "-7.0 kg" },
              { l: "Adherence", v: "94%" },
            ].map(s => (
              <Card key={s.l} className="border-border/60 bg-card p-5 shadow-card-premium">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                <div className="mt-2 text-2xl font-semibold">{s.v}</div>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border/60 bg-card p-6 shadow-card-premium">
              <h3 className="font-semibold">Weight trend</h3>
              <div className="mt-4 h-56">
                <ResponsiveContainer>
                  <LineChart data={weightSeries}>
                    <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="w" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} domain={["dataMin - 1", "dataMax + 1"]} />
                    <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                    <Line type="monotone" dataKey="weight" stroke="var(--color-chart-1)" strokeWidth={2.5} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="border-border/60 bg-card p-6 shadow-card-premium">
              <h3 className="font-semibold">Recent check-ins</h3>
              <div className="mt-4 space-y-3">
                {checkins.map(ck => (
                  <div key={ck.week} className="flex items-center gap-3 rounded-xl border border-border/60 p-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary font-mono text-sm">W{ck.week}</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium">{ck.date}</div>
                      <div className="text-xs text-muted-foreground">{ck.weight} kg · Sleep {ck.sleep}h · Energy {ck.energy}/10</div>
                    </div>
                    <Badge className="bg-primary/15 text-primary">{ck.adherence}%</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assessment">
          <Card className="border-border/60 bg-card p-6 shadow-card-premium">
            <h3 className="font-semibold">Intake assessment</h3>
            <dl className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                ["Age", "28"],["Height", "168 cm"],["Starting weight", "92.4 kg"],["Target weight", "80 kg"],
                ["Training experience", "Intermediate"],["Injuries", "Old L4/L5 strain"],["Sleep average", "7 hours"],["Occupation", "Product designer, WFH"],
              ].map(([k, v]) => (
                <div key={k}><dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt><dd className="mt-1 text-sm">{v}</dd></div>
              ))}
            </dl>
          </Card>
        </TabsContent>

        <TabsContent value="workout">
          <Card className="border-border/60 bg-card p-6 shadow-card-premium">
            <div className="mb-4 flex items-center gap-2"><Dumbbell className="h-4 w-4 text-primary" /><h3 className="font-semibold">Week {workoutWeek.week} program</h3></div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {workoutWeek.days.map(d => (
                <div key={d.name} className="rounded-xl border border-border/60 p-4">
                  <div className="font-medium">{d.name}</div>
                  {d.exercises.length === 0 ? <div className="mt-2 text-xs text-muted-foreground">Rest day</div> : (
                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                      {d.exercises.slice(0, 4).map((e, i) => <li key={i}>{e.name} · {e.sets}×{e.reps}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition">
          <Card className="border-border/60 bg-card p-6 shadow-card-premium">
            <div className="mb-4 flex items-center gap-2"><Utensils className="h-4 w-4 text-primary" /><h3 className="font-semibold">Meal plan · 2,700 kcal / 220P 260C 80F</h3></div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {meals.map(m => (
                <div key={m.name} className="rounded-xl border border-border/60 p-4">
                  <div className="flex justify-between"><span className="font-medium">{m.name}</span><span className="text-xs text-muted-foreground">{m.time}</span></div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.kcal} kcal · {m.p}P {m.c}C {m.f}F</div>
                  <ul className="mt-2 space-y-0.5 text-xs">{m.items.map(i => <li key={i}>• {i}</li>)}</ul>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="progress">
          <Card className="border-border/60 bg-card p-6 shadow-card-premium">
            <h3 className="font-semibold">Strength progression</h3>
            <div className="mt-4 h-72">
              <ResponsiveContainer>
                <LineChart data={strengthSeries}>
                  <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="w" stroke="var(--color-muted-foreground)" fontSize={12} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Line dataKey="squat" stroke="var(--color-chart-1)" strokeWidth={2} />
                  <Line dataKey="bench" stroke="var(--color-chart-2)" strokeWidth={2} />
                  <Line dataKey="deadlift" stroke="var(--color-chart-3)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="checkins">
          <Card className="border-border/60 bg-card p-6 shadow-card-premium">
            <div className="mb-4 flex items-center gap-2"><ClipboardCheck className="h-4 w-4 text-primary" /><h3 className="font-semibold">Check-in history</h3></div>
            <div className="space-y-3">
              {checkins.map(ck => (
                <div key={ck.week} className="rounded-xl border border-border/60 p-4">
                  <div className="flex items-center justify-between"><span className="font-medium">Week {ck.week} — {ck.date}</span><Badge className="bg-primary/15 text-primary">{ck.status}</Badge></div>
                  <div className="mt-2 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                    <div><div className="text-xs text-muted-foreground">Weight</div><div>{ck.weight} kg</div></div>
                    <div><div className="text-xs text-muted-foreground">Sleep</div><div>{ck.sleep}h</div></div>
                    <div><div className="text-xs text-muted-foreground">Energy</div><div>{ck.energy}/10</div></div>
                    <div><div className="text-xs text-muted-foreground">Adherence</div><div>{ck.adherence}%</div></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card className="border-border/60 bg-card p-6 shadow-card-premium">
            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "coach" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-md rounded-2xl px-4 py-2 text-sm ${m.from === "coach" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                    {m.text}
                    <div className="mt-1 text-[10px] opacity-70">{m.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="documents"><EmptyState icon={FileText} title="No documents" desc="Waivers and intake PDFs will appear here." /></TabsContent>
        <TabsContent value="payments">
          <Card className="border-border/60 bg-card p-6 shadow-card-premium">
            <h3 className="font-semibold">Payments</h3>
            <div className="mt-4 space-y-2">
              {[["Nov 1, 2026", "$199.00", "Paid"],["Oct 1, 2026","$199.00","Paid"],["Sep 1, 2026","$199.00","Paid"]].map(([d,a,s]) => (
                <div key={d} className="flex items-center justify-between rounded-xl border border-border/60 p-3 text-sm">
                  <span>{d}</span><span className="font-medium">{a}</span><Badge className="bg-primary/15 text-primary">{s}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="notes">
          <Card className="border-border/60 bg-card p-6 shadow-card-premium">
            <h3 className="font-semibold">Coach notes</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.notes}</p>
          </Card>
        </TabsContent>

        <TabsContent value="progress-photos" />
      </Tabs>
    </div>
  );
}

function EmptyState({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <Card className="border-dashed border-border/60 bg-transparent p-16 text-center">
      <Icon className="mx-auto h-8 w-8 text-muted-foreground" />
      <h3 className="mt-4 font-medium">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </Card>
  );
}

export default ClientDetail;
