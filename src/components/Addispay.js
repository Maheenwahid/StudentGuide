import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import girls from "../assets/girl.png";
import { Cancel } from "@mui/icons-material";

function Addispay(props) {
  const { classes } = props;

  return (
    <div>
      <Grid
        style={{
          
          marginTop: "80px",
          borderRadius: "25px",
          maxHeight: "400px",
        }}
      >
        <Grid
          container
          justifyContent="center"
          className={` ${classes.whitecolorproperty}`}
          style={{backgroundColor: "#a31212",    maxHeight: "400px",       borderRadius:'50px',width:'80%',margin:'0 auto'}}
        >
          <Grid item lg={6} md={6} >
        
            <Typography variant="h2">Why you should buy gift cards?</Typography>
            <Box variant='div' style={{marginTop:'30px'}}>
            <Cancel style={{ fontSize: "20px" }} />
            <Typography variant="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, natus.
            </Typography>
            <br /><br />
            <Cancel style={{ fontSize: "20px" }} />
            <Typography variant="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, natus.
            </Typography>

            <br /><br />
            <Cancel style={{ fontSize: "20px" }} />
            <Typography  variant="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, natus.
            </Typography><br /> <br />

            </Box>
            <Button size='large'    className={`${classes.marg}`} style={{marginTop:'10px',backgroundColor:'white', borderRadius:'10px'}} ><Link style={{textDecoration:'none'}} >BUY NOW:</Link> </Button>
          </Grid>
          <Grid item lg={4} md={4} >
            <img
              src={girls}
              className={classes.managepc}
              alt=""
              overflow-auto
            />
          </Grid>
        </Grid>
      </Grid>


     
    </div>
  );
}

export default Addispay;
