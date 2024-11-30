import React, {useState, useEffect} from 'react';
import {GaugeChart} from "@/components/dashboard/charts/GaugeChart";
import dashboard from "@/app/data/dashboard.json";
import projects from "@/app/data/projects.json";
import {useUserProjectStore} from "@/store/globalStore";
import {Badge} from "@/components/ui/badge";
import {DonutChart} from "@/components/dashboard/charts/DonutChart";
import {BarChartMultiple} from "@/components/dashboard/charts/BarChartMultiple";
import {MilestonesTable} from "@/components/dashboard/charts/MilestonesTable";

interface DashboardData {
    project_id: number;
    overall_progress: number;
    overall_vs_last_month: number;
    budget_usage: {
        planned: number;
        actual: number;
        this_month: number;
    };
    pending_tasks: number;
    quality_issues: number;
    next_milestones: {
        task: string;
        due_date: string;
        status: string;
        is_critical: boolean;
    }[];
}

interface Project {
    id: number;
    name: string;
    location: string;
    start_date: string;
    end_date: string;
    status: string;
}

const DashboardIndex = () => {
    const [dashboardData, setDashboardData] = useState<DashboardData>();
    const [project, setProject] = useState<Project>();

    const {userProject} = useUserProjectStore();

    useEffect(() => {
        if (userProject === 'Centro Comercial XYZ') {
            setDashboardData(dashboard[0]);
            setProject(projects[0]);
        } else if (userProject === 'Torre Residencial ABC') {
            setDashboardData(dashboard[1]);
            setProject(projects[1]);
        }
    }, [userProject]);

    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-1 '>
                <h1 className='text-2xl font-semibold'>{project?.name}</h1>
                <p className='text-sm text-muted-foreground'>{project?.location}</p>
                <Badge className='bg-custom-success hover:bg-custom-success max-w-24' >
                    {project?.status}
                </Badge>
            </div>
            <div>
                <h2 className='text-lg font-semibold'>Inicio:
                    <span className='font-normal text-[1rem] text-muted-foreground'> {project?.start_date}</span></h2>
                <h2 className='text-lg font-semibold'>Fin estimado:
                    <span className='font-normal text-[1rem] text-muted-foreground'> {project?.end_date}</span></h2>
            </div>
            <GaugeChart overallProgress={dashboardData?.overall_progress}
                        overallProgressVsLastMonth={dashboardData?.overall_vs_last_month}/>
            <DonutChart actual={dashboardData?.budget_usage.actual}
                        planned={dashboardData?.budget_usage.planned}
                        thisMonth={dashboardData?.budget_usage.this_month}
            />
            <BarChartMultiple qualityIssues={dashboardData?.quality_issues} pendingTasks={dashboardData?.pending_tasks} />
            <MilestonesTable milestones={dashboardData?.next_milestones} />
        </div>
    );
}

export default DashboardIndex;