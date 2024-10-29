'use client';

import * as React from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

import { TooltipProvider } from '@/registry/new-york/ui/tooltip';

import { Provider as JotaiProvider } from 'jotai';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <JotaiProvider>
            <NextThemesProvider {...props}>
                <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
            </NextThemesProvider>
        </JotaiProvider>
    );
}
