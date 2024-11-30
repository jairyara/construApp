import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {QualityReport} from "@/store/globalStore";
import Image from "next/image";

interface Quality {
    quality: QualityReport[];
}

const DashboardQuality : React.FC<Quality> = ({quality}) => {
    return (
        <div>
            <p>Reportes de calidad</p>
            <Table>
                <TableCaption>Reportes de calidad</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Id reporte</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Tipo inspección</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead>No conformidades</TableHead>
                        <TableHead>Fotos</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        quality.map((report, index) => (
                            <TableRow key={index}>
                                <TableCell>{report.report_id}</TableCell>
                                <TableCell>{report.date}</TableCell>
                                <TableCell>{report.inspection_type}</TableCell>
                                <TableCell>{report.description}</TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger className='px-2 py-2 border border-gray-200 rounded-lg'>
                                            Ver no conformidades
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>No conformidades</DialogTitle>
                                            </DialogHeader>
                                            <DialogDescription>
                                                {
                                                    report.non_conformities.length > 0 ? (
                                                        report.non_conformities.map((non_conformity, index) => (
                                                            <li className='flex flex-col gap-2 list-none' key={index}>
                                                                <>{non_conformity.issue} <br/></>
                                                                <>{non_conformity.corrective_action} <br/></>
                                                                <>{non_conformity.status} <br/></>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <>No hay no conformidades</>
                                                    )
                                                }
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger className='px-2 py-2 border border-gray-200 rounded-lg'>
                                            Ver fotos
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Fotos</DialogTitle>
                                            </DialogHeader>
                                            <DialogDescription className='flex gap-2 rounded'>
                                                {
                                                    report.photos.length > 0 ? (
                                                        report.photos.map((photo, index) => (
                                                            <Image width={200} height={200} key={index} src={photo} alt={`Foto ${index}`} className='w-56 h-56 object-cover' />
                                                        ))
                                                    ) : (
                                                        <>No hay fotos</>
                                                    )
                                                }
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default DashboardQuality;