import React, {useState} from "react";
import Image from "next/image";
import {useSidebar} from "@/components/ui/sidebar";

export const SidebarCustomTrigger = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const {toggleSidebar} = useSidebar();

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        toggleSidebar();
    }

    return (
        <button onClick={handleToggleSidebar}>
            {
                !isSidebarOpen ?
                    <Image src="/icons/sidebarClose.svg" alt="close" width={30} height={30}/> :
                    <Image src="/icons/SidebarOpen.svg" alt="menu" width={30} height={30}/>
            }
        </button>
    );
}