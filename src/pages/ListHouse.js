import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import db from "../firestoreConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ListHouse(params) {
  const navigate = useNavigate();
  const theme = createTheme({
    palette: {
      yellow: {
        main: "#ffc21a",
        contrastText: "#fff",
      },
    },
  });
  const [items, setItems] = useState([]);
  useEffect(() => {
    const propertyRef = collection(db, "property");
    const q = query(propertyRef, where("property_type", "==", params.type));
    const itemarr=[];
    getDocs(q)
      .then((snapshot) => {
        snapshot.forEach((item) => {
          itemarr.push({ ...item.data(), id: item.id });
        });
        setItems(itemarr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='yellow'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='default'
              aria-label='menu'
              sx={{ mr: 4 }}
              onClick={() => navigate("/")}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant='h6'
              color='black'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              {params.type}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        {items.map((item) => {
          return <div key={item.id}>{item.id}</div>;
        })}
      </div>
    </ThemeProvider>
  );
}
