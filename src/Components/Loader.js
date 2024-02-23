import React from "react";
import { Skeleton } from "@mui/material";

function Loader() {
  return (
    <div className="loader">
      <Skeleton className="skeleton" animation="wave" />
      <Skeleton className="skeleton" animation="wave" />
      <Skeleton className="skeleton" animation="wave" />
      <Skeleton className="skeleton" animation="wave" />
      <Skeleton className="skeleton" animation="wave" />
    </div>
  );
}

export default Loader;
