import React, { CSSProperties } from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'

type SparkedProps = {
  height: CSSProperties['height']
  width: CSSProperties['width']
  color: CSSProperties['color']
}



const Sparked = ({height, width, color} : SparkedProps) => {

  const chartData = [
    { month: 'January', Warning: 186 },
    { month: 'February', Warning: 305 },
    { month: 'March', Warning: 237 },
    { month: 'April', Warning: 73 },
    { month: 'May', Warning: 209 },
    { month: 'June', Warning: 214 },
  ]

  const chartConfig = {
    sales: {
      label: 'Warning',
      color: '#1B4DFF',
    },
  } satisfies ChartConfig


  return (
    <ChartContainer config={chartConfig} style={{height: height, width: width}}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}>
        <CartesianGrid vertical={false} horizontal={false} />
        {/* <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        /> */}
        {/* <ChartLegend verticalAlign="top" content={<ChartLegendContent />} /> */}
        <ChartTooltip cursor={false}/>
        <Line dataKey="Warning" type="linear" stroke={color} strokeWidth={2} dot={{
            fill: color,
          }}
          activeDot={{
            r: 6,
          }} 
        />
      </LineChart>
    </ChartContainer>
    
  )
}

export default Sparked