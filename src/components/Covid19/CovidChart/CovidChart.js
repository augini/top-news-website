import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { FetchDailyData } from '../../../api';

export const CovidChart = ({
  data: { confirmed, recovered, deaths },
  country,
}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
      setDailyData(await FetchDailyData());
    };

    FetchAPI();
  }, []);

  const LineChart =
    dailyData !== undefined ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: 'Confirmed',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ['CONFIRMED', 'RECOVERED', 'DECEASED'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `CURRENT STATE IN ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? BarChart : LineChart}</div>
  );
};
