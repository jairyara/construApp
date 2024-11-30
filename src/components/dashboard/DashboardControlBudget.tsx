import React from 'react';
import { Budget } from "@/store/globalStore";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
} from "@/components/ui/table";

interface DashboardControlBudgetProps {
    budget: Budget[];
}

const DashboardControlBudget: React.FC<DashboardControlBudgetProps> = ({ budget }) => {

    const plannedBudget = budget.reduce((acc, item) => acc + item.planned_cost, 0);
    const actualBudget = budget.reduce((acc, item) => acc + item.actual_cost, 0);
    const deviation = budget.reduce((acc, item) => acc + item.deviation, 0);
    const executedPercentage = (actualBudget / plannedBudget) * 100;

    return (
        <>
            <div className='mb-4'>
                <h2>Presupuesto planeado: <span>$ {plannedBudget.toLocaleString('es-CO')}</span></h2>
                <h2>Presupuesto actual: <span>$ {actualBudget.toLocaleString('es-CO')}</span></h2>
                <h2>Desviación: <span>$ {deviation.toLocaleString('es-CO')}</span></h2>
                <h2>Porcentaje ejecutado: <span>{executedPercentage.toFixed(2)}%</span></h2>
            </div>
            <Table>
                <TableCaption>Presupuesto del proyecto</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Capítulo</TableHead>
                        <TableHead>Nombre capítulo</TableHead>
                        <TableHead>Estimado</TableHead>
                        <TableHead >Ejecutado</TableHead>
                        <TableHead>Desviación</TableHead>
                        <TableHead>Estado</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        budget && budget.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>$ {item.planned_cost.toLocaleString('es-CO')}</TableCell>
                                <TableCell>$ {item.actual_cost.toLocaleString('es-CO')}</TableCell>
                                <TableCell>$ {item.deviation.toLocaleString('es-CO')}</TableCell>
                                <TableCell>{item.status}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                    <TableRow className='font-bold bg-gray-200'>
                        <TableCell colSpan={2}>Totales</TableCell>
                        <TableCell>$ {plannedBudget.toLocaleString('es-CO')}</TableCell>
                        <TableCell>$ {actualBudget.toLocaleString('es-CO')}</TableCell>
                        <TableCell>$ {deviation.toLocaleString('es-CO')}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    );
}

export default DashboardControlBudget;