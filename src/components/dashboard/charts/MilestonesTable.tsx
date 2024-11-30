import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface MilestonesTableProps {
    task: string;
    due_date: string;
    status: string;
    is_critical: boolean;
}

interface MilestoneProps {
    milestones: MilestonesTableProps[] | undefined;
}

export const MilestonesTable = ({milestones}: MilestoneProps) => {
    return (
        <article className='border border-gray-200 shadow-md bg-card rounded-xl text-card-foreground p-8'>
            <h2 className='text-lg font-semibold mb-6 text-center'>Próximas tareas</h2>
            {
                milestones && milestones.length > 0 ? (
                    <Table>
                        <TableCaption>Un listado de las próximas tareas.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-4/12'>Tarea</TableHead>
                                <TableHead className='w-3/12'>Fecha de entrega</TableHead>
                                <TableHead className='w-2/12'>Estado</TableHead>
                                <TableHead className="w-3/12 text-right">Es actividad crítica</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                milestones && milestones.map((milestone, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{milestone.task}</TableCell>
                                        <TableCell>{milestone.due_date}</TableCell>
                                        <TableCell className='flex gap-1 items-center'>
                                            <div className={`aspect-square w-4 rounded-full
                                            ${milestone.status === 'En progreso' 
                                                ? 'bg-custom-success' 
                                                : milestone.status === 'Atrasado' 
                                            ?'bg-custom-danger' : 'bg-custom-info'}`}></div>
                                            {milestone.status}
                                        </TableCell>
                                        <TableCell className='text-right'>
                                            {milestone.is_critical ? 'Sí' : 'No'}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }

                        </TableBody>
                    </Table>) : (
                    <p>No hay tareas pendientes.</p>
                )
            }
        </article>

    )
}