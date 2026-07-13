import {
    ArrowRight,
    Check,
    Sparkles,
    Target,
    Users,
    Utensils,
    Moon,
    Star,
    Play,
    Zap,
} from 'lucide-react';
import { PublicNav, Footer } from '@/fitnessos/components/public-nav';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/fitnessos/components/ui/accordion';
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from '@/fitnessos/components/ui/avatar';
import { Badge } from '@/fitnessos/components/ui/badge';
import { Button } from '@/fitnessos/components/ui/button';
import { Card } from '@/fitnessos/components/ui/card';
import {
    coach,
    testimonials,
    pricing,
    faqs,
    services,
    process,
    transformations,
} from '@/fitnessos/lib/mock-data';
import { Link } from '@/fitnessos/router-link';

function Home() {
    return (
        <div className="min-h-screen bg-background">
            <PublicNav />
            {/* Hero */}
            <section className="relative overflow-hidden bg-hero-gradient">
                <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-20 pb-24 md:grid-cols-2 md:pt-32">
                    <div className="animate-fade-in">
                        <Badge
                            variant="outline"
                            className="rounded-full border-primary/30 bg-primary/10 text-primary"
                        >
                            <Sparkles className="mr-1.5 h-3 w-3" /> AI-powered
                            coaching OS
                        </Badge>
                        <h1 className="mt-6 text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl">
                            Your coaching business,{' '}
                            <span
                                className="text-gradient italic"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                reimagined.
                            </span>
                        </h1>
                        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                            FitnessOS is the operating system for online fitness
                            coaches. Programs, nutrition, check-ins, payments
                            and AI — all in one premium platform your clients
                            love.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-brand-gradient text-primary-foreground hover:opacity-90"
                            >
                                <Link to="/apply">
                                    Apply for coaching{' '}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full"
                            >
                                <Link to="/dashboard">
                                    <Play className="mr-2 h-4 w-4" /> See the
                                    platform
                                </Link>
                            </Button>
                        </div>
                        <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex -space-x-2">
                                {[47, 13, 44, 45, 33].map((i) => (
                                    <Avatar
                                        key={i}
                                        className="h-8 w-8 border-2 border-background"
                                    >
                                        <AvatarImage
                                            src={`https://i.pravatar.cc/64?img=${i}`}
                                        />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-foreground">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star
                                            key={i}
                                            className="h-3.5 w-3.5 fill-primary text-primary"
                                        />
                                    ))}
                                    <span className="ml-1 font-medium">
                                        4.9
                                    </span>
                                </div>
                                <div className="text-xs">
                                    Loved by 2,000+ coaches worldwide
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-20 blur-3xl" />
                        <Card className="overflow-hidden rounded-2xl border-border/60 p-2 shadow-glow glass">
                            <img
                                src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=1200&auto=format&fit=crop"
                                alt="FitnessOS dashboard preview"
                                className="w-full rounded-xl"
                            />
                        </Card>
                        <Card className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl p-4 glass md:block">
                            <div className="flex items-center gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20">
                                    <Zap className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">
                                        +18% MRR
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        this quarter
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Coach intro */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-center">
                    <img
                        src={coach.avatar}
                        className="h-64 w-64 rounded-3xl object-cover shadow-card-premium"
                        alt={coach.name}
                    />
                    <div>
                        <div className="text-xs tracking-widest text-primary uppercase">
                            Meet your coach
                        </div>
                        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            I'm {coach.name.split(' ')[0]}. I've helped 500+
                            clients build the body they thought was impossible.
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground">
                            {coach.bio}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <Badge variant="secondary">NASM CPT</Badge>
                            <Badge variant="secondary">PN Level 1</Badge>
                            <Badge variant="secondary">Former D1 athlete</Badge>
                            <Badge variant="secondary">10+ years</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="border-y border-border/60 bg-card/40">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
                    {[
                        { v: '500+', l: 'Transformations' },
                        { v: '4.9/5', l: 'Client rating' },
                        { v: '94%', l: 'Program completion' },
                        { v: '12 wks', l: 'Average result' },
                    ].map((s) => (
                        <div key={s.l}>
                            <div className="text-gradient text-4xl font-semibold tracking-tight md:text-5xl">
                                {s.v}
                            </div>
                            <div className="mt-2 text-sm text-muted-foreground">
                                {s.l}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <SectionHeader
                    kicker="How it works"
                    title="A proven, 4-step coaching process"
                />
                <div className="mt-12 grid gap-6 md:grid-cols-4">
                    {process.map((p) => (
                        <Card
                            key={p.n}
                            className="border-border/60 bg-card p-6 shadow-card-premium"
                        >
                            <div className="font-mono text-xs text-primary">
                                {p.n}
                            </div>
                            <h3 className="mt-2 text-lg font-semibold">
                                {p.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {p.desc}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <SectionHeader
                    kicker="What we offer"
                    title="Coaching designed for your life"
                />
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((s) => {
                        const Icon =
                            s.icon === 'target'
                                ? Target
                                : s.icon === 'users'
                                  ? Users
                                  : s.icon === 'utensils'
                                    ? Utensils
                                    : Moon;

                        return (
                            <Card
                                key={s.title}
                                className="group border-border/60 bg-card p-6 shadow-card-premium transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                            >
                                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-4 font-semibold">
                                    {s.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {s.desc}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Transformations */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="flex items-end justify-between">
                    <SectionHeader
                        kicker="Client results"
                        title="Real people. Real transformations."
                    />
                    <Button
                        asChild
                        variant="ghost"
                        className="hidden md:inline-flex"
                    >
                        <Link to="/transformations">
                            View all <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {transformations.slice(0, 3).map((t) => (
                        <Card
                            key={t.id}
                            className="overflow-hidden border-border/60 bg-card shadow-card-premium"
                        >
                            <div className="grid grid-cols-2 gap-0.5">
                                <img
                                    src={t.before}
                                    alt="before"
                                    className="aspect-[3/4] object-cover"
                                />
                                <img
                                    src={t.after}
                                    alt="after"
                                    className="aspect-[3/4] object-cover"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <div className="font-semibold">
                                        {t.name}
                                    </div>
                                    <Badge className="bg-primary/15 text-primary hover:bg-primary/20">
                                        {t.lost}
                                    </Badge>
                                </div>
                                <div className="mt-1 text-xs text-muted-foreground">
                                    {t.weeks} weeks · {t.goal}
                                </div>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    "{t.quote}"
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="border-y border-border/60 bg-card/40">
                <div className="mx-auto max-w-7xl px-6 py-24">
                    <SectionHeader
                        kicker="Testimonials"
                        title="What our clients say"
                    />
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {testimonials.map((t) => (
                            <Card
                                key={t.name}
                                className="border-border/60 bg-card p-6 shadow-card-premium"
                            >
                                <div className="flex gap-1 text-primary">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star
                                            key={i}
                                            className="h-3.5 w-3.5 fill-primary"
                                        />
                                    ))}
                                </div>
                                <p className="mt-4 text-sm">"{t.quote}"</p>
                                <div className="mt-6 flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={t.avatar} />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="text-sm font-medium">
                                            {t.name}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <SectionHeader
                    kicker="Pricing"
                    title="Simple plans that scale with your business"
                />
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {pricing.map((p) => (
                        <Card
                            key={p.name}
                            className={`relative border-border/60 bg-card p-8 shadow-card-premium ${p.featured ? 'border-primary/40 shadow-glow' : ''}`}
                        >
                            {p.featured && (
                                <Badge className="absolute -top-3 left-8 bg-brand-gradient text-primary-foreground">
                                    Most popular
                                </Badge>
                            )}
                            <h3 className="text-lg font-semibold">{p.name}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {p.desc}
                            </p>
                            <div className="mt-6 flex items-baseline gap-1">
                                <span className="text-5xl font-semibold tracking-tight">
                                    ${p.price}
                                </span>
                                <span className="text-muted-foreground">
                                    {p.period}
                                </span>
                            </div>
                            <Button
                                asChild
                                className={`mt-6 w-full rounded-full ${p.featured ? 'bg-brand-gradient text-primary-foreground' : ''}`}
                                variant={p.featured ? 'default' : 'outline'}
                            >
                                <Link to="/apply">{p.cta}</Link>
                            </Button>
                            <ul className="mt-6 space-y-3 text-sm">
                                {p.features.map((f) => (
                                    <li
                                        key={f}
                                        className="flex items-start gap-2"
                                    >
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-3xl px-6 py-24">
                <SectionHeader
                    kicker="FAQ"
                    title="Frequently asked questions"
                    center
                />
                <Accordion type="single" collapsible className="mt-10">
                    {faqs.map((f, i) => (
                        <AccordionItem key={i} value={`f${i}`}>
                            <AccordionTrigger className="text-left">
                                {f.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {f.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-6 pb-24">
                <Card className="relative overflow-hidden border-primary/30 bg-hero-gradient p-12 text-center shadow-glow md:p-20">
                    <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                        Ready to build the body — and business — you deserve?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                        Applications reviewed within 24 hours. Limited spots
                        available.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-brand-gradient text-primary-foreground"
                        >
                            <Link to="/apply">
                                Apply now{' '}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full"
                        >
                            <Link to="/contact">Talk to us</Link>
                        </Button>
                    </div>
                </Card>
            </section>

            <Footer />
        </div>
    );
}

function SectionHeader({
    kicker,
    title,
    center,
}: {
    kicker: string;
    title: string;
    center?: boolean;
}) {
    return (
        <div className={center ? 'text-center' : ''}>
            <div className="text-xs tracking-widest text-primary uppercase">
                {kicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                {title}
            </h2>
        </div>
    );
}

export default Home;
