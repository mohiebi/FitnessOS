import { Card } from "@/fitnessos/components/ui/card";
import { Button } from "@/fitnessos/components/ui/button";
import { Input } from "@/fitnessos/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/fitnessos/components/ui/avatar";
import { Badge } from "@/fitnessos/components/ui/badge";
import { conversations, messages } from "@/fitnessos/lib/mock-data";
import { Mic, Paperclip, Sparkles, Send, Search, Phone, Video, MoreVertical } from "lucide-react";
import { useState } from "react";

function Messages() {
  const [active, setActive] = useState(conversations[0].id);
  const chat = conversations.find(c => c.id === active)!;
  return (
    <div className="grid h-[calc(100vh-8rem)] grid-cols-1 gap-4 lg:grid-cols-[320px_1fr]">
      <Card className="flex flex-col border-border/60 bg-card p-3 shadow-card-premium">
        <div className="mb-3 flex items-center justify-between px-1">
          <h2 className="font-semibold">Messages</h2>
          <Badge variant="secondary">{conversations.reduce((a, c) => a + c.unread, 0)} unread</Badge>
        </div>
        <div className="relative mb-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search…" className="pl-9" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${active === c.id ? "bg-accent/20" : "hover:bg-accent/10"}`}>
              <Avatar className="h-10 w-10"><AvatarImage src={c.avatar} /><AvatarFallback>{c.name[0]}</AvatarFallback></Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between"><span className="truncate text-sm font-medium">{c.name}</span><span className="shrink-0 text-[10px] text-muted-foreground">{c.time}</span></div>
                <div className="truncate text-xs text-muted-foreground">{c.last}</div>
              </div>
              {c.unread > 0 && <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">{c.unread}</span>}
            </button>
          ))}
        </div>
      </Card>

      <Card className="flex flex-col border-border/60 bg-card shadow-card-premium">
        <div className="flex items-center gap-3 border-b border-border/60 p-4">
          <Avatar><AvatarImage src={chat.avatar} /><AvatarFallback>S</AvatarFallback></Avatar>
          <div className="min-w-0 flex-1"><div className="truncate font-semibold">{chat.name}</div><div className="text-xs text-primary">● Online</div></div>
          <Button size="icon" variant="ghost"><Phone className="h-4 w-4" /></Button>
          <Button size="icon" variant="ghost"><Video className="h-4 w-4" /></Button>
          <Button size="icon" variant="ghost"><MoreVertical className="h-4 w-4" /></Button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "coach" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-md rounded-2xl px-4 py-2.5 text-sm shadow-sm ${m.from === "coach" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                {m.attachment ? <span className="italic opacity-80">{m.text}</span> : m.text}
                <div className="mt-1 text-[10px] opacity-70">{m.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border/60 p-4">
          <div className="flex items-end gap-2">
            <Button size="icon" variant="ghost"><Paperclip className="h-4 w-4" /></Button>
            <Button size="icon" variant="ghost"><Mic className="h-4 w-4" /></Button>
            <Input placeholder="Type a message…" className="flex-1" />
            <Button variant="outline" className="rounded-full"><Sparkles className="mr-2 h-3 w-3" />AI reply</Button>
            <Button size="icon" className="rounded-full bg-brand-gradient text-primary-foreground"><Send className="h-4 w-4" /></Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Messages;
