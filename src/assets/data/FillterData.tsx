import { useState, useEffect } from 'react';
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

interface FillterDataProps{
    plotdata : PlotData
    startDate: string
    endDate: string

}

const FillterData = (plotdata : PlotData, startDate : Moment, endDate : Moment) => {

    if (startDate === null || endDate === null){
        return plotdata;
    }

    const formatDate = (dateStr : string) => {

        const date = new Date(dateStr);

        const time = date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });
        
        const dateFormatted = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
        });

        const dayStr = `${dateFormatted}`;
        const [day, month, year] = dayStr.split('/');
        return `${day}/${month}/20${year}`;
    };

    const parseDate = (dateString : string) => {
        const [day, month, year] = dateString.split("/").map(Number);
        return new Date(year, month - 1, day);
    };

    const formattedStartDate =startDate.format('DD/MM/YYYY');
    const formattedEndDate = endDate.format('DD/MM/YYYY');


    const filteredIndexes = plotdata.labels.map((label, index) => {
        const datePart = label.split(" ")[1]; 
        const labelDate = parseDate(datePart);

        if (labelDate >= parseDate(formattedStartDate) && labelDate <= parseDate(formattedEndDate)) {
            return index; 
        }

        return null; 
    }).filter(index => index !== null);

    // console.log({
    //     labels: filteredIndexes.map(index => plotdata.labels[index]), 
    //     datasets: plotdata.datasets.map(dataset => ({
    //     ...dataset,
    //     data: filteredIndexes.map(index => dataset.data[index]) 
    //     }))
    // })

    return {
        labels: filteredIndexes.map(index => plotdata.labels[index]), 
        datasets: plotdata.datasets.map(dataset => ({
        ...dataset,
        data: filteredIndexes.map(index => dataset.data[index]) 
        }))
    };
};

export default FillterData;