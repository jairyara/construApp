import React from 'react';
import {Activity} from "@/store/globalStore";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


enum ActivityStatus {
    EnProceso = 'En proceso',
    Atrasado = 'Atrasado',
    Finalizado = 'Finalizado',
    NoIniciado = 'No iniciado'
}

enum ActivityStatusColor {
    'En proceso' = 'bg-custom-success',
    Atrasado = 'bg-custom-danger',
    Finalizado = 'bg-custom-info',
    'No iniciado' = 'bg-custom-grayLight'
}

export default function DashboardControlWork({activities}: { activities: Activity[] }) {
    return (
        <div>
            <div className='my-4 pb-4 border-b border-gray-200 flex justify-between'>
                <h2 className='text-xl font-semibold'>Total actividades: <span>{activities.length}</span></h2>
                <h2 className='text-xl font-semibold'>Actividades completadas: <span>{
                    activities.filter(activity => activity.overall_status === ActivityStatus.Finalizado).length
                }</span></h2>
                <h2 className='text-xl font-semibold'>Actividades en proceso: <span>{
                    activities.filter(activity => activity.overall_status === ActivityStatus.EnProceso).length
                }</span></h2>
                <h2 className='text-xl font-semibold'>Actividades retrasadas: <span>{
                    activities.filter(activity => activity.overall_status === ActivityStatus.Atrasado).length
                }</span></h2>
            </div>
            <Table>
                <TableCaption>Listado de las actividades.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-2/12'>Actividad</TableHead>
                        <TableHead className='w-2/12'>Responsable</TableHead>
                        <TableHead className='w-1/12'>Fecha de inicio</TableHead>
                        <TableHead className='w-1/12'>Fecha de finalización</TableHead>
                        <TableHead className='w-1/12'>Progreso</TableHead>
                        <TableHead className='w-1/12'>Materiales utilizados</TableHead>
                        <TableHead className='w-1/12'>Problemas</TableHead>
                        <TableHead className='w-1/12'>Evidencias</TableHead>
                        <TableHead className='w-2/12'>Estado</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {activities && activities.map((activity, index) => (
                        <TableRow key={index}>
                            <TableCell>{activity.activity}</TableCell>
                            <TableCell>{activity.responsible}</TableCell>
                            <TableCell>{activity.start_date}</TableCell>
                            <TableCell>{activity.end_date}</TableCell>
                            <TableCell>{activity.progress}%</TableCell>
                            <TableCell>
                                <Dialog>
                                    <DialogTrigger className='py-2 px-2 rounded-lg border border-gray-200'>
                                        Ver materiales
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Materiales usados</DialogTitle>
                                            <DialogDescription>
                                                Listado de los materiales utilizados en la actividad.
                                            </DialogDescription>
                                        </DialogHeader>
                                        {
                                            activity.materials_used.length > 0 ? (
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead>Material</TableHead>
                                                            <TableHead>Cantidad</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {activity.materials_used.map((material, index) => (
                                                            <TableRow key={index}>
                                                                <TableCell>{material.material}</TableCell>
                                                                <TableCell>{material.quantity}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            ) : <DialogDescription>No hay materiales utilizados.</DialogDescription>
                                        }
                                    </DialogContent>
                                </Dialog>

                            </TableCell>
                            <TableCell>
                                <Dialog>
                                    <DialogTrigger className='py-2 px-2 rounded-lg border border-gray-200'>
                                        Ver problemas
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Problemas reportados</DialogTitle>
                                            <DialogDescription>
                                                Listado de los problemas reportados en la actividad.
                                            </DialogDescription>
                                        </DialogHeader>
                                        {
                                            activity.issues.length > 0 ? (
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead>Descripción</TableHead>
                                                            <TableHead>Fecha reportado</TableHead>
                                                            <TableHead>Resuelto</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {activity.issues.map((issue, index) => (
                                                            <TableRow key={index}>
                                                                <TableCell>{issue.description}</TableCell>
                                                                <TableCell>{issue.date_reported}</TableCell>
                                                                <TableCell>{issue.resolved ? 'Sí' : 'No'}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            ) : <DialogDescription>No hay problemas reportados.</DialogDescription>
                                        }
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                            <TableCell>
                                <Dialog>
                                    <DialogTrigger className='py-2 px-2 rounded-lg border border-gray-200'>
                                        Ver evidencias
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Evidencias</DialogTitle>
                                            <DialogDescription>
                                                Listado de las evidencias de la actividad.
                                            </DialogDescription>
                                        </DialogHeader>
                                        {
                                            activity.evidences.length > 0 ? (
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead>Descripción</TableHead>
                                                            <TableHead>URL</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {activity.evidences.map((evidence, index) => (
                                                            <TableRow key={index}>
                                                                <TableCell>{evidence.description}</TableCell>
                                                                <TableCell>
                                                                    <a href={evidence.url} target='_blank' rel='noreferrer'>
                                                                        Ver evidencia
                                                                    </a>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            ) : <DialogDescription>No hay evidencias.</DialogDescription>
                                        }
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                            <TableCell className='flex gap-1 items-center'>
                                <div className=
                                         {`aspect-square w-4 rounded-full 
                                         ${ActivityStatusColor[activity.overall_status as keyof typeof ActivityStatusColor]}`}>

                                </div>
                                {activity.overall_status}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}