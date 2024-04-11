import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const RadarChart = () => {
  const data = {
    labels: ['КЛ', 'КО', 'СО', 'ТТ', 'СВ', 'СТ', 'ЗК', 'ПО', 'СИ', 'ФО'],
    datasets: [
      {
        label: 'Средние значения',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [3, 4, 2, 5, 3, 4, 5, 2, 4, 3]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false, 
    responsive: true, 
    layout: {
      padding: 10 
    },
    scales: {
      r: {
        suggestedMin: 0, 
        suggestedMax: 5 
      }
    }
  };

  return (
    <div style={{ width: '1000px', height: '1000px' }}>
      <h1>Результаты опроса</h1>
      <Radar data={data} options={options} />
    </div>
  );
}

export default RadarChart;
