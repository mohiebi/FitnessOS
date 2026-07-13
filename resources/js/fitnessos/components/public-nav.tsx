import { Dumbbell, Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/fitnessos/components/ui/button';
import { Link } from '@/fitnessos/router-link';

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/coaching', label: 'Coaching' },
    { to: '/transformations', label: 'Transformations' },
    { to: '/resources', label: 'Resources' },
    { to: '/contact', label: 'Contact' },
];

export function PublicNav() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link to="/" className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                        <Dumbbell className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold tracking-tight">
                        FitnessOS
                    </span>
                </Link>
                <nav className="hidden items-center gap-8 md:flex">
                    {links.map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            activeProps={{
                                className: 'text-sm text-foreground',
                            }}
                            activeOptions={{ exact: true }}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden items-center gap-2 md:flex">
                    <Button asChild variant="ghost" size="sm">
                        <Link to="/dashboard">Dashboard</Link>
                    </Button>
                    <Button
                        asChild
                        size="sm"
                        className="rounded-full bg-brand-gradient text-primary-foreground hover:opacity-90"
                    >
                        <Link to="/apply">Apply now</Link>
                    </Button>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>
            {open && (
                <div className="border-t border-border/60 bg-background/95 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4">
                        {links.map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                onClick={() => setOpen(false)}
                                className="text-sm text-muted-foreground hover:text-foreground"
                            >
                                {l.label}
                            </Link>
                        ))}
                        <Link
                            to="/apply"
                            onClick={() => setOpen(false)}
                            className="rounded-full bg-brand-gradient px-4 py-2 text-center text-sm font-medium text-primary-foreground"
                        >
                            Apply now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-border/60 bg-background">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-5">
                <div className="col-span-2">
                    <div className="flex items-center gap-2">
                        <div className="grid h-8 w-8 place-items-center rounded-xl bg-brand-gradient">
                            <Dumbbell className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-semibold">FitnessOS</span>
                    </div>
                    <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                        The premium operating system for online fitness coaches.
                        Built by coaches, for coaches.
                    </p>
                </div>
                <FooterCol
                    title="Product"
                    links={[
                        ['Coaching', '/coaching'],
                        ['Transformations', '/transformations'],
                        ['Resources', '/resources'],
                        ['Apply', '/apply'],
                    ]}
                />
                <FooterCol
                    title="Company"
                    links={[
                        ['About', '/about'],
                        ['Contact', '/contact'],
                    ]}
                />
                <FooterCol
                    title="Platform"
                    links={[
                        ['Coach Dashboard', '/dashboard'],
                        ['Client App', '/app'],
                    ]}
                />
            </div>
            <div className="border-t border-border/60">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
                    <span>© 2026 FitnessOS. All rights reserved.</span>
                    <span>Made for coaches who care.</span>
                </div>
            </div>
        </footer>
    );
}

function FooterCol({
    title,
    links,
}: {
    title: string;
    links: [string, string][];
}) {
    return (
        <div>
            <h4 className="text-sm font-semibold">{title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {links.map(([label, to]) => (
                    <li key={to}>
                        <Link to={to} className="hover:text-foreground">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
