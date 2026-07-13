import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { PublicNav, Footer } from '@/fitnessos/components/public-nav';
import { Button } from '@/fitnessos/components/ui/button';
import { Card } from '@/fitnessos/components/ui/card';
import { Input } from '@/fitnessos/components/ui/input';
import { Label } from '@/fitnessos/components/ui/label';
import { Textarea } from '@/fitnessos/components/ui/textarea';

function Contact() {
    return (
        <div className="min-h-screen bg-background">
            <PublicNav />
            <section className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <div className="text-xs tracking-widest text-primary uppercase">
                            Contact
                        </div>
                        <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
                            Say hi.
                        </h1>
                        <p className="mt-4 max-w-md text-muted-foreground">
                            Questions about coaching or the platform? We reply
                            within one business day.
                        </p>

                        <div className="mt-10 space-y-4">
                            {[
                                {
                                    i: Mail,
                                    t: 'Email',
                                    v: 'hello@fitnessos.app',
                                },
                                {
                                    i: MessageCircle,
                                    t: 'Support',
                                    v: 'support@fitnessos.app',
                                },
                                { i: MapPin, t: 'HQ', v: 'Los Angeles, CA' },
                            ].map((c) => (
                                <div
                                    key={c.t}
                                    className="flex items-center gap-4"
                                >
                                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                                        <c.i className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground">
                                            {c.t}
                                        </div>
                                        <div className="font-medium">{c.v}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Card className="border-border/60 bg-card p-8 shadow-card-premium">
                        <form className="space-y-5">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <Label className="mb-2 block">
                                        First name
                                    </Label>
                                    <Input placeholder="Sarah" />
                                </div>
                                <div>
                                    <Label className="mb-2 block">
                                        Last name
                                    </Label>
                                    <Input placeholder="Chen" />
                                </div>
                            </div>
                            <div>
                                <Label className="mb-2 block">Email</Label>
                                <Input
                                    type="email"
                                    placeholder="you@email.com"
                                />
                            </div>
                            <div>
                                <Label className="mb-2 block">Message</Label>
                                <Textarea
                                    rows={5}
                                    placeholder="How can we help?"
                                />
                            </div>
                            <Button
                                type="button"
                                className="w-full rounded-full bg-brand-gradient text-primary-foreground"
                            >
                                Send message
                            </Button>
                        </form>
                    </Card>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Contact;
