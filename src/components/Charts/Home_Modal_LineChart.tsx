import React, { useEffect, useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'
import MyDatePicker from '../DatePicker/MyDatePicker'
import FillData from '@/assets/data/Filldata'
import FillterData from '@/assets/data/FillterData'
import { Moment } from 'moment';


interface Dataset {
    id: string;
    data: number[];
    label: string;
    borderColor: string;
    units: string;
    fill: boolean;
    value: number;
    min: number;
    max: number;
    desc: string;
    color: string;
    status: string;
  }

  interface PlotData {
    labels: string[];
    datasets: Dataset[];
  }

  interface ModalProps {
    title: string;
    type: string;
  }

const Home_Modal_LineChart = ({title, type} : ModalProps) => {

    const plotData: PlotData = FillData(7, type).plotData;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [timeData, setTimeData] = useState<PlotData>({
        labels: [],
        datasets: []
    });
    const [startDate, setStartDate] = useState<Moment>();
    const [endDate, setEndDate] = useState<Moment>();

    function transformData(input : PlotData) {
        const { labels, datasets } = input;
        const chartData = labels.map((label, index) => {
            const dataPoint: { [key: string]: any } = { date: label };
            datasets.forEach(dataset => {
                dataPoint[dataset.label] = dataset.data[index];
            });
            return dataPoint;
        });
        return chartData;
    }

    function generateChartConfig(input : PlotData) {
        const chartConfig: { [key: string]: { label: string; color: string } } = {};
        input.datasets.forEach(dataset => {
            chartConfig[dataset.label] = {
                label: `${dataset.label} - ${dataset.units}`,
                color: dataset.borderColor
            };
        });
        return chartConfig;
    }

    const [visibleLines, setVisibleLines] = useState<{ [key: string]: boolean }>(
        plotData.datasets.reduce((acc, dataset) => ({ ...acc, [dataset.label]: true }), {})
    );

    const handleToggleLine = (label : string) => {
        setVisibleLines((prevState) => ({
            ...prevState,
            [label]: !prevState[label],
        }));
    };

    const CustomTick = ({ x, y, payload }: { x: number; y: number; payload: { value: string } }) => {
        const [time, date] = payload.value.split(' '); 
        return (
          <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
            <tspan x={x} dy={0}>{time}</tspan>
            <tspan x={x} dy={16}>{date}</tspan>
          </text>
        );
    };

    const handleSearch = (startDate : Moment, endDate: Moment) => {
        if (!startDate.isValid() || !endDate.isValid()){
            return;
        } else{
            setStartDate(startDate);
            setEndDate(endDate);
        }
    };

    useEffect(() => {
        setTimeData({
            labels: plotData.labels.slice(-24),
            datasets: plotData.datasets.slice(-24)
        });
    }, [plotData])

    useEffect(() => {
        if (startDate && endDate) {
            setTimeData(FillterData(plotData, startDate, endDate));
        }
     }, [startDate, endDate]);

    const chartData = transformData(timeData);
    const chartConfig = generateChartConfig(timeData);



  return (
    <div className='w-full md:w-3/5 flex flex-col mt-2 border-b-2 p-3 shadow-xl rounded-lg  border-b-green-600'>

 
        <div className='flex flex-wrap justify-between items-center mb-4 border-b-2 border-slate-500'>

            <div className='relative'>
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className='p-1 text-base cursor-pointer hover:text-sky-500 font-normal'
                >
                    Chọn Chỉ Số
                </button>

            {dropdownOpen && (
                <div
                    className='absolute top-full left-0 bg-white border-1 drop-shadow-md'
                    style={{
                        width: '200px',
                        padding: '10px',
                        zIndex: 1000
                    }}
                >
                    {timeData.datasets.map((dataset) => (
                        <label key={dataset.id} style={{ display: 'block', marginBottom: '5px' }}>
                            <input
                                type="checkbox"
                                checked={visibleLines[dataset.label]}
                                onChange={() => handleToggleLine(dataset.label)}
                                style={{ marginRight: '10px' }}
                            />
                            <span style={{ color: dataset.borderColor }}>{dataset.label} - {dataset.units}</span>
                        </label>
                    ))}
                </div>
            )}
            </div>

            <div className='z-10'>
                <MyDatePicker handleSearch={handleSearch}/>
            </div>
            
        </div>

 
        <ChartContainer config={chartConfig} className='w-full' style = {{height:"400px"}}>
        <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
            left: 12,
            right: 12,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={(props: { x: number; y: number; payload: { value: string } }) => <CustomTick {...props} />}
            />
            <YAxis />
            <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {plotData.datasets.map(
                (dataset) =>
                    visibleLines[dataset.label] && (
                        <Line
                            key={dataset.id}
                            dataKey={dataset.label}
                            type="natural"
                            stroke={dataset.borderColor}
                            strokeWidth={2}
                            dot={false}
                        />
                    )
            )}
        </LineChart>
        </ChartContainer>
    </div>
  )
}

export default Home_Modal_LineChart