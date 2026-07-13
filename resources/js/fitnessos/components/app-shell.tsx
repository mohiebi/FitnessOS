import { usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    Users,
    UserPlus,
    Dumbbell,
    Utensils,
    ClipboardCheck,
    TrendingUp,
    MessageSquare,
    Calendar,
    CreditCard,
    Sparkles,
    Palette,
    BarChart3,
    Settings,
    Search,
    Bell,
    ChevronsLeft,
    Menu,
    Dumbbell as Logo,
    Home,
    Apple,
    LineChart,
    User,
} from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/fitnessos/components/ui/avatar';
import { Button } from '@/fitnessos/components/ui/button';
import { Input } from '@/fitnessos/components/ui/input';
import { coach } from '@/fitnessos/lib/mock-data';
import { cn } from '@/fitnessos/lib/utils';
import { Link } from '@/fitnessos/router-link';

const coachNav = [
    {
        to: '/dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
        exact: true,
    },
    { to: '/dashboard/leads', label: 'Leads', icon: UserPlus },
    { to: '/dashboard/clients', label: 'Clients', icon: Users },
    { to: '/dashboard/workouts', label: 'Workout Plans', icon: Dumbbell },
    { to: '/dashboard/nutrition', label: 'Nutrition', icon: Utensils },
    { to: '/dashboard/checkins', label: 'Check-ins', icon: ClipboardCheck },
    { to: '/dashboard/progress', label: 'Progress', icon: TrendingUp },
    { to: '/dashboard/messages', label: 'Messages', icon: MessageSquare },
    { to: '/dashboard/calendar', label: 'Calendar', icon: Calendar },
    { to: '/dashboard/payments', label: 'Payments', icon: CreditCard },
    { to: '/dashboard/content', label: 'Content Studio', icon: Palette },
    { to: '/dashboard/ai', label: 'AI Assistant', icon: Sparkles },
    { to: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
    { to: '/dashboard/settings', label: 'Settings', icon: Settings },
];

const clientNav = [
    { to: '/app', label: 'Today', icon: Home, exact: true },
    { to: '/app/workout', label: 'Workout', icon: Dumbbell },
    { to: '/app/nutrition', label: 'Nutrition', icon: Apple },
    { to: '/app/progress', label: 'Progress', icon: LineChart },
    { to: '/app/checkin', label: 'Check-in', icon: ClipboardCheck },
    { to: '/app/messages', label: 'Messages', icon: MessageSquare },
    { to: '/app/resources', label: 'Resources', icon: Palette },
    { to: '/app/profile', label: 'Profile', icon: User },
];

export function AppShell({
    variant,
    children,
}: {
    variant: 'coach' | 'client';
    children: ReactNode;
}) {
    const nav = variant === 'coach' ? coachNav : clientNav;
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePage().url.split('?')[0] || '/';

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-40 flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300',
                    collapsed ? 'w-16' : 'w-64',
                    mobileOpen ? 'translate-x-0' : '-translate-x-full',
                    'lg:translate-x-0',
                )}
            >
                <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-gradient">
                        <Logo className="h-4 w-4 text-primary-foreground" />
                    </div>
                    {!collapsed && (
                        <div className="min-w-0">
                            <div className="truncate text-sm font-semibold">
                                FitnessOS
                            </div>
                            <div className="truncate text-[10px] tracking-wider text-muted-foreground uppercase">
                                {variant === 'coach' ? 'Coach' : 'Client'}
                            </div>
                        </div>
                    )}
                </div>

                <nav className="flex-1 overflow-y-auto p-2">
                    {nav.map((item) => {
                        const active = item.exact
                            ? pathname === item.to
                            : pathname.startsWith(item.to);
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    'group my-0.5 flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all',
                                    active
                                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                                        : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground',
                                )}
                            >
                                <Icon
                                    className={cn(
                                        'h-4 w-4 shrink-0',
                                        active && 'text-primary',
                                    )}
                                />
                                {!collapsed && (
                                    <span className="truncate">
                                        {item.label}
                                    </span>
                                )}
                                {!collapsed && active && (
                                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="border-t border-sidebar-border p-3">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={coach.avatar} />
                            <AvatarFallback>AR</AvatarFallback>
                        </Avatar>
                        {!collapsed && (
                            <div className="min-w-0 flex-1">
                                <div className="truncate text-sm font-medium">
                                    {coach.name}
                                </div>
                                <div className="truncate text-xs text-muted-foreground">
                                    {coach.handle}
                                </div>
                            </div>
                        )}
                        {!collapsed && (
                            <button
                                onClick={() => setCollapsed(true)}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <ChevronsLeft className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                    {collapsed && (
                        <button
                            onClick={() => setCollapsed(false)}
                            className="mt-2 flex w-full items-center justify-center rounded-md p-1 text-muted-foreground hover:bg-sidebar-accent"
                        >
                            <ChevronsLeft className="h-4 w-4 rotate-180" />
                        </button>
                    )}
                </div>
            </aside>

            {mobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <div
                className={cn(
                    'flex flex-1 flex-col transition-all',
                    collapsed ? 'lg:pl-16' : 'lg:pl-64',
                )}
            >
                <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl md:px-6">
                    <button
                        className="lg:hidden"
                        onClick={() => setMobileOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                    <div className="relative hidden max-w-md flex-1 md:block">
                        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search clients, plans, exercises…"
                            className="h-9 rounded-full border-border/60 bg-card pl-9"
                        />
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative"
                        >
                            <Bell className="h-4 w-4" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="rounded-full"
                        >
                            <Link
                                to={variant === 'coach' ? '/app' : '/dashboard'}
                            >
                                {variant === 'coach'
                                    ? 'Client view'
                                    : 'Coach view'}
                            </Link>
                        </Button>
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-8">{children}</main>
            </div>
        </div>
    );
}

export function PageHeader({
    title,
    description,
    actions,
}: {
    title: string;
    description?: string;
    actions?: ReactNode;
}) {
    return (
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {title}
                </h1>
                {description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
            {actions && (
                <div className="flex flex-wrap items-center gap-2">
                    {actions}
                </div>
            )}
        </div>
    );
}
