import { Link as InertiaLink, usePage } from '@inertiajs/react';
import type { ComponentProps } from 'react';

type LinkProps = Omit<ComponentProps<typeof InertiaLink>, 'href'> & {
    to: string;
    params?: Record<string, string | number>;
    activeProps?: { className?: string };
    activeOptions?: { exact?: boolean };
};

function resolveRoute(to: string, params?: LinkProps['params']): string {
    if (!params) {
        return to;
    }

    return Object.entries(params).reduce((path, [key, value]) => {
        return path.replace(`$${key}`, encodeURIComponent(String(value)));
    }, to);
}

export function Link({
    to,
    params,
    activeProps,
    activeOptions,
    className,
    ...props
}: LinkProps) {
    const { url } = usePage();
    const href = resolveRoute(to, params);
    const pathname = url.split('?')[0] || '/';
    const isActive = activeOptions?.exact
        ? pathname === href
        : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <InertiaLink
            href={href}
            className={isActive && activeProps?.className ? activeProps.className : className}
            {...props}
        />
    );
}

