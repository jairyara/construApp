import React from 'react'
import { SidebarProvider} from "@/components/ui/sidebar";
import {Header} from "@/components/dashboard/Header";
import {AppSidebar} from "@/components/dashboard/AppSidebar";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full">
                <AppSidebar />
                <div className="flex flex-col flex-1 w-full">
                    <Header />
                    <main className="h-full overflow-y-auto p-6">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}