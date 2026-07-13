import { Send, Paperclip, Mic } from 'lucide-react';
import { PageHeader } from '@/fitnessos/components/app-shell';
import { Avatar, AvatarImage } from '@/fitnessos/components/ui/avatar';
import { Button } from '@/fitnessos/components/ui/button';
import { Card } from '@/fitnessos/components/ui/card';
import { Input } from '@/fitnessos/components/ui/input';
import { messages, coach } from '@/fitnessos/lib/mock-data';

function ClientMessages() {
    return (
        <div>
            <PageHeader title="Chat with your coach" />
            <Card className="flex h-[calc(100vh-14rem)] flex-col border-border/60 bg-card shadow-card-premium">
                <div className="flex items-center gap-3 border-b border-border/60 p-4">
                    <Avatar>
                        <AvatarImage src={coach.avatar} />
                    </Avatar>
                    <div>
                        <div className="font-semibold">Coach Alex</div>
                        <div className="text-xs text-primary">● Online</div>
                    </div>
                </div>
                <div className="flex-1 space-y-3 overflow-y-auto p-6">
                    {messages.map((m, i) => (
                        <div
                            key={i}
                            className={`flex ${m.from === 'client' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-md rounded-2xl px-4 py-2.5 text-sm ${m.from === 'client' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                            >
                                {m.text}
                                <div className="mt-1 text-[10px] opacity-70">
                                    {m.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t border-border/60 p-4">
                    <div className="flex items-end gap-2">
                        <Button size="icon" variant="ghost">
                            <Paperclip className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <Mic className="h-4 w-4" />
                        </Button>
                        <Input
                            placeholder="Message your coach…"
                            className="flex-1"
                        />
                        <Button
                            size="icon"
                            className="rounded-full bg-brand-gradient text-primary-foreground"
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ClientMessages;
