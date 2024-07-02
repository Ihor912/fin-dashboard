import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const FinancialChart: React.FC = () => {
  const data = useSelector((state: RootState) => state.finnhub.data);

  useLayoutEffect(() => {
    if (data) {
      const chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.data = [
        {
          date: new Date(),
          value: data.c,
        },
      ];
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "date";
      return () => {
        chart.dispose();
      };
    }
  }, [data]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default FinancialChart;
