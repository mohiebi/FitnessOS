import { ArrowDown, ArrowUp, Minus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Card } from '@/fitnessos/components/ui/card';
import { cn } from '@/fitnessos/lib/utils';

export function StatCard({
    label,
    value,
    delta,
    trend,
    icon: Icon,
    hint,
}: {
    label: string;
    value: string | number;
    delta?: string;
    trend?: 'up' | 'down' | 'flat';
    icon?: LucideIcon;
    hint?: string;
}) {
    const TrendIcon =
        trend === 'up' ? ArrowUp : trend === 'down' ? ArrowDown : Minus;
    const trendColor =
        trend === 'up'
            ? 'text-primary'
            : trend === 'down'
              ? 'text-destructive'
              : 'text-muted-foreground';

    return (
        <Card className="group relative overflow-hidden border-border/60 bg-card p-5 shadow-card-premium transition-all hover:border-primary/40 hover:shadow-glow">
            <div className="flex items-start justify-between">
                <div className="text-xs tracking-wider text-muted-foreground uppercase">
                    {label}
                </div>
                {Icon && (
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                    </div>
                )}
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                {value}
            </div>
            {delta && (
                <div
                    className={cn(
                        'mt-1 flex items-center gap-1 text-xs',
                        trendColor,
                    )}
                >
                    <TrendIcon className="h-3 w-3" />
                    <span>{delta}</span>
                    {hint && (
                        <span className="ml-1 text-muted-foreground">
                            {hint}
                        </span>
                    )}
                </div>
            )}
        </Card>
    );
}

export function ChartCard({
    title,
    description,
    children,
    actions,
}: {
    title: string;
    description?: string;
    children: ReactNode;
    actions?: ReactNode;
}) {
    return (
        <Card className="border-border/60 bg-card p-6 shadow-card-premium">
            <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    {description && (
                        <p className="mt-1 text-xs text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>
                {actions}
            </div>
            {children}
        </Card>
    );
}
