

import React, { useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Graphs from "./Graphs";

function RepoDetails({
  name,
  description,
  stars,
  issues,
  ownerUsername,
  ownerAvatar,
  owner,
  repo,
}) {

  
  const [showDetails, setShowDetails] = useState(false);

  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
  
    setIsRotated(!isRotated);
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        borderBottom="1px solid #ccc"
        paddingY={2}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            sx={{ width: 70, height: 70 }}
            src={ownerAvatar}
            alt={ownerUsername}
          />
          <Typography
            sx={{ width: 57, height: 20, overflow: "hidden" }}
            variant="subtitle1"
            marginLeft={1}
          >
            {ownerUsername}
          </Typography>
        </Box>
        <Box marginRight={2} marginLeft={3}>
          <Typography variant="h6">{name}</Typography>
          {description && (
            <Typography
              sx={{ width: 500, height: 25, overflow: "hidden" }}
              className="description"
              variant="body1"
              color="textSecondary"
            >
              {description}
            </Typography>
          )}
          <Box display="flex" alignItems="center">
            <Typography
              className="stars"
              variant="body2"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <StarBorderOutlinedIcon
                alignItems="center"
                className="star"
              />
              {stars}
            </Typography>
            <Typography variant="body2" marginLeft={1}>
              {`Issues: ${issues}`}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginLeft: "auto" }}>
          <ArrowForwardIosOutlinedIcon
            style={{
              transform: isRotated ? "rotate(90deg)" : "rotate(0deg)",
            }}
            onClick={handleClick}
            className="arrow-icon"
          />
        </Box>
      </Box>
      {showDetails && <Graphs owner={owner} repo={repo} />}
    </div>
  );
}

export default RepoDetails;
