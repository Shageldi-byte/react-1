import "./App.css";
import Home from "./page/Home";
import Index from "./page/Index";
import Login from "./page/Login";
import PersonIcon from "@mui/icons-material/Person";
import Product from "./page/Product";
import Products from "./page/Products";
import { Box, Button, Container, Grid, IconButton, Paper, Slider, Stack, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme, responsiveFontSizes, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

let lightTheme = createTheme({
  typography: {
    fontFamily: "Inter-Bold",
    h1: {
      fontStyle:'italic',
      
    }
  },
  components:{
    MuiTypography: {
      defaultProps: {
      }
    },
  },
  palette:{
    mode:"light",
    primary:{
      main:"#ff6aa1",
      dark:"#b24a70",
      light:"#ff87b3",
      contrastText:"#FFFFFF"
    },
    secondary:{
       main:"#651fff",
       dark:"#4615b2",
       light:"#834bff"
    },
    background:{
      default:"#FFFFFF",
    }
  }
})





const darkTheme = createTheme({
  palette:{
    mode:"dark",
    primary:{
      main:"#4caf50",
      dark:"#357a38",
      light:"#6fbf73",
       contrastText:"#FFFFFF"
    },
    secondary:{
       main:"#651fff",
       dark:"#4615b2",
       light:"#834bff"
    },
     background:{
      default:"#000000",
    }
  }
})


export function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
}



function App() {

  const [isDark, setIsDark] = useState(false);

  const width = useWidth();

  const checker = (w) => {
        return ["xs", "sm"].includes(w);
  }
  
  const [isMobile, setIsMobile] = useState(checker(width));



  useEffect(()=>{

    setIsMobile(checker(width));
  },[width])


  


  return (
   <ThemeProvider theme={isDark?darkTheme:lightTheme}>
    

    <Paper sx={{borderRadius:'0px'}}>
      <Stack direction={'row'}>
        <Typography>Logo</Typography>
        <Button>Home</Button>
        <Button>Products</Button>
      </Stack>
    </Paper>


  
  <img src={'/logo192.png'} alt={'user-heart'}/>

      <Container fixed>
          <IconButton color="secondary">
            <PersonIcon/>
          </IconButton>

          <Button startIcon={<PersonIcon/>}>Hello</Button>
<Stack direction={'row'} justifyContent={'space-between'}>
      <Button>Hello</Button>
      <Button>World</Button>
    </Stack>
    <Grid container spacing={1}>
    {
      
      new Array(30).fill(0).map((item,index)=>{
        return(
            <Grid key={`item-${index}`} item xs={12} sm={6} md={4} lg={3}>
              <Product/>
            </Grid>
        
        )
      })
    }
      </Grid>


      <Grid container>
          <Grid item xs={12} md={6}>Hello</Grid>
          <Grid item xs={12} md={6}>World</Grid>
      </Grid>
      </Container>

   
    
      {/* <Paper sx={{height:'100vh',borderRadius:0}} elevation={0}>
        <center>
          <Button variant="contained" onClick={()=>setIsDark(false)}>Light</Button>
          <Button variant="contained" onClick={()=>setIsDark(true)}>Dark</Button>
          <Typography>Hello</Typography>
          <Typography sx={{fontSize:'12px'}}>Second</Typography>
          <p>fsdjhj</p>
          <button>fjdhjjhfd</button>

          {
            isMobile?
            <Home/>
            :
            <Products/>
          }

          <Slider
          defaultValue={30}
          sx={{
            width: 300,
            color: 'primary.main',
          }}
          />

          <Slider
          defaultValue={30}
          sx={{
            width: 300,
            color: 'success.main',
            '& .MuiSlider-thumb': {
              borderRadius: '1px',
              color:'primary.main'
            },
          }}
        />



        </center>
      </Paper> */}

      

   </ThemeProvider>
  );
}

export default App;
