import { Search, Filter, Plus } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/fitnessos/components/app-shell';
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from '@/fitnessos/components/ui/avatar';
import { Badge } from '@/fitnessos/components/ui/badge';
import { Button } from '@/fitnessos/components/ui/button';
import { Card } from '@/fitnessos/components/ui/card';
import { Input } from '@/fitnessos/components/ui/input';
import { Progress } from '@/fitnessos/components/ui/progress';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/fitnessos/components/ui/table';
import { clients } from '@/fitnessos/lib/mock-data';
import { Link } from '@/fitnessos/router-link';

function ClientsList() {
    const [q, setQ] = useState('');
    const filtered = clients.filter((c) =>
        c.name.toLowerCase().includes(q.toLowerCase()),
    );

    return (
        <div>
            <PageHeader
                title="Clients"
                description={`${clients.length} active clients across all packages.`}
                actions={
                    <Button className="rounded-full bg-brand-gradient text-primary-foreground">
                        <Plus className="mr-2 h-4 w-4" />
                        Add client
                    </Button>
                }
            />

            <Card className="border-border/60 bg-card p-4 shadow-card-premium">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative min-w-[200px] flex-1">
                        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search clients…"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                    <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                    </Button>
                    {['All', 'Active', 'At risk', 'Paused'].map((t, i) => (
                        <Button
                            key={t}
                            size="sm"
                            variant={i === 0 ? 'secondary' : 'ghost'}
                            className="rounded-full"
                        >
                            {t}
                        </Button>
                    ))}
                </div>

                <div className="mt-4 overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Client</TableHead>
                                <TableHead>Goal</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Package</TableHead>
                                <TableHead>Progress</TableHead>
                                <TableHead>Last check-in</TableHead>
                                <TableHead>Notes</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filtered.map((c) => (
                                <TableRow key={c.id} className="cursor-pointer">
                                    <TableCell>
                                        <Link
                                            to="/dashboard/clients/$id"
                                            params={{ id: c.id }}
                                            className="flex items-center gap-3"
                                        >
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={c.avatar} />
                                                <AvatarFallback>
                                                    {c.name[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">
                                                {c.name}
                                            </span>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">
                                            {c.goal}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            className={
                                                c.status === 'Active'
                                                    ? 'bg-primary/15 text-primary'
                                                    : c.status === 'At risk'
                                                      ? 'bg-destructive/15 text-destructive'
                                                      : 'bg-muted text-muted-foreground'
                                            }
                                        >
                                            {c.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-sm">
                                        {c.package}
                                    </TableCell>
                                    <TableCell>
                                        <div className="w-32">
                                            <div className="mb-1 flex justify-between text-xs">
                                                <span className="text-muted-foreground">
                                                    {c.progress}%
                                                </span>
                                            </div>
                                            <Progress
                                                value={c.progress}
                                                className="h-1.5"
                                            />
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-muted-foreground">
                                        {c.lastCheckin}
                                    </TableCell>
                                    <TableCell className="max-w-[240px] truncate text-sm text-muted-foreground">
                                        {c.notes}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {filtered.length === 0 && (
                        <div className="p-12 text-center text-muted-foreground">
                            No clients found.
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}

export default ClientsList;
