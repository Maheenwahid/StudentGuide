import { Container, Button, Box, Grid } from "@material-ui/core";
import React from "react";
import pana from "../assets/pana.png";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import Groups3TwoToneIcon from "@mui/icons-material/Groups3TwoTone";
import AddCommentIcon from "@mui/icons-material/AddComment";

import {  Card, CardContent, Typography } from '@material-ui/core';

function Stafftraining() {
  return (
    <>
      <Grid container justifyContent="center" >
      <Grid sm={6} md={4} style={{borderRadius:'20px',backgroundColor:'white',boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}} >
          
                   <img src={pana} width='100%'  height='auto' alt="" />
                 
                   </Grid>
        <Grid sm={6} md={4} style={{backgroundColor:"white",borderRadius:'25px' ,textAlign:'center',paddingTop:'20px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}  >
         
            <Button variant="outlined" size="large" style={{marginBottom:'10px',borderRadius:'20px'}}>Training  </Button><br />
            <Typography variant="h2" color="orange" >Staff training </Typography>
            <Box  style={{marginTop:'30px'}}   >
        
            <WidgetsTwoToneIcon fontSize="large" sx={{ color: "orangered",paddingRight:'5px'}} />     
            <Typography  variant="p" style={{fontSize:'18px'}}  >Lorem ipsum dolor, sit amet busdam, Lorem, ipsum.tempore.</Typography>
           
             <br /> <br />
           
            <Groups3TwoToneIcon color="secondary"  fontSize="large" />
            <Typography variant="p" style={{fontSize:'18px'}}>Lorem ipsum dolor, sit amet busdam, Lorem, ipsum.tempore.</Typography>
           <br /> <br />
            <AddCommentIcon sx={{ color: "green" }}  fontSize="large" />
            <Typography variant="p" style={{fontSize:'18px'}}>Lorem ipsum dolor, sit amet busdam, Lorem, ipsum.tempore.</Typography>
<br /><br />
          </Box>

        </Grid>
        
          </Grid> 
        
                
                   </>
  );}
  export default Stafftraining;
