import { PageHeader } from "@/fitnessos/components/app-shell";
import { Card } from "@/fitnessos/components/ui/card";
import { Button } from "@/fitnessos/components/ui/button";
import { Input } from "@/fitnessos/components/ui/input";
import { Label } from "@/fitnessos/components/ui/label";
import { Textarea } from "@/fitnessos/components/ui/textarea";
import { Slider } from "@/fitnessos/components/ui/slider";
import { Camera, Upload } from "lucide-react";

function Checkin() {
  return (
    <div>
      <PageHeader title="Weekly check-in" description="Takes 5 minutes. Coach will reply within 24h." />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/60 bg-card p-6 shadow-card-premium">
          <h3 className="mb-4 font-semibold">Metrics</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div><Label className="mb-2 block">Weight (kg)</Label><Input defaultValue="85.4" /></div>
            <div><Label className="mb-2 block">Waist (cm)</Label><Input defaultValue="78" /></div>
            <div><Label className="mb-2 block">Sleep avg (h)</Label><Input defaultValue="7.8" /></div>
            <div><Label className="mb-2 block">Steps avg</Label><Input defaultValue="9,400" /></div>
          </div>
          <div className="mt-6"><Label className="mb-2 block">Energy · 8/10</Label><Slider defaultValue={[8]} max={10} step={1} /></div>
          <div className="mt-6"><Label className="mb-2 block">Hunger · 4/10</Label><Slider defaultValue={[4]} max={10} step={1} /></div>
        </Card>

        <Card className="border-border/60 bg-card p-6 shadow-card-premium">
          <h3 className="mb-4 font-semibold">Photos</h3>
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3].map(i => (
              <div key={i} className="grid aspect-[3/4] cursor-pointer place-items-center rounded-xl border-2 border-dashed border-border/60 text-muted-foreground transition hover:border-primary hover:text-primary">
                <div className="text-center"><Camera className="mx-auto h-6 w-6" /><div className="mt-2 text-xs">Upload</div></div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-4 w-full"><Upload className="mr-2 h-4 w-4" />Upload from gallery</Button>
        </Card>

        <Card className="border-border/60 bg-card p-6 shadow-card-premium lg:col-span-2">
          <h3 className="mb-4 font-semibold">Reflection</h3>
          <Label className="mb-2 block">How did this week go?</Label>
          <Textarea rows={4} placeholder="Wins, struggles, anything on your mind…" />
          <Label className="mb-2 mt-4 block">Anything I should adjust?</Label>
          <Textarea rows={3} placeholder="Optional — energy, workouts, meals, life…" />
          <div className="mt-4 flex gap-2">
            <Button variant="outline" className="rounded-full">Save draft</Button>
            <Button className="ml-auto rounded-full bg-brand-gradient text-primary-foreground">Submit check-in</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Checkin;
