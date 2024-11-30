'use client';
import React, {useEffect} from 'react';
import {DashboardGantt} from "@/components/dashboard/DashboardGantt";
import {useUserProjectStore} from "@/store/globalStore";
import {useProgramStore} from "@/store/globalStore";
import schedule from "@/app/data/scheduling_control.json";

export default function Page() {

    const {userProject} = useUserProjectStore();
    const {activities, setActivities} = useProgramStore();

    useEffect(() => {
        if (userProject === 'Centro Comercial XYZ') {
            setActivities(schedule[0].schedule);
        } else if (userProject === 'Torre Residencial ABC') {
            setActivities(schedule[1].schedule);
        }
    }, [userProject, setActivities]);


    useEffect(() => {
        document.title = 'Programación';
    }, []);

    return(
        <>
            <DashboardGantt activity={activities} />
        </>
    )
}