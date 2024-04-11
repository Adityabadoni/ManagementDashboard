
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function BarChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: "#ea5455",
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40],
                    barThickness  : 15,
                    categorySpacing: 50, // Adjust gap between bars as needed
                     borderRadius: 10,
                     stack: 'Stack 1' 


                },
                {
                    label: 'My Second dataset',
                    backgroundColor: "#28c76f",
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90],
                    barThickness  : 15,
                    categorySpacing: 20, // Adjust gap between bars as needed
                     borderRadius: 10,
                     stack: 'Stack 1' 
                }
            ]
        };
        const options = {
            indexAxis: 'x',
            maintainAspectRatio: false,
            aspectRatio:0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        },
                        maxWidth: 50 
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data)
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        