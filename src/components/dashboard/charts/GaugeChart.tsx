"use client"

import {TrendingUp} from "lucide-react"
import {Label, PolarRadiusAxis, RadialBar, RadialBarChart} from "recharts"

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

const chartConfig = {
    restante: {
        label: "Restante",
        color: "hsl(var(--chart-1))",
    },
    avance: {
        label: "Avance",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

interface GaugeChartProps {
    overallProgress: number | undefined,
    overallProgressVsLastMonth: number | undefined
}

export function GaugeChart({overallProgress = 0, overallProgressVsLastMonth}: GaugeChartProps) {

    const chartData = [{
        month: new Date().toLocaleDateString('es-ES', {month: 'long', year: 'numeric'}),
        restante: 100 - overallProgress,
        avance: overallProgress
    }]


    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Avance del proyecto</CardTitle>
                <CardDescription className='capitalize'>{new Date().toLocaleDateString('es-ES', {
                    month: 'long',
                    year: 'numeric'
                })}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[250px]"
                >
                    <RadialBarChart
                        data={chartData}
                        endAngle={180}
                        innerRadius={80}
                        outerRadius={130}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel/>}
                        />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({viewBox}) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 16}
                                                    className="fill-foreground text-2xl font-bold"
                                                >
                                                    {overallProgress.toLocaleString()} %
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 4}
                                                    className="fill-muted-foreground"
                                                >
                                                    Avance del proyecto
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="restante"
                            stackId="a"
                            cornerRadius={5}
                            fill="#4C6EF4"
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="avance"
                            fill="#0DBF67"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                        />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm -mt-12">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Avance del {overallProgressVsLastMonth}% respecto al mes anterior <TrendingUp className="h-4 w-4"/>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <div className='aspect-square w-4 bg-custom-success rounded'></div>
                        <span>Avance</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className='aspect-square w-4 bg-custom-info rounded'></div>
                        <span>Restante</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
