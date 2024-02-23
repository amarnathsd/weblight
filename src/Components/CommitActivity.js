import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Skeleton } from "@mui/material";
import fetchCommitActivity from "../Data/FetchCommitActivity";

const CommitActivity = ({ owner, repo }) => {
  const [commitData, setCommitData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetchCommitActivity(owner, repo);
        
        if (Array.isArray(data)) {
          setCommitData(data);
        } else {
          setCommitData([]);
        }
      } catch (error) {
        console.error(error);
        setCommitData([]);
      }
    };

    fetchData();
  }, [owner, repo]);

  const options = {
    chart: {
      width: 800,
      height: 250,
    },
    title: {
      text: "Github Commit Activity",
    },
    xAxis: {
      type: "category",
      title: {
        text: "Week",
      },
    },
    yAxis: {
      title: {
        text: "Number of Commits",
      },
    },
    series: [
      {
        name: "Commits",
        data: commitData !== null ? commitData.map((week) => week.total) : [],
      },
    ],
  };

  return (
    <div>
      <h2>Commit Activity Chart</h2>
      {commitData ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <Skeleton variant="rectangular" width={210} height={60} />
      )}
    </div>
  );
};

export default CommitActivity;
