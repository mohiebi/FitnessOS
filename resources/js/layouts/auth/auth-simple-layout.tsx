import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Check,
    Dumbbell,
    ShieldCheck,
    Sparkles,
    Users,
} from 'lucide-react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

const proofPoints = [
    'Program delivery, check-ins, and billing in one workspace',
    'Passkeys, 2FA, and email recovery stay protected by Laravel',
    'Coach and client views share the same operating system',
];

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <main className="min-h-dvh overflow-hidden bg-background text-foreground">
            <div className="grid min-h-dvh lg:grid-cols-[1.04fr_0.96fr]">
                <section className="relative hidden overflow-hidden border-r border-border/60 bg-hero-gradient px-10 py-8 lg:flex lg:flex-col">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.72_0.17_162_/_0.16),transparent_34%),radial-gradient(circle_at_80%_8%,oklch(0.65_0.18_255_/_0.14),transparent_30%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />

                    <div className="relative z-10 flex items-center justify-between">
                        <Link
                            href={home()}
                            className="flex items-center gap-2 text-sm font-semibold"
                        >
                            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                                <Dumbbell className="h-4 w-4 text-primary-foreground" />
                            </span>
                            FitnessOS
                        </Link>
                        <Link
                            href={home()}
                            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Back home
                        </Link>
                    </div>

                    <div className="relative z-10 my-auto max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            <Sparkles className="h-3.5 w-3.5" />
                            coaching command center
                        </div>
                        <h1 className="mt-6 text-5xl leading-[1.05] font-semibold tracking-tight xl:text-6xl">
                            Run your fitness business from a calmer control
                            room.
                        </h1>
                        <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                            Secure access for coaches, clients, and teams using
                            the same premium interface as the rest of FitnessOS.
                        </p>

                        <div className="mt-10 grid gap-3">
                            {proofPoints.map((point) => (
                                <div
                                    key={point}
                                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm glass"
                                >
                                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                                        <Check className="h-4 w-4" />
                                    </span>
                                    {point}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl p-4 glass">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            <div className="mt-3 text-2xl font-semibold">
                                2FA
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">
                                Recovery-ready authentication
                            </div>
                        </div>
                        <div className="rounded-2xl p-4 glass">
                            <Users className="h-5 w-5 text-primary" />
                            <div className="mt-3 text-2xl font-semibold">
                                248
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">
                                Active clients in the demo workspace
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative flex min-h-dvh items-center justify-center px-5 py-8 sm:px-8">
                    <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-70 lg:hidden" />
                    <div className="relative w-full max-w-md">
                        <div className="mb-8 flex items-center justify-between lg:hidden">
                            <Link
                                href={home()}
                                className="flex items-center gap-2 text-sm font-semibold"
                            >
                                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                                    <Dumbbell className="h-4 w-4 text-primary-foreground" />
                                </span>
                                FitnessOS
                            </Link>
                            <Link
                                href={home()}
                                className="text-xs text-muted-foreground transition hover:text-foreground"
                            >
                                Home
                            </Link>
                        </div>

                        <div className="rounded-3xl p-6 shadow-card-premium glass sm:p-8">
                            <div className="mb-7 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-semibold tracking-tight text-balance">
                                        {title}
                                    </h1>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        {description}
                                    </p>
                                </div>
                            </div>

                            {children}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
