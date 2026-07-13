import { PageHeader } from "@/fitnessos/components/app-shell";
import { Card } from "@/fitnessos/components/ui/card";
import { Badge } from "@/fitnessos/components/ui/badge";
import { Button } from "@/fitnessos/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/fitnessos/components/ui/avatar";
import { Textarea } from "@/fitnessos/components/ui/textarea";
import { clients } from "@/fitnessos/lib/mock-data";
import { Sparkles, Camera, Moon, Zap, Utensils, Dumbbell, MessageSquare, Weight, Ruler } from "lucide-react";

function Checkins() {
  const c = clients[0];
  return (
    <div>
      <PageHeader title="Weekly check-in"
        description={`${c.name} — Week 12 of 16`}
        actions={<><Button variant="outline" className="rounded-full">Previous check-in</Button><Button className="rounded-full bg-brand-gradient text-primary-foreground">Send feedback</Button></>} />

      <div className="mb-6 flex items-center gap-4">
        <Avatar className="h-12 w-12"><AvatarImage src={c.avatar} /><AvatarFallback>S</AvatarFallback></Avatar>
        <div><div className="font-semibold">{c.name}</div><div className="text-sm text-muted-foreground">Submitted 2 hours ago</div></div>
        <Badge className="ml-auto bg-primary/15 text-primary">On track</Badge>
      </div>

      <Card className="mb-6 border-primary/30 bg-primary/5 p-6 shadow-glow">
        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /><h3 className="font-semibold">AI summary</h3><Badge variant="outline" className="ml-auto">Auto-generated</Badge></div>
        <p className="mt-3 text-sm text-muted-foreground">Sarah is down 0.7kg this week (-7.0kg total) with 94% adherence. Sleep improved to 7.8h avg and energy is trending up. Deadlift PR at 160kg. Recommend: hold calories, add 5kg to compound lifts, celebrate the win.</p>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard icon={Weight} label="Weight" value="85.4 kg" sub="-0.7 kg vs last week" trend="+" />
        <MetricCard icon={Ruler} label="Measurements" value="Waist 78 cm" sub="-1.2 cm vs last week" trend="+" />
        <MetricCard icon={Moon} label="Sleep" value="7.8 h avg" sub="Excellent range" trend="+" />
        <MetricCard icon={Zap} label="Energy" value="8/10" sub="High" trend="+" />
        <MetricCard icon={Utensils} label="Nutrition adherence" value="94%" sub="21 / 21 tracked days" trend="+" />
        <MetricCard icon={Dumbbell} label="Training adherence" value="5 / 5 sessions" sub="100% this week" trend="+" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="border-border/60 bg-card p-6 shadow-card-premium">
          <div className="mb-4 flex items-center gap-2"><Camera className="h-4 w-4 text-primary" /><h3 className="font-semibold">Progress photos</h3></div>
          <div className="grid grid-cols-3 gap-2">
            {["https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400","https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400","https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400"].map(u => (
              <img key={u} src={u} className="aspect-[3/4] rounded-lg object-cover" alt="progress" />
            ))}
          </div>
        </Card>

        <Card className="border-border/60 bg-card p-6 shadow-card-premium">
          <div className="mb-4 flex items-center gap-2"><MessageSquare className="h-4 w-4 text-primary" /><h3 className="font-semibold">Coach feedback</h3></div>
          <Textarea rows={6} defaultValue="Sarah — huge week. Your consistency is what's driving these results. Let's push compounds up 5kg and hold nutrition steady. Sleep looks great — keep protecting it." />
          <div className="mt-3 flex gap-2">
            <Button variant="outline" size="sm"><Sparkles className="mr-2 h-3 w-3" />AI suggest</Button>
            <Button size="sm" className="ml-auto rounded-full bg-brand-gradient text-primary-foreground">Send feedback</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, sub }: { icon: any; label: string; value: string; sub: string; trend?: string }) {
  return (
    <Card className="border-border/60 bg-card p-5 shadow-card-premium">
      <div className="flex items-start justify-between">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
      </div>
      <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-primary">{sub}</div>
    </Card>
  );
}

export default Checkins;
