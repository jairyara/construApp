'use client';
import React, {useEffect, useState} from "react";
import {Skeleton} from "@/components/ui/skeleton";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {SidebarCustomTrigger} from "@/components/dashboard/header/SidebarCustomTrigger";
import projects from '@/app/data/projects.json';
import users from '@/app/data/users.json';
import {useUserProjectStore, useUserRoleStore} from "@/store/globalStore";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import SelectProjectComboBox from "@/components/dashboard/SelectProjectComboBox";

interface Project {
    id: number;
    name: string;
    location: string;
    start_date: string;
    end_date: string;
    status: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    permissions: string[];
    avatar: string;
}

export function Header() {
    const [pageTitle, setPageTitle] = useState<string>('')
    const pathname = usePathname();

    const [user, setUser] = useState<User | null>(null);

    const {role} = useUserRoleStore();
    const {setUserProject, userProject} = useUserProjectStore();

    const avatarFallback = (name: string) => {
        return name.split(" ").map((n) => n[0]).join("");
    }

    useEffect(() => {
        if (role === 'coordinator') {
            setUser(users[0]);
        } else {
            setUser(users[1]);
            setUserProject(projects[0].name);
        }
    }, [role, setUserProject]);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setPageTitle(document.title.split(" | ")[0]);
        });

        observer.observe(document.querySelector('title')!, {childList: true});

        // Set the initial title
        setPageTitle(document.title.split(" | ")[0]);

        return () => {
            observer.disconnect();
        };
    }, [pathname]);

    return (
        <header className="bg-white h-20 shadow flex items-center gap-4 justify-between px-6">
            <div className='flex items-center gap-4'>
                <SidebarCustomTrigger/>
                <div>
                    {pageTitle ? <p>{pageTitle}</p> : <Skeleton className="w-40 h-4"/>}
                </div>
                <div>
                    {
                        role === 'coordinator' ? (
                            <SelectProjectComboBox/>
                        ) : (
                            <div>
                                {
                                    !user ? (
                                        <Skeleton className="w-20 h-4 bg-gray-100"/>
                                    ) : (
                                        <Badge variant='outline' className="text-xs">
                                            {userProject}
                                        </Badge>)
                                }
                            </div>
                        )}
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <Popover>
                    <PopoverTrigger className='flex items-center gap-2 rounded-full hover:bg-custom-grayLight/40 p-2'>
                        <div className='flex items-center gap-2'>
                            <Image src='/icons/world.svg' alt='Usuario' width={20} height={20}/>
                            <p className='text-sm'>{'ES'}</p>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className='right-0'>
                        En construcción
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger className='flex items-center gap-2 rounded-full hover:bg-custom-grayLight/40 p-2'>
                        <div>
                            <Image src='/icons/moon.svg' alt='theme mode icon' width={20} height={20}/>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className='right-0'>
                        En construcción
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger className='flex items-center rounded-full hover:bg-custom-grayLight/40 p-2'>
                        <div className='relative'>
                            <p className='absolute left-2 -top-3 text-custom-white bg-custom-danger aspect-square w-5 flex items-center justify-center rounded-full text-xs'>
                                4
                            </p>
                            <Image className='' src='/icons/bell.svg' alt='Notificaciones' width={20} height={20}/>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className='right-0'>
                        En construcción
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger className='flex items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <Avatar>
                                <AvatarImage src={user?.avatar}/>
                                <AvatarFallback>{avatarFallback(user?.name || '')}</AvatarFallback>
                            </Avatar>
                            <div>
                                {
                                    !user && (
                                        <div className='flex flex-col gap-2'>
                                            <Skeleton className='w-20 h-4 bg-gray-100'/>
                                            <Skeleton className='w-12 h-3 bg-gray-100'/>
                                        </div>
                                    )
                                }
                                <p className='text-sm text-left'>
                                    {user?.name}
                                </p>
                                <p className='text-xs text-left text-custom-grayMedium'>
                                    {user?.role}
                                </p>
                            </div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className='right-0'>
                        <Link className='block w-full h-full' href='/'>
                            Cerrar sesión
                        </Link>
                    </PopoverContent>
                </Popover>
            </div>
        </header>
    )
}