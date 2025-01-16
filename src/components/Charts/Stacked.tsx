import React, { CSSProperties } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'

type StackedProps = {
  height : CSSProperties['height']
  width: CSSProperties['width']
  warningColor: CSSProperties['color']
}

const Stacked = ({height, width, warningColor} : StackedProps) => {

  const chartData = [
    { month: 'January', normal: 186, warning: 80 },
    { month: 'February', normal: 305, warning: 200 },
    { month: 'March', normal: 237, warning: 120 },
    { month: 'April', normal: 73, warning: 190 },
    { month: 'May', normal: 209, warning: 130 },
    { month: 'June', normal: 214, warning: 140 },
  ]

  const chartConfig = {
    warning: {
      label: 'Warning',
      color: warningColor,
    },
    normal: {
      label: 'Normal',
      color: '#cbd5e1',
    },
  } satisfies ChartConfig  

  return (
    <ChartContainer config={chartConfig} style={{ width: width, height: height}}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis 
          tickLine={false}
          axisLine={false}
        />
        <ChartTooltip />
        {/* <ChartLegend verticalAlign="top" content={<ChartLegendContent />} /> */}
       <Bar radius={0} barSize={50} dataKey="warning" stackId="a" fill={warningColor} />
        <Bar radius={0} barSize={50} dataKey="normal" stackId="a" fill="#cbd5e1" />
      </BarChart>
    </ChartContainer>
  )
}

export default Stacked