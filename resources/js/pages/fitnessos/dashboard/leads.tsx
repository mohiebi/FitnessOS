import { UserPlus, TrendingUp, Percent, DollarSign, Plus } from 'lucide-react';
import { PageHeader } from '@/fitnessos/components/app-shell';
import { StatCard } from '@/fitnessos/components/stat-card';
import { Avatar, AvatarFallback } from '@/fitnessos/components/ui/avatar';
import { Badge } from '@/fitnessos/components/ui/badge';
import { Button } from '@/fitnessos/components/ui/button';
import { Card } from '@/fitnessos/components/ui/card';
import { leads } from '@/fitnessos/lib/mock-data';

const stages = ['New', 'Qualified', 'Call booked', 'Nurturing', 'Won', 'Lost'];

function Leads() {
    return (
        <div>
            <PageHeader
                title="Leads"
                description="Track applications and convert prospects into clients."
                actions={
                    <Button className="rounded-full bg-brand-gradient text-primary-foreground">
                        <Plus className="mr-2 h-4 w-4" />
                        Add lead
                    </Button>
                }
            />

            <div className="grid gap-4 md:grid-cols-4">
                <StatCard
                    label="New this week"
                    value="34"
                    delta="+9"
                    trend="up"
                    icon={UserPlus}
                />
                <StatCard
                    label="Conversion rate"
                    value="28%"
                    delta="+4%"
                    trend="up"
                    icon={Percent}
                />
                <StatCard
                    label="Avg. lead score"
                    value="79"
                    delta="+3"
                    trend="up"
                    icon={TrendingUp}
                />
                <StatCard
                    label="Pipeline value"
                    value="$18.4k"
                    delta="+22%"
                    trend="up"
                    icon={DollarSign}
                />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {stages.slice(0, 3).map((stage) => (
                    <Card
                        key={stage}
                        className="border-border/60 bg-card p-4 shadow-card-premium"
                    >
                        <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                <h3 className="font-semibold">{stage}</h3>
                            </div>
                            <Badge variant="secondary">
                                {leads.filter((l) => l.stage === stage).length}
                            </Badge>
                        </div>
                        <div className="space-y-2">
                            {leads
                                .filter((l) => l.stage === stage)
                                .map((l) => (
                                    <Card
                                        key={l.id}
                                        className="border-border/60 bg-background p-3 shadow-none"
                                    >
                                        <div className="flex items-start gap-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarFallback>
                                                    {l.name[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="min-w-0 flex-1">
                                                <div className="truncate text-sm font-medium">
                                                    {l.name}
                                                </div>
                                                <div className="truncate text-xs text-muted-foreground">
                                                    {l.email}
                                                </div>
                                                <div className="mt-2 flex items-center gap-2">
                                                    <Badge
                                                        variant="outline"
                                                        className="text-[10px]"
                                                    >
                                                        {l.source}
                                                    </Badge>
                                                    <span className="text-xs text-primary">
                                                        Score {l.score}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="text-xs text-muted-foreground">
                                                {l.date}
                                            </span>
                                        </div>
                                    </Card>
                                ))}
                            {leads.filter((l) => l.stage === stage).length ===
                                0 && (
                                <div className="rounded-lg border border-dashed border-border/60 p-6 text-center text-xs text-muted-foreground">
                                    Empty
                                </div>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Leads;
