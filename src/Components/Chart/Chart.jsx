// import { formatMs } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { fetchDailyData } from "../../Api"
import { Line, Bar } from "react-chartjs-2"
import Styles from './Chart.module.css'

const Chart = ({ data :{confirmed , recovered, deaths}, country }) => {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData([]))
        }
        fetchAPI()
    }, [])

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: "Infected",
                            borderColor: "#3333ff",
                            fill: true,

                        }, {

                            data: dailyData.map(({ deaths }) => deaths),
                            label: "Deaths",
                            backgroundColor: 'rgba(255 , 0 , 0 , 0.5)',
                            fill: true,
                        }],
                    }}
                />
            ) : null
    );
    const barChat = (
        confirmed
            ? (
                <Bar
                    data={
                        {
                            labels: ['infected', 'Recovered', 'Deaths'],
                            datasets: [{
                                label: 'Pople',
                                backgroundColor: [
                                    'rgba(0 ,0, 255 , .0.5)',
                                    'rgba(0 , 255 , 0, 0.5)',
                                    'rgba(255 , 0 , 0, 0.5)',
                                ],
                                data : [confirmed.value , recovered.value , deaths.value]
                            }]
                        }}
                    options={
                        {
                            legend :{ display: false },
                            title : { display: true, text: `Current state in ${country}` }
                        }
                    }
                />
            ) : null
    )

    return (
        <div className={Styles.container}>
            {country ? barChat : lineChart}
        </div>

    )
}

export default Chart;