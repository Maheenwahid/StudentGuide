import { Container, Button, Box, Grid } from "@material-ui/core";
import React from "react";
import cardim from "../assets/studentcard.png";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import Groups3TwoToneIcon from "@mui/icons-material/Groups3TwoTone";
import AddCommentIcon from "@mui/icons-material/AddComment";

import {  Card, CardContent, Typography } from '@material-ui/core';

const stylesss={
  margin:'1900px'
}

function StudentCard() {
  return (
    <>
      <Grid container justifyContent="center" >
        <Grid sm={6} md={4} style={{backgroundColor:"white",borderRadius:'25px' ,textAlign:'center',paddingTop:'20px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}  >
          <Box    >
            <Button variant="outlined" size="large" style={{marginBottom:'15px',borderRadius:'20px'}}>Benefits </Button><br />
            <Typography variant="h2" >Get Student ID Card:</Typography>
           <br /> <br />
            <WidgetsTwoToneIcon fontSize="large" sx={{ color: "orangered",paddingRight:'5px'}} />     
            <Typography variant="p" style={{fontSize:'18px'}}>Lorem ipsum dolor, sit amet busdam, Lorem, ipsum.tempore.</Typography>
           
             <br /><br />
           
            <Groups3TwoToneIcon fontSize="large" color="secondary"  />
            <Typography variant="p" style={{fontSize:'18px'}}>Lorem ipsum dolor, sit amet busdam, Lorem, ipsum.tempore.</Typography>
           <br />  <br />
            <AddCommentIcon fontSize="large" sx={{ color: "green" }} />
            <Typography variant="p" style={{fontSize:'18px'}}>Lorem ipsum dolor, sit amet busdam, Lorem, ipsum.tempore.</Typography>
<br /><br />
          </Box>

        </Grid>
        <Grid sm={6} md={4} style={{borderRadius:'20px',backgroundColor:'white',boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}} >
          
          <img src={cardim} width='100%'  height='100%' alt="" />
        
          </Grid>
          </Grid> 
        
                
                   </>
  );}
  export default StudentCard;
