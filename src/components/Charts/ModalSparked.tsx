import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'

import { CSSProperties } from 'react'

type ModalProps = {
  bgColor: string
}



const ModalSparked = ({bgColor} : ModalProps) => {

  const chartData = [
    { month: 'January', Warnings: 186 },
    { month: 'February', Warnings: 305 },
    { month: 'March', Warnings: 237 },
    { month: 'April', Warnings: 73 },
    { month: 'May', Warnings: 209 },
    { month: 'June', Warnings: 214 },
  ]

  const chartConfig = {
    sales: {
      label: 'Sales',
      color: bgColor,
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="w-full md:w-1/2" style={{height: '400px'}}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}>
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={bgColor} stopOpacity={0.3} />
            <stop offset="95%" stopColor={bgColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <ChartLegend verticalAlign="top" align="right" content={<ChartLegendContent />} /> */}
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Area dataKey="Warnings" type="natural" stroke={bgColor} fillOpacity={1} fill="url(#price)" />
      </AreaChart>
    </ChartContainer>
  )
}

export default ModalSparked