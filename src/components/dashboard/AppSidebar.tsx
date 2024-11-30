'use client'
import Link from "next/link"
import Image from "next/image";
import {usePathname} from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar"
import {items} from "@/lib/utils";

export function AppSidebar() {
    const pathname = usePathname();
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarHeader>
                    <Link href={"/"} className='flex justify-center items-center'>
                        <Image width={181} height={50} src='/brand/logotipo.png' alt='ConstruApp Logo'/>
                    </Link>
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className='h-10' asChild>
                                        <Link
                                            className={`group/link transition duration-200 ease-linear ${pathname === item.url && 'bg-custom-black text-custom-white hover:!bg-custom-black hover:!text-custom-white'}`}
                                            href={item.url}>
                                            <Image
                                                className={`${pathname === item.url && 'invert group-hover/link:!invert'} group-hover/link:invert-0`}
                                                width={20} height={10} src={item.icon} alt={item.title}/>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
