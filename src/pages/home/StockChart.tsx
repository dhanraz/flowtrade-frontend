import { Button } from "@/components/ui/button";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
const timeseriesBtn = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time series (Daily)",
    label: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Time series (Weekly)",
    label: "1 week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Time series (Monthly)",
    label: "1 Month",
    value: 30,
  },
  {
    keyword: "DIGITAL_CURRENCY_YEARLY",
    key: "Time series (Yearly)",
    label: "1 Year",
    value: 365,
  },
];
const StockChart = () => {
  const [activeLabel, setActiveLabel] = useState("1 Day")
  const handleActiveLabel = (value:string)=> setActiveLabel(value);
  const series: ApexAxisChartSeries = [
    {
      data: [
        [1724588510371, 63875.8275356326],
        [1724592197969, 63978.7163761815],
        [1724594857819, 64174.0458550816],
        [1724598767430, 64184.8784783991],
        [1724601714891, 64160.9977887775],
        [1724606233835, 64146.7983125485],
        [1724608968446, 64162.2272764211],
        [1724613758284, 64206.7994216475],
        [1724617558740, 64175.5272624912],
        [1724620605380, 64404.2647640303],
        [1724624379059, 64648.0169508024],
        [1724627618080, 64668.1074344795],
        [1724631652544, 64161.8625534835],
        [1724635124994, 64232.1507893896],
        [1724638493295, 63970.5289651049],
        [1724642159098, 64061.2202400104],
        [1724644981023, 64103.0117295644],
        [1724649249673, 64066.2176427926],
        [1724653479440, 63899.9275408785],
        [1724657144415, 63832.9701595779],
        [1724660686552, 63861.8900249995],
        [1724663805874, 63699.1570486686],
        [1724668344119, 63924.4128370012],
        [1724670946814, 63836.7388379878],
        [1724674370114, 63933.8232893195],
        [1724677636131, 63576.318664383],
        [1724682235829, 63347.3617905926],
        [1724685881740, 63256.0529939884],
        [1724688841368, 63611.3288056398],
        [1724692658570, 63682.3799671919],
        [1724696648054, 63301.1105160288],
        [1724699734433, 63519.1809605928],
        [1724702623330, 63295.2436674674],
        [1724706124381, 63413.5722980136],
        [1724709670744, 63181.3657394586],
        [1724714649827, 63119.0225073498],
        [1724717646981, 62895.0876890741],
      ],
    },
  ];
  const options:ApexOptions = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758cc2"],
    markers: {
      colors: ["ffff"],
      strokeColors: ["fff"],
      size: 0,
      strokeWidth: 1,
      
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };
  return (
    <div>
      <div className=" flex gap-2">
        {
          timeseriesBtn.map((item)=> <Button onClick={()=> handleActiveLabel(item.label)} variant={(activeLabel==item.label)?"default":"outline"} key={item.label} className="">{item.label}</Button>)
        }
      </div>
      <div className="chart-timelines">
        <Chart
          options={options}
          series = {series}
          type="area"
          height={350}
        ></Chart>
      </div>
    </div>
  );
};

export default StockChart;
