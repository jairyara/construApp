'use client';
import React, {useEffect} from "react";
import {useQualityReportStore} from "@/store/globalStore";
import {useUserProjectStore} from "@/store/globalStore";
import quality from "@/app/data/quality_reports.json";
import DashboardQuality from "@/components/dashboard/DashboardQuality";

export default function Page() {

    const {userProject} = useUserProjectStore();
    const {reports, setReports} = useQualityReportStore();

    useEffect(() => {
        if (userProject === 'Centro Comercial XYZ') {
            setReports(quality[0].quality_reports);
        } else if (userProject === 'Torre Residencial ABC') {
            setReports(quality[1].quality_reports);
        }
    }, [userProject, setReports]);

    useEffect(() => {
        document.title = 'Calidad';
    }
    , []);

    return(
        <>
            <DashboardQuality quality={reports} />
        </>
    )
}





