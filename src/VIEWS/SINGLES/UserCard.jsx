import React, { useState, useEffect } from "react";
import { Card, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import { CountUsers } from "../../API/UsersQueries";

const UserCard = () => {
  const navigate = useNavigate();
  const [Unb, setUnb] = useState(10);

  const getNbUser = async () => {
  };

  useEffect(() => {
    getNbUser();
  }, []);
  return (
    <Card
      sx={{ backgroundColor: "#0e58a5", margin: 1, padding: 1 }}
      onClick={() => navigate("/users")}
    >
      <CardActionArea>
        <Typography variant="h5" color="white">
          {Unb}
        </Typography>
        <Typography variant="h6" color="white">
          USERS CREATED
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
