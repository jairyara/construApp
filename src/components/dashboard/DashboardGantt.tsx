import React from 'react';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {ActivityProgress} from "@//store/globalStore";
import {useUserProjectStore} from "@/store/globalStore";

interface Activity {
    activity: ActivityProgress[];
}

export const DashboardGantt : React.FC<Activity> = ({activity}) => {

    const {userProject} = useUserProjectStore();

    return (
        <div>
            <ResizablePanelGroup className='border rounded' direction="horizontal">
                <ResizablePanel defaultSize={60}>
                    <Table className='w-full overflow-x-auto min-w-[800px]'>
                        <TableCaption>Programación</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Capítulo</TableHead>
                                <TableCell>Actividad</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Fecha de inicio</TableCell>
                                <TableCell>Fecha de fin</TableCell>
                                <TableCell>Duración estimada</TableCell>
                                <TableCell>Duración real</TableCell>
                                <TableCell>Dependencias</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {activity.map((activity, index) => (
                                <TableRow key={index}>
                                    <TableCell>{activity.task_id}</TableCell>
                                    <TableCell>{activity.task_name}</TableCell>
                                    <TableCell>{activity.status}</TableCell>
                                    <TableCell>{activity.start_date}</TableCell>
                                    <TableCell>{activity.end_date}</TableCell>
                                    <TableCell>{activity.duration} {`${activity.duration > 0 ? 'días' : activity.duration === 1 ? 'día' : ''}`}</TableCell>
                                    <TableCell>{activity.actual_duration} {`${activity.actual_duration && activity.actual_duration > 0 ? 'días' : activity.actual_duration === 1 ? 'día' : ''}`}</TableCell>
                                    <TableCell>{activity.dependencies}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>
                    <Table>
                        <TableCaption>Diagrama de Gantt</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Ene</TableHead>
                                <TableHead>Feb</TableHead>
                                <TableHead>Mar</TableHead>
                                <TableHead>Abr</TableHead>
                                <TableHead>May</TableHead>
                                <TableHead>Jun</TableHead>
                                <TableHead>Jul</TableHead>
                                <TableHead>Ago</TableHead>
                                <TableHead>Sep</TableHead>
                                <TableHead>Oct</TableHead>
                                <TableHead>Nov</TableHead>
                                <TableHead>Dic</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className='bg-custom-info rounded-full text-custom-info' colSpan={2}>1</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell className='bg-custom-info rounded-full text-custom-info ' colSpan={2}>1</TableCell>
                                <TableCell ></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className='bg-custom-info rounded-full text-custom-info '>1</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className='bg-custom-info rounded-full text-custom-info '>1</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className='bg-custom-info rounded-full text-custom-info'>5</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className='bg-custom-info rounded-full text-custom-info '>5</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            {
                                userProject === 'Centro Comercial XYZ' && (
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell className='bg-custom-info rounded-full text-custom-info'> 1</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}