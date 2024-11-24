import { AppSidebar } from '@/registry/new-york/block/sidebar-14/components/app-sidebar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/registry/new-york/ui/breadcrumb';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/registry/new-york/ui/sidebar';

export const iframeHeight = '800px';

export const description = 'A sidebar on the right.';

export default function Page() {
    return (
        <SidebarProvider>
            <SidebarInset>
                <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className='hidden md:block'>
                                <BreadcrumbLink href='#'>Building Your Application</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className='hidden md:block' />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <SidebarTrigger className='-mr-1 ml-auto rotate-180' />
                </header>
                <div className='flex flex-1 flex-col gap-4 p-4'>
                    <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
                        <div className='aspect-video rounded-xl bg-muted/50' />
                        <div className='aspect-video rounded-xl bg-muted/50' />
                        <div className='aspect-video rounded-xl bg-muted/50' />
                    </div>
                    <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
                </div>
            </SidebarInset>
            <AppSidebar side='right' />
        </SidebarProvider>
    );
}