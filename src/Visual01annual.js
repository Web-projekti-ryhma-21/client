import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import zoomPlugin from 'chartjs-plugin-zoom';
import globalannual from "./data/globalannual.json";
import northannual from "./data/northernhemisphereannual.json";
import southannual from "./data/southernhemisphereannual.json";
import "chartjs-adapter-luxon";

export default function Visualization01(){
    Chart.register(zoomPlugin);

const gloann_data = {
    datasets: [
        {
            label: "southern hemisphere annual ",
            data: [...southannual],
            borderColor: "rgb(0, 0, 255)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            //yAxisID: "anomaly",
            //xAxisID: "time",
            parsing: {
                xAxisKey:"time",
                yAxisKey:"anomaly",
            },
            pointRadius: 1,

        },
        {
            label: "northern hemisphere annual ",
            data: [...northannual],
            borderColor: "rgb(0, 255, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            //yAxisID: "anomaly",
            //xAxisID: "time",
            parsing: {
                xAxisKey:"time",
                yAxisKey:"anomaly",
            },
            pointRadius: 1,

        },
        {
            label: "global annual ",
            data: [...globalannual],
            borderColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            //yAxisID: "anomaly",
            //xAxisID: "time",
            parsing: {
                xAxisKey:"time",
                yAxisKey:"anomaly",
            },
            pointRadius: 1,

        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        zoom: {
                        zoom: {
              wheel: {
                enabled: true,
                //modifierKey: 'ctrl',
              },
              drag: {
                enabled: true,
                backgroundColor: 'rgba(225,225,225,0.3)',
                borderColor: 'rgba(225,225,225)',
              },
              mode: 'xy',
            },
            limits: {
                y: {min: -2, max: 2},
                x: {min: 'original', max: 'original'},
            },
          },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "v01 plot",
      },
    },
      scales: {
          xAxis: {
            type: "time",
            time: {
              unit: "year",
            },
          },
        },
  };
  

  return (
    <div style={{ width: "1500px" }}>
      <h1>Annual Visualization 01 dev</h1>
      <Line options={options} data={gloann_data} />
    </div>
  );
}
