import {
    Users,
    DollarSign,
    ClipboardCheck,
    AlertCircle,
    Package,
    UserPlus,
    PhoneCall,
    ArrowRight,
    MessageSquare,
} from 'lucide-react';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Legend,
} from 'recharts';
import { PageHeader } from '@/fitnessos/components/app-shell';
import { StatCard, ChartCard } from '@/fitnessos/components/stat-card';
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from '@/fitnessos/components/ui/avatar';
import { Badge } from '@/fitnessos/components/ui/badge';
import { Button } from '@/fitnessos/components/ui/button';
import { Card } from '@/fitnessos/components/ui/card';
import { Progress } from '@/fitnessos/components/ui/progress';
import {
    stats,
    revenueSeries,
    adherenceSeries,
    clients,
    conversations,
} from '@/fitnessos/lib/mock-data';
import { Link } from '@/fitnessos/router-link';

const iconMap = [
    Users,
    DollarSign,
    ClipboardCheck,
    AlertCircle,
    Package,
    UserPlus,
    PhoneCall,
];

function DashboardIndex() {
    return (
        <div>
            <PageHeader
                title="Welcome back, Alex"
                description="Here's how your business is performing this week."
                actions={
                    <>
                        <Button variant="outline" className="rounded-full">
                            Export
                        </Button>
                        <Button className="rounded-full bg-brand-gradient text-primary-foreground">
                            New client
                        </Button>
                    </>
                }
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                {stats.map((s, i) => (
                    <StatCard
                        key={s.label}
                        label={s.label}
                        value={s.value}
                        delta={s.delta}
                        trend={s.trend}
                        icon={iconMap[i]}
                    />
                ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <ChartCard
                    title="Revenue"
                    description="Monthly recurring revenue"
                    actions={<Badge variant="secondary">Last 7 mo</Badge>}
                >
                    <div className="h-72">
                        <ResponsiveContainer>
                            <AreaChart data={revenueSeries}>
                                <defs>
                                    <linearGradient
                                        id="rev"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="var(--color-chart-1)"
                                            stopOpacity={0.5}
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="var(--color-chart-1)"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid
                                    stroke="var(--color-border)"
                                    strokeDasharray="3 3"
                                    vertical={false}
                                />
                                <XAxis
                                    dataKey="m"
                                    stroke="var(--color-muted-foreground)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="var(--color-muted-foreground)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(v) => `$${v / 1000}k`}
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: 'var(--color-popover)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 12,
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="var(--color-chart-1)"
                                    strokeWidth={2}
                                    fill="url(#rev)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                <ChartCard
                    title="Adherence"
                    description="Workouts vs nutrition (last 7 days)"
                >
                    <div className="h-72">
                        <ResponsiveContainer>
                            <BarChart data={adherenceSeries}>
                                <CartesianGrid
                                    stroke="var(--color-border)"
                                    strokeDasharray="3 3"
                                    vertical={false}
                                />
                                <XAxis
                                    dataKey="d"
                                    stroke="var(--color-muted-foreground)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="var(--color-muted-foreground)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: 'var(--color-popover)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 12,
                                    }}
                                />
                                <Legend wrapperStyle={{ fontSize: 12 }} />
                                <Bar
                                    dataKey="workout"
                                    fill="var(--color-chart-1)"
                                    radius={[6, 6, 0, 0]}
                                />
                                <Bar
                                    dataKey="nutrition"
                                    fill="var(--color-chart-2)"
                                    radius={[6, 6, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <Card className="border-border/60 bg-card p-6 shadow-card-premium lg:col-span-2">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold">Recent clients</h3>
                            <p className="text-xs text-muted-foreground">
                                Latest activity from your roster.
                            </p>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                            <Link to="/dashboard/clients">
                                View all <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {clients.slice(0, 5).map((c) => (
                            <Link
                                key={c.id}
                                to="/dashboard/clients/$id"
                                params={{ id: c.id }}
                                className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-accent/10"
                            >
                                <Avatar>
                                    <AvatarImage src={c.avatar} />
                                    <AvatarFallback>{c.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="truncate font-medium">
                                            {c.name}
                                        </span>
                                        <Badge
                                            variant="secondary"
                                            className="shrink-0"
                                        >
                                            {c.goal}
                                        </Badge>
                                    </div>
                                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                                        <span>{c.package}</span>
                                        <span>·</span>
                                        <span>
                                            Last check-in {c.lastCheckin}
                                        </span>
                                    </div>
                                </div>
                                <div className="hidden w-32 md:block">
                                    <div className="mb-1 flex justify-between text-xs">
                                        <span className="text-muted-foreground">
                                            Progress
                                        </span>
                                        <span>{c.progress}%</span>
                                    </div>
                                    <Progress
                                        value={c.progress}
                                        className="h-1.5"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </Card>

                <Card className="border-border/60 bg-card p-6 shadow-card-premium">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold">Inbox</h3>
                        <Button asChild variant="ghost" size="sm">
                            <Link to="/dashboard/messages">
                                <MessageSquare className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {conversations.slice(0, 4).map((c) => (
                            <Link
                                key={c.id}
                                to="/dashboard/messages"
                                className="flex items-center gap-3 rounded-xl p-2 hover:bg-accent/10"
                            >
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={c.avatar} />
                                    <AvatarFallback>{c.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className="min-w-0 flex-1">
                                    <div className="flex justify-between">
                                        <span className="truncate text-sm font-medium">
                                            {c.name}
                                        </span>
                                        <span className="shrink-0 text-xs text-muted-foreground">
                                            {c.time}
                                        </span>
                                    </div>
                                    <div className="truncate text-xs text-muted-foreground">
                                        {c.last}
                                    </div>
                                </div>
                                {c.unread > 0 && (
                                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                                        {c.unread}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default DashboardIndex;
