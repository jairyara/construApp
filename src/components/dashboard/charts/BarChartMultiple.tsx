"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

interface ChartData {
    pendingTasks: number | undefined;
    qualityIssues: number | undefined;
}

const chartConfig = {
    pendingTasks: {
        label: "Tareas pendientes ",
        color: "hsl(var(--chart-1))",
    },
    qualityIssues: {
        label: "Reprocesos por calidad ",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function BarChartMultiple({pendingTasks = 0, qualityIssues = 0}: ChartData) {

    const chartData = [
        { task: "", pendingTasks:pendingTasks, qualityIssues: qualityIssues },
    ]

    return (
        <Card>
            <CardHeader className='flex flex-col items-center'>
                <CardTitle>Tareas pendientes</CardTitle>
                <CardDescription className='capitalize'>{new Date().toLocaleDateString('es-ES', {
                    month: 'long',
                    year: 'numeric'
                })}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="task"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="pendingTasks" fill="#FF9900" radius={4} />
                        <Bar dataKey="qualityIssues" fill="#EE5557" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex justify-center items-start gap-2 text-sm">
                <div className="flex items-center gap-1">
                    <div className='aspect-square w-4 rounded bg-custom-warning'></div>
                    <span>Tareas pendientes</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className='aspect-square w-4 rounded bg-custom-danger'></div>
                    <span>Reprocesos por calidad</span>
                </div>

            </CardFooter>
        </Card>
    )
}
