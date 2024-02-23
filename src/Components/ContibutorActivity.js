import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Skeleton } from "@mui/material";
import fetchContributorsData from "../Data/FetchContributorsData";

const ContributorActivity = ({ owner, repo }) => {
  const [contributorsData, setContributorsData] = useState(null);

  const fetchData = async () => {
    let data = await fetchContributorsData(owner, repo);
    if (data !== undefined) {
      setContributorsData(data);
      return;
    }
    setContributorsData([]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    chart: {
      width: 900,
      height: 550,
    },
    title: {
      text: "Github Contributors Activity",
    },
    xAxis: {
      type: "category",
      title: {
        text: "Week",
      },
    },
    yAxis: {
      title: {
        text: "Number of Contributions",
      },
    },
    series: [
      ...(contributorsData
        ? contributorsData.map((contributor) => ({
            data: contributor ? { x: contributor.w, y: contributor.c } : {},
          }))
        : []),
      {
        name: "Additions",
        type: "line",
        data: contributorsData
          ? contributorsData.map((week) => ({ x: week.w, y: week.a }))
          : [],
      },
      {
        name: "Deletions",
        type: "line",
        data: contributorsData
          ? contributorsData.map((week) => ({ x: week.w, y: week.d }))
          : [],
      },
      {
        name: "Commits",
        type: "line",
        data: contributorsData
          ? contributorsData.map((week) => ({ x: week.w, y: week.c }))
          : [],
      },
    ],
  };

  return (
    <div>
      <h2>Contributors Activity Chart</h2>
      {contributorsData ? (
        <HighchartsReact
          className="contributor-chart"
          highcharts={Highcharts}
          options={options}
        />
      ) : (
        <Skeleton variant="rectangular" width={210} height={60} />
      )}
    </div>
  );
};

export default ContributorActivity;
