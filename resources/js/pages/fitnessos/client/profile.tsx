import { PageHeader } from "@/fitnessos/components/app-shell";
import { Card } from "@/fitnessos/components/ui/card";
import { Button } from "@/fitnessos/components/ui/button";
import { Input } from "@/fitnessos/components/ui/input";
import { Label } from "@/fitnessos/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/fitnessos/components/ui/avatar";
import { Badge } from "@/fitnessos/components/ui/badge";

function Profile() {
  return (
    <div>
      <PageHeader title="Profile" description="Manage your details and preferences." />

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/60 bg-card p-6 text-center shadow-card-premium">
          <Avatar className="mx-auto h-24 w-24"><AvatarImage src="https://i.pravatar.cc/240?img=47" /><AvatarFallback>S</AvatarFallback></Avatar>
          <h3 className="mt-4 text-lg font-semibold">Sarah Chen</h3>
          <div className="mt-1 text-sm text-muted-foreground">sarah@email.com</div>
          <Badge className="mt-3 bg-primary/15 text-primary">Elite · 12 wk</Badge>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div><div className="text-xs text-muted-foreground">Weeks in</div><div className="text-lg font-semibold">12</div></div>
            <div><div className="text-xs text-muted-foreground">Streak</div><div className="text-lg font-semibold">47d</div></div>
          </div>
        </Card>

        <Card className="border-border/60 bg-card p-6 shadow-card-premium md:col-span-2">
          <h3 className="mb-4 font-semibold">Personal details</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {[["Full name","Sarah Chen"],["Email","sarah@email.com"],["Height","168 cm"],["Starting weight","92.4 kg"],["Goal","Fat loss"],["Coach","Alex Rivera"]].map(([k,v]) => (
              <div key={k}><Label className="mb-2 block">{k}</Label><Input defaultValue={v} /></div>
            ))}
          </div>
          <Button className="mt-6 rounded-full bg-brand-gradient text-primary-foreground">Save changes</Button>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
