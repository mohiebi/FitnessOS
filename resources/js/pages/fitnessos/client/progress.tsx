import { PageHeader } from "@/fitnessos/components/app-shell";
import { Card } from "@/fitnessos/components/ui/card";
import { weightSeries, strengthSeries } from "@/fitnessos/lib/mock-data";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const ttStyle = { background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12 };

function Progress() {
  return (
    <div>
      <PageHeader title="Progress" description="Down 7kg. Up 3 PRs. 12 weeks in." />

      <div className="grid gap-4 md:grid-cols-3">
        {[["Weight lost","-7.0 kg"],["Waist","-6 cm"],["Squat PR","+45 kg"]].map(([k, v]) => (
          <Card key={k} className="border-border/60 bg-card p-6 shadow-card-premium">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
            <div className="mt-2 text-3xl font-semibold text-gradient">{v}</div>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="border-border/60 bg-card p-6 shadow-card-premium">
          <h3 className="mb-4 font-semibold">Weight</h3>
          <div className="h-64"><ResponsiveContainer><LineChart data={weightSeries}><CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="w" stroke="var(--color-muted-foreground)" fontSize={12} /><YAxis stroke="var(--color-muted-foreground)" fontSize={12} domain={["dataMin - 1", "dataMax + 1"]} /><Tooltip contentStyle={ttStyle} /><Line dataKey="weight" stroke="var(--color-chart-1)" strokeWidth={2.5} dot={{ r: 3 }} /></LineChart></ResponsiveContainer></div>
        </Card>
        <Card className="border-border/60 bg-card p-6 shadow-card-premium">
          <h3 className="mb-4 font-semibold">Strength</h3>
          <div className="h-64"><ResponsiveContainer><LineChart data={strengthSeries}><CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="w" stroke="var(--color-muted-foreground)" fontSize={12} /><YAxis stroke="var(--color-muted-foreground)" fontSize={12} /><Tooltip contentStyle={ttStyle} /><Legend wrapperStyle={{ fontSize: 12 }} /><Line dataKey="squat" stroke="var(--color-chart-1)" strokeWidth={2} /><Line dataKey="bench" stroke="var(--color-chart-2)" strokeWidth={2} /><Line dataKey="deadlift" stroke="var(--color-chart-3)" strokeWidth={2} /></LineChart></ResponsiveContainer></div>
        </Card>
      </div>

      <Card className="mt-6 border-border/60 bg-card p-6 shadow-card-premium">
        <h3 className="mb-4 font-semibold">Photo gallery</h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {[47, 44, 45, 33, 52, 13].map((i, idx) => (
            <div key={i} className="relative overflow-hidden rounded-xl">
              <img src={`https://i.pravatar.cc/300?img=${i}`} className="aspect-[3/4] w-full object-cover" alt="" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-2 text-xs">Week {idx * 2 + 1}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Progress;
