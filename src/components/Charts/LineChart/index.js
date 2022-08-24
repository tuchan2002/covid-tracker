import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";

const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));
  return {
    chart: {
      height: 500,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories,
      crosshair: true,
    },
    colors: ["#f3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Infected",
        data: data.map((item) => item.Confirmed),
      },
    ],
  };
};
const LineChart = ({ data }) => {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState("all");
  useEffect(() => {
    let customData = [];
    switch (reportType) {
      case "all":
        customData = data;
        break;
      case "30":
        customData = data.slice(Math.max(data.length - 30, 1));
        break;
      case "7":
        customData = data.slice(Math.max(data.length - 7, 1));
        break;
      default:
        customData = data;
        break;
    }
    setOptions(generateOptions(customData));
  }, [data, reportType]);
  return (
    <div>
      <div className="flex justify-center mb-2">
        <button
          className={`uppercase border-2 py-1 px-2 rounded-l-md ${
            reportType === "all" ? "border-red-500 text-red-500" : ""
          }`}
          onClick={() => setReportType("all")}
        >
          ALL
        </button>
        <button
          className={`uppercase border-2 py-1 px-2 ${
            reportType === "30" ? "border-red-500 text-red-500" : ""
          }`}
          onClick={() => setReportType("30")}
        >
          30 days
        </button>
        <button
          className={`uppercase border-2 py-1 px-2 rounded-r-md ${
            reportType === "7" ? "border-red-500 text-red-500" : ""
          }`}
          onClick={() => setReportType("7")}
        >
          7 days
        </button>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default React.memo(LineChart);
