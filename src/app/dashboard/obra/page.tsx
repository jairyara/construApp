'use client';
import React, {useEffect} from 'react';
import DashboardControlWork from '@/components/dashboard/DashboardControlWork';
import {useControlWorkStore, useUserProjectStore} from "@/store/globalStore";
import work from "@/app/data/work_control.json";

export default function Page() {

    const { userProject } = useUserProjectStore();
    const { activities, setActivities } = useControlWorkStore();

    useEffect(() => {
        if (userProject === 'Centro Comercial XYZ') {
            setActivities(work[0]['Centro Comercial XYZ']);
        } else if (userProject === 'Torre Residencial ABC') {
            setActivities(work[0]['Torre residencial ABC']);
        }
    }, [userProject, setActivities]);


    useEffect(() => {
        document.title = 'Control de obra';
    }, []);


    return(
        <>
            <h1 className='text-center text-3xl font-bold'>Control de obra {userProject}</h1>
            <DashboardControlWork activities={activities} />
        </>
    )
}