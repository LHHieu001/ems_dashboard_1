import React, { useMemo } from 'react'
import { Responsive, WidthProvider } from "react-grid-layout";
import Home_LineChart from '../Charts/Home_LineChart';
import Home_PieChart from '../Charts/Home_PieChart';
import Home_Table from '../Tables/Home_Table';
import Home_Map from '../Maps/Home_Map';

const Home_GridLayOut = () => {

    const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);

    const layout = useMemo(() => [
            { i: "a", x: 0, y: 0, w: 17, h: 23},
            { i: "b", x: 17, y: 0, w: 7, h: 23},
            { i: "c", x: 0, y: 1, w: 14, h: 15},
            { i: "d", x: 14, y: 1, w: 10, h: 15},
          ], []);
    
    return (
        <ResponsiveReactGridLayout
                className="layout"
                autoSize={true}
                layouts={{lg:layout}}
                rowHeight={10}
                cols={{ lg: 24, md: 10, sm: 6, xs: 4, xxs: 2 }}
                margin={[10, 20]}
            >
                <div key="a" className='bg-white rounded-lg drop-shadow-lg'>
                    <Home_LineChart />
                </div>


                <div key="b" className='bg-white rounded-lg drop-shadow-lg'>
                    <Home_PieChart />
                </div>

                <div key="c" className='bg-white p-3 rounded-lg drop-shadow-lg'>
                    <Home_Table />
                </div>

                <div key="d" className='bg-white p-3 rounded-lg drop-shadow-lg'>
                    <Home_Map />
                </div>

        </ResponsiveReactGridLayout>
  )
}

export default Home_GridLayOut