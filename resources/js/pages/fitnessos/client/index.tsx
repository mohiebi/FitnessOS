import {
    Flame,
    Droplet,
    Beef,
    Wheat,
    Check,
    Play,
    Trophy,
    MessageCircle,
} from 'lucide-react';
import { PageHeader } from '@/fitnessos/components/app-shell';
import { Avatar, AvatarImage } from '@/fitnessos/components/ui/avatar';
import { Badge } from '@/fitnessos/components/ui/badge';
import { Button } from '@/fitnessos/components/ui/button';
import { Card } from '@/fitnessos/components/ui/card';
import { Progress } from '@/fitnessos/components/ui/progress';
import { habits, workoutWeek, coach } from '@/fitnessos/lib/mock-data';
import { Link } from '@/fitnessos/router-link';

function Today() {
    const day = workoutWeek.days[0];

    return (
        <div>
            <PageHeader
                title="Good morning, Sarah"
                description="Monday, November 8 · Week 12 of 16"
                actions={
                    <Badge className="bg-primary/15 text-primary">
                        <Trophy className="mr-1 h-3 w-3" /> 47-day streak
                    </Badge>
                }
            />

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                <div className="space-y-6">
                    {/* Workout card */}
                    <Card className="relative overflow-hidden border-primary/30 bg-hero-gradient p-6 shadow-glow">
                        <div className="flex items-start justify-between">
                            <div>
                                <Badge className="bg-primary/15 text-primary">
                                    Today's workout
                                </Badge>
                                <h2 className="mt-3 text-2xl font-semibold">
                                    {day.name}
                                </h2>
                                <div className="mt-1 text-sm text-muted-foreground">
                                    {day.exercises.length} exercises · ~55 min
                                </div>
                            </div>
                            <Button
                                asChild
                                className="rounded-full bg-brand-gradient text-primary-foreground"
                            >
                                <Link to="/app/workout">
                                    <Play className="mr-2 h-4 w-4" />
                                    Start
                                </Link>
                            </Button>
                        </div>
                        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
                            {day.exercises.slice(0, 4).map((e) => (
                                <div
                                    key={e.name}
                                    className="min-w-[140px] rounded-xl bg-background/60 p-3 backdrop-blur"
                                >
                                    <div className="text-sm font-medium">
                                        {e.name}
                                    </div>
                                    <div className="mt-1 text-xs text-muted-foreground">
                                        {e.sets}×{e.reps} @ {e.weight}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Nutrition tiles */}
                    <div className="grid gap-4 md:grid-cols-4">
                        <StatTile
                            icon={Flame}
                            label="Calories"
                            value="1,840"
                            target="/ 2,700"
                            pct={68}
                        />
                        <StatTile
                            icon={Beef}
                            label="Protein"
                            value="152g"
                            target="/ 220g"
                            pct={69}
                        />
                        <StatTile
                            icon={Wheat}
                            label="Carbs"
                            value="180g"
                            target="/ 260g"
                            pct={69}
                        />
                        <StatTile
                            icon={Droplet}
                            label="Water"
                            value="2.1L"
                            target="/ 3L"
                            pct={70}
                        />
                    </div>

                    {/* Habits */}
                    <Card className="border-border/60 bg-card p-6 shadow-card-premium">
                        <h3 className="mb-4 font-semibold">Daily habits</h3>
                        <div className="space-y-2">
                            {habits.map((h) => (
                                <div
                                    key={h.name}
                                    className={`flex items-center justify-between rounded-xl border p-3 ${h.done ? 'border-primary/30 bg-primary/5' : 'border-border/60'}`}
                                >
                                    <span
                                        className={
                                            h.done
                                                ? 'text-sm font-medium'
                                                : 'text-sm'
                                        }
                                    >
                                        {h.name}
                                    </span>
                                    <div
                                        className={`grid h-6 w-6 place-items-center rounded-full ${h.done ? 'bg-primary text-primary-foreground' : 'border-2 border-border'}`}
                                    >
                                        {h.done && (
                                            <Check className="h-3 w-3" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="border-border/60 bg-card p-6 shadow-card-premium">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={coach.avatar} />
                            </Avatar>
                            <div>
                                <div className="text-sm font-medium">
                                    Coach Alex
                                </div>
                                <div className="text-xs text-primary">
                                    ● Online
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">
                            "Huge week ahead — nail your protein and you'll
                            crush your Thursday lift. Proud of you. 💪"
                        </p>
                        <Button
                            asChild
                            variant="outline"
                            className="mt-4 w-full rounded-full"
                        >
                            <Link to="/app/messages">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Reply
                            </Link>
                        </Button>
                    </Card>

                    <Card className="border-border/60 bg-card p-6 shadow-card-premium">
                        <h3 className="mb-4 font-semibold">This week</h3>
                        <div className="space-y-3">
                            {[
                                ['Workouts', '4 / 5'],
                                ['Meals tracked', '19 / 21'],
                                ['Sleep avg', '7.8h'],
                                ['Weight change', '-0.7 kg'],
                            ].map(([k, v]) => (
                                <div
                                    key={k}
                                    className="flex justify-between text-sm"
                                >
                                    <span className="text-muted-foreground">
                                        {k}
                                    </span>
                                    <span className="font-medium">{v}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <div className="mb-1 flex justify-between text-xs">
                                <span className="text-muted-foreground">
                                    Weekly goal
                                </span>
                                <span>78%</span>
                            </div>
                            <Progress value={78} className="h-2" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function StatTile({ icon: Icon, label, value, target, pct }: any) {
    return (
        <Card className="border-border/60 bg-card p-4 shadow-card-premium">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon className="h-3.5 w-3.5" />
                {label}
            </div>
            <div className="mt-2 flex items-baseline gap-1">
                <span className="text-xl font-semibold">{value}</span>
                <span className="text-xs text-muted-foreground">{target}</span>
            </div>
            <Progress value={pct} className="mt-2 h-1" />
        </Card>
    );
}

export default Today;
