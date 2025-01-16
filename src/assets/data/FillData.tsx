import { useState, useEffect } from 'react';

const FillData = (days: number, dataType: string) => {

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

  const [plotData, setPlotData] = useState<PlotData>(() => {
      const datasets = [];
      switch (dataType) {
          case 'wasteWater':
          datasets.push(
              { id: '1', data: [], label: "COD", borderColor: "#8A2BE2", units: "mg/l", fill: false, value: 0, min: 100, max: 200, desc: "Nhu cầu oxy hóa học (COD)", color: 'black', status: 'False'},
              { id: '2', data: [], label: "BOD", borderColor: "#A52A2A", units: "mg/l", fill: false, value: 0, min: 30, max: 40, desc: "Nhu cầu oxy sinh học BOD5 (20 °C)", color:'black', status: 'False'},
              { id: '3', data: [], label: "OIL", borderColor: "#00FFFF", units: "mg/l", fill: false, value: 0, min: 0.5, max: 0.6, desc: "Dầu mỡ động, thực vật", color:'black', status: 'False'},
              { id: '4', data: [], label: "PO4", borderColor: "#5F9EA0", units: "mg/l", fill: false, value: 0, min: 5, max: 7, desc: "Phosphat (PO4) (tính theo P)", color:'black', status: 'False'},
              { id: '5', data: [], label: "FLOW", borderColor: "#D2691E", units: "m3/ngày", fill: false, value: 0, min: 0.4, max: 0.6, desc: "Lưu lượng xả thải", color:'black', status: 'False'},
              { id: '6', data: [], label: "NO3", borderColor: "#DC143C", units: "m3/ngày", fill: false, value: 0, min: 7, max: 10, desc: "Nitrat (NO3)(tính theo N)", color:'black', status: 'False'},
              { id: '7', data: [], label: "H2S", borderColor: "#006400", units: "m3/ngày", fill: false, value: 0, min: 0.04, max: 0.06, desc: "Sunfua (tính theo H2S)", color:'black', status: 'False'},
              { id: '8', data: [], label: "PH", borderColor: "#556B2F", units: "", fill: false, value: 0, min: 6, max: 9, desc: "PH", color:'black', status: 'False'},
              { id: '9', data: [], label: "TSS", borderColor: "#483D8B", units: "mg/l", fill: false, value: 0, min: 0.6, max: 0.8, desc: "Tổng chất rắn lơ lửng (TSS)", color:'black', status: 'False'},
              { id: '10', data: [], label: "TEMP", borderColor: "#2F4F4F", units: "°C", fill: false, value: 0, min: 35, max: 50, desc: "Nhiệt độ", color:'black', status: 'False'},
              { id: '11', data: [], label: "NH4", borderColor: "#3CB371", units: "mg/l", fill: false, value: 0, min: 10, max: 25, desc: "Amoni (tính theo N)", color:'black', status: 'False'},
              { id: '12', data: [], label: "CONDUCTIVITY", borderColor: "#A0522D", units: "μS", fill: false, value: 0, min: 900, max: 1200, desc: "Độ dẫn", color:'black', status: 'False'}
          );
          break;
          
          case 'supplyWater':
              datasets.push(
              { id: '1', data: [], label: "PH", borderColor: "#00FFFF", units: "mg/l", fill: false, value: 0, min: 100, max: 200, desc: "Độ pH", color:'black' , status: 'False'},
              { id: '2', data: [], label: "CLO", borderColor: "#0000FF", units: "mg/l", fill: false, value: 0, min: 30, max: 40, desc: "Clorua", color:'black' , status: 'False'},
              { id: '3', data: [], label: "PRESS", borderColor: "#5F9EA0", units: "mg/l", fill: false, value: 0, min: 0.5, max: 0.6, desc: "Áp suất", color:'black' , status: 'False'}
              );
          break;

          case 'smartWater':
              datasets.push(
              { id: '1', data: [], label: "Thủy đài", borderColor: "#8A2BE2", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Thủy đài", color:'black' , status: 'False'},
              { id: '2', data: [], label: "Trạm nước cấp", borderColor: "#A52A2A", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Trạm nước cấp", color:'black' , status: 'False'},
              { id: '3', data: [], label: "Nhà 5", borderColor: "#00FFFF", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Nhà 5", color:'black' , status: 'False'},
              { id: '4', data: [], label: "Xử lý nước thải", borderColor: "#5F9EA0", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Xử lý nước thải", color:'black' , status: 'False'},
              { id: '5', data: [], label: "Tòa nhà 6A", borderColor: "#D2691E", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Tòa nhà 6A", color:'black' , status: 'False'},
              { id: '6', data: [], label: "Nhà 8", borderColor: "#DC143C", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Nhà 8", color:'black' , status: 'False'},
              { id: '7', data: [], label: "Coffe A Khoai", borderColor: "#006400", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Coffe A Khoai", color:'black' , status: 'False'},
              { id: '8', data: [], label: "Nhà 10", borderColor: "#556B2F", units: "", fill: false, value: 0, min: 100, max: 200, desc: "Nhà 10", color:'black' , status: 'False'},
              { id: '9', data: [], label: "Toà nhà Helios", borderColor: "#483D8B", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Toà nhà Helios", color:'black' , status: 'False'},
              { id: '10', data: [], label: "Tòa nhà Telecom", borderColor: "#2F4F4F", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Tòa nhà Telecom", color:'black' , status: 'False'},
              { id: '11', data: [], label: "Tòa nhà SBI", borderColor: "#3CB371", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Tòa nhà SBI", color:'black' , status: 'False'}
              );
          break;

          case 'groundWater':
              datasets.push(
              { id: '1', data: [], label: "FLOW", borderColor: "#00FFFF", units: "m3", fill: false, value: 0, min: 100, max: 200, desc: "Chỉ số lưu lượng", color:'black' , status: 'False'},
              { id: '2', data: [], label: "SLEV", borderColor: "#0000FF", units: "m", fill: false, value: 0, min: 30, max: 40, desc: "Chỉ số mực nước tĩnh", color:'black' , status: 'False'},
              { id: '3', data: [], label: "DLEV", borderColor: "#5F9EA0", units: "m", fill: false, value: 0, min: 0.5, max: 0.6, desc: "Chỉ số mực nước động", color:'black' , status: 'False'},
              { id: '4', data: [], label: "TEMP", borderColor: "#006400", units: "°C", fill: false, value: 0, min: 5, max: 7, desc: "Chỉ số nhiệt độ", color:'black' , status: 'False'}
              );
          break;

          case 'Air':
              datasets.push(
              { id: '1', data: [], label: "CO", borderColor: "#00FFFF", units: "ppm", fill: false, value: 0, min: 100, max: 200, desc: "Chỉ số CO", color:'black' , status: 'False'},
              { id: '2', data: [], label: "SO2", borderColor: "#0000FF", units: "ppm", fill: false, value: 0, min: 30, max: 40, desc: "Chỉ số SO2", color:'black' , status: 'False'},
              { id: '3', data: [], label: "NO", borderColor: "#5F9EA0", units: "ppm", fill: false, value: 0, min: 0.5, max: 0.6, desc: "Chỉ số NO", color:'black' , status: 'False'},
              { id: '4', data: [], label: "NO2", borderColor: "#006400", units: "ppm", fill: false, value: 0, min: 5, max: 7, desc: "Chỉ số NO2", color:'black' , status: 'False'},
              { id: '5', data: [], label: "PM1.0", borderColor: "#D2691E", units: "ug/m3", fill: false, value: 0, min: 0.4, max: 0.6, desc: "Chỉ số bụi PM1.0", color:'black' , status: 'False'},
              { id: '6', data: [], label: "PM2.5", borderColor: "#6495ED", units: "ug/m3", fill: false, value: 0, min: 7, max: 10, desc: "Chỉ số bụi PM2.5", color:'black' , status: 'False'},
              { id: '7', data: [], label: "PM10.0", borderColor: "#DC143C", units: "ug/m3", fill: false, value: 0, min: 0.04, max: 0.06, desc: "Chỉ số bụi PM10.0", color:'black' , status: 'False'},
              { id: '8', data: [], label: "Nhiệt độ", borderColor: "#00008B", units: "°C", fill: false, value: 0, min: 6, max: 9, desc: "Chỉ số nhiệt độ", color:'black' , status: 'False'},
              { id: '9', data: [], label: "Độ ẩm", borderColor: "#483D8B", units: "%", fill: false, value: 0, min: 0.6, max: 0.8, desc: "Chỉ số độ ẩm", color:'black' , status: 'False'},
              { id: '10', data: [], label: "Áp suất", borderColor: "#A9A9A9", units: "PA", fill: false, value: 0, min: 35, max: 50, desc: "Chỉ số áp suất", color:'black' , status: 'False'},
              { id: '11', data: [], label: "Tốc độ gió", borderColor: "#9400D3", units: "kph", fill: false, value: 0, min: 10, max: 25, desc: "Chỉ số tốc độ gió", color:'black' , status: 'False'},
              { id: '12', data: [], label: "Hướng gió", borderColor: "#ADD8E6", units: "Deg", fill: false, value: 0, min: 900, max: 1200, desc: "Chỉ số hướng gió", color:'black' , status: 'False'},
              { id: '13', data: [], label: "Tốc độ gió giật", borderColor: "#DC143C", units: "kph", fill: false, value: 0, min: 0.04, max: 0.06, desc: "Chỉ số tốc độ gió giật", color:'black' , status: 'False'},
              { id: '14', data: [], label: "Hướng gió giật", borderColor: "#00008B", units: "Deg", fill: false, value: 0, min: 6, max: 9, desc: "Chỉ số hướng gió giật", color:'black' , status: 'False'},
              { id: '15', data: [], label: "Tiếng ồn", borderColor: "#483D8B", units: "dB", fill: false, value: 0, min: 0.6, max: 0.8, desc: "Chỉ số tiếng ồn", color:'black' , status: 'False'},
              { id: '16', data: [], label: "Bức xạ mặt trời", borderColor: "#A9A9A9", units: "W/m2", fill: false, value: 0, min: 35, max: 50, desc: "Chỉ số bức xạ mặt trời", color:'black' , status: 'False'},
              { id: '17', data: [], label: "Nhiệt độ 1", borderColor: "#00008B", units: "°C", fill: false, value: 0, min: 6, max: 9, desc: "Chỉ số nhiệt độ 1", color:'black' , status: 'False'},
              { id: '18', data: [], label: "Độ ẩm 1", borderColor: "#483D8B", units: "%", fill: false, value: 0, min: 0.6, max: 0.8, desc: "Chỉ số độ ẩm 1", color:'black' , status: 'False'}
              );
          break;

          case '1aAir':
              datasets.push(
              { id: '1', data: [], label: "CO", borderColor: "#00FFFF", units: "ug/Nm3", fill: false, value: 0, min: 100, max: 200, desc: "Chỉ số CO", color:'black' , status: 'False'},
              { id: '2', data: [], label: "NO", borderColor: "#0000FF", units: "ug/Nm3", fill: false, value: 0, min: 30, max: 40, desc: "Chỉ số SO2", color:'black' , status: 'False'},
              { id: '3', data: [], label: "NO2", borderColor: "#5F9EA0", units: "ug/Nm3", fill: false, value: 0, min: 0.5, max: 0.6, desc: "Chỉ số NO", color:'black' , status: 'False'},
              { id: '4', data: [], label: "SO2", borderColor: "#006400", units: "ug/Nm3", fill: false, value: 0, min: 5, max: 7, desc: "Chỉ số NO2", color:'black' , status: 'False'},
              { id: '5', data: [], label: "O3", borderColor: "#D2691E", units: "ug/m3", fill: false, value: 0, min: 0.4, max: 0.6, desc: "Chỉ số bụi PM1.0", color:'black' , status: 'False'},
              { id: '6', data: [], label: "PM1.0", borderColor: "#6495ED", units: "ug/m3", fill: false, value: 0, min: 7, max: 10, desc: "Chỉ số bụi PM2.5", color:'black' , status: 'False'},
              { id: '7', data: [], label: "PM2.5", borderColor: "#DC143C", units: "ug/m3", fill: false, value: 0, min: 0.04, max: 0.06, desc: "Chỉ số bụi PM10.0", color:'black' , status: 'False'},
              { id: '8', data: [], label: "PM4.0", borderColor: "#00008B", units: "ug/Nm3", fill: false, value: 0, min: 6, max: 9, desc: "Chỉ số nhiệt độ", color:'black' , status: 'False'},
              { id: '9', data: [], label: "PM10.0", borderColor: "#483D8B", units: "ug/Nm3", fill: false, value: 0, min: 0.6, max: 0.8, desc: "Chỉ số độ ẩm", color:'black' , status: 'False'},
              { id: '10', data: [], label: "Tốc độ gió", borderColor: "#A9A9A9", units: "km/h", fill: false, value: 0, min: 35, max: 50, desc: "Chỉ số áp suất", color:'black' , status: 'False'},
              { id: '11', data: [], label: "Hướng gió", borderColor: "#9400D3", units: "Deg", fill: false, value: 0, min: 10, max: 25, desc: "Chỉ số tốc độ gió", color:'black' , status: 'False'},
              { id: '12', data: [], label: "Tốc độ gió giật", borderColor: "#ADD8E6", units: "km/h", fill: false, value: 0, min: 900, max: 1200, desc: "Chỉ số hướng gió", color:'black' , status: 'False'},
              { id: '13', data: [], label: "Hướng gió giật", borderColor: "#DC143C", units: "Deg", fill: false, value: 0, min: 0.04, max: 0.06, desc: "Chỉ số tốc độ gió giật", color:'black' , status: 'False'},
              { id: '14', data: [], label: "Nhiệt độ", borderColor: "#00008B", units: "oC", fill: false, value: 0, min: 6, max: 9, desc: "Chỉ số hướng gió giật", color:'black' , status: 'False'},
              { id: '15', data: [], label: "Độ ẩm", borderColor: "#483D8B", units: "%RH", fill: false, value: 0, min: 0.6, max: 0.8, desc: "Chỉ số tiếng ồn", color:'black' , status: 'False'},
              { id: '16', data: [], label: "Áp suất", borderColor: "#A9A9A9", units: "pa", fill: false, value: 0, min: 35, max: 50, desc: "Chỉ số bức xạ mặt trời", color:'black' , status: 'False'},
              );
          break;

          case 'aWater':
              datasets.push(
              { id: '1', data: [], label: "TUR", borderColor: "#00FFFF", units: "NTU", fill: false, value: 0, min: 1, max: 5, desc: "Chỉ số lưu lượng", color:'black' , status: 'False'},
              { id: '2', data: [], label: "DO", borderColor: "#0000FF", units: "PPM", fill: false, value: 0, min: 1, max: 10, desc: "Chỉ số mực nước tĩnh", color:'black' , status: 'False'},
              { id: '3', data: [], label: "SAL", borderColor: "#5F9EA0", units: "G/KG", fill: false, value: 0, min: 0.5, max: 0.6, desc: "Chỉ số mực nước động", color:'black' , status: 'False'},
              );
          break;
      }

      return {
          labels: [],
          datasets
      };
  })

  const [chartData, setChartData] = useState<PlotData>({
    labels: [],
    datasets: []
  });

  const getRandomValue = (min : number, max: number) => {
      return Math.round((Math.random() * (max - min) + min) * 100) / 100;
  };

  const generateTimestamps = (days : number) => {
      const labels = [];
      const now = new Date();
  
      for (let day = days - 1; day >= 0; day--) {
          for (let hour = 0; hour < 24; hour++) {
              const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - day, hour);
  
              const timePart = date.toLocaleTimeString('en-GB', {
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
              });
  
              const datePart = date.toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
              });
  
              const timestamp = `${timePart} ${datePart}`;
              labels.push(timestamp);
          }
      }
      return labels;
  };

  useEffect(() => {
      const timestamps = generateTimestamps(days);
      
      setPlotData(prev => ({
          ...prev,
          labels: timestamps
      }));
          
      setPlotData(prev => ({
          ...prev,
          datasets: prev.datasets.map(dataset => ({
              ...dataset,
              status: "True",
              data: Array.from({ length: timestamps.length }, () => getRandomValue(dataset.min, dataset.max))
          }))
      }));
  
      setPlotData(prev => ({
          ...prev,
          datasets: prev.datasets.map(dataset => ({
              ...dataset,
              value: dataset.data[0],
              color: dataset.data[0] >= dataset.max ? "Red" : "Black"
          }))
      }));
  }, [days]);

  useEffect(() => {

    const last10TimeStamp = plotData.labels.slice(-10);

    const updatedData = plotData.datasets.map(dataset => {
        return {
            ...dataset,
            data: dataset.data.slice(-10),
            value: dataset.data[dataset.data.length - 1],
            color: dataset.data[dataset.data.length - 1] >= dataset.max ? "Red" : "Black"
        };
    });

    setChartData({
        labels: last10TimeStamp,
        datasets: updatedData
    });
  }, [plotData]);
  
  return {plotData, chartData};
};

export default FillData;