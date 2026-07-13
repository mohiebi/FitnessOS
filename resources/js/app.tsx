import { createInertiaApp } from '@inertiajs/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import { AppShell as FitnessOSAppShell } from '@/fitnessos/components/app-shell';
import SettingsLayout from '@/layouts/settings/layout';
import type { ReactNode } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

function CoachLayout({ children }: { children: ReactNode }) {
    return <FitnessOSAppShell variant="coach">{children}</FitnessOSAppShell>;
}

function ClientLayout({ children }: { children: ReactNode }) {
    return <FitnessOSAppShell variant="client">{children}</FitnessOSAppShell>;
}

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'welcome':
                return null;
            case name.startsWith('fitnessos/dashboard/'):
                return CoachLayout;
            case name.startsWith('fitnessos/client/'):
                return ClientLayout;
            case name.startsWith('fitnessos/'):
                return null;
            case name.startsWith('auth/'):
                return AuthLayout;
            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];
            default:
                return AppLayout;
        }
    },
    strictMode: true,
    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                <Toaster />
            </TooltipProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
