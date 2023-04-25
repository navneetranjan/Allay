import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function ButtonAppBar() {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      yellow: {
        main: "#ffc21a",
        contrastText: "#fff",
      },
    },
  });
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
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              color='black'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              Allay
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
