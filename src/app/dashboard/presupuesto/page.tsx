'use client';
import React, {useEffect} from 'react';
import {useUserProjectStore} from "@/store/globalStore";
import {useBudgetStore} from "@/store/globalStore";
import budget from "@/app/data/budget_control.json";
import DashboardControlBudget from "@/components/dashboard/DashboardControlBudget";


export default function Page() {

    const {userProject} = useUserProjectStore();
    const {budgets, setBudgets} = useBudgetStore();

    useEffect(() => {
        if (userProject === 'Centro Comercial XYZ') {
            setBudgets(budget[0].budget);
        } else if (userProject === 'Torre Residencial ABC') {
            setBudgets(budget[1].budget);
        }
    }, [userProject, setBudgets]);

    return(
        <>
            <DashboardControlBudget budget={ budgets } />
        </>
    )
}