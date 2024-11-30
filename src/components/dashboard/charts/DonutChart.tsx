"use client"

import { Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

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

interface BudgetUsageData{
    planned: number | undefined;
    actual: number | undefined;
    thisMonth: number | undefined;
}

const chartConfig = {
    visitors: {
        label: "Presupuesto",
    },
    chrome: {
        label: "Consumido",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Restante",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function DonutChart({planned = 0, actual = 0, thisMonth = 0}: BudgetUsageData) {
    const chartData = [
        { budget: "Consumido $", visitors: actual, fill: "#FFC300" },
        { budget: "Restante $", visitors: planned - actual, fill: "#0DBF67"},
    ]
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Presupuesto utilizado</CardTitle>
                <CardDescription className='capitalize'>{new Date().toLocaleDateString('es-ES', {
                    month: 'long',
                    year: 'numeric'
                })}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="budget"
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={0}
                            activeShape={({
                                              outerRadius = 0,
                                              ...props
                                          }: PieSectorDataItem) => (
                                <Sector {...props} outerRadius={outerRadius + 10} />
                            )}
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Este mes se ha consumido ${thisMonth.toLocaleString('es-CO')} del presupuesto
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <div className='aspect-square w-4 bg-custom-yellowDark rounded'></div>
                        <span>Consumido</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className='aspect-square w-4 bg-custom-success rounded'></div>
                        <span>Restante</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
