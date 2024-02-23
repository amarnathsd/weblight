import React, { useEffect, useState } from "react";
import { Button, Grid, Skeleton } from "@mui/material";
import SearchRepos from "../Data/SearchRepos";
import RepoDetails from "./RepoDetails";
import Loader from "./Loader";


function DashBoard() {
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);


  async function getData() {
    setLoading(true);
    try {
      let data = await SearchRepos(page);
      setRepoData(data.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <div className="heading">
        <h1>Most Starred Repos</h1>
      </div>
      <div className="dashboard">
        <Grid
          className="grid-item"
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {loading ? (
            <Grid item xs={12}>
              {Loader()}
            </Grid>
          ) : (
            repoData.map((item) => (
              <Grid className="grid" item xs={12} key={item.id}>
              
                <RepoDetails
                  name={item.name}
                  description={item.description}
                  stars={item.stargazers_count}
                  issues={item.open_issues}
                  ownerUsername={item.owner.login}
                  ownerAvatar={item.owner.avatar_url}
                  owner={item.owner.login}
                  repo={item.name}
                />
              </Grid>
            ))
          )}
          <div className="btns">
            {!loading ? (
              <>
                <Button
                  sx={{ margin: "8px" }}
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1 ? true : false}
                  variant="contained"
                >
                  Prev Page
                </Button>
                <span> </span>
                <Button
                  sx={{ margin: "8px" }}
                  onClick={() => setPage(page + 1)}
                  variant="contained"
                >
                  Next Page
                </Button>
              </>
            ) : (
              ""
            )}
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default DashBoard;
