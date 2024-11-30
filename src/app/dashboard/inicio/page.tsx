'use client'
import React, {useEffect} from "react";
import {useUserProjectStore, useUserRoleStore} from "@/store/globalStore";
import DashboardIndex from "@/components/dashboard/DashboardIndex";

export default function Page() {

    const {role} = useUserRoleStore();
    const {userProject} = useUserProjectStore();

    useEffect(() => {
        document.title = 'Inicio';
    }, []);

    return (
        <>
            {
                role === 'coordinator' ?
                    <div>
                        { userProject !== '' ?
                            <DashboardIndex />
                            :
                            <h1>Por favor selecciona un proyecto</h1>
                        }

                    </div>
                    :
                    <div>
                        <DashboardIndex />
                    </div>
            }
        </>
    )
}