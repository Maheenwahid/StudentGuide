import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import cardimge from'../assets/Rectangle 2749.png'
import stick from'../assets/Frame 237647.png'
import cimg2 from '../assets/card2img.png'
import cimg3 from'../assets/cimg3.png'
import cimg4 from'../assets/cm4.png'

export default function Popularcourses() {
  return (
    <div>
      <Container maxWidth="lg" >
        <h1 style={{ textAlign: "center", color: "orangered" }}>
          POPULAR COURSES :
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          
          }}
        >
          <Button variant="outlined">All program</Button>
          <Button variant="outlined">All program</Button>
          <Button variant="outlined">All program</Button>
          <Button variant="outlined">All program</Button>
          <Button variant="outlined">All program</Button>
          <Button variant="outlined">All program</Button>
        </div>

        <div style={{marginTop:'40px',display: "flex",
            justifyContent: "space-around"}}>
        <div> 
             <Card sx={{ maxWidth: 300 }} gutt>
            <CardMedia
              sx={{ height: 140 }}
              image={cardimge}
              title="green iguana"
             
            />
            <CardContent   sx={{ height: 140 }}>
           <img src={stick} alt="" />
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained"  style={{marginTop:'5px'}}>Share</Button>
              <Button size="small"  variant="contained" style={{marginTop:'5px'}}>Learn More</Button>
            </CardActions>
          </Card></div>
          <div>  <Card sx={{ maxWidth: 300 }} gutt>
            <CardMedia
              sx={{ height: 140 }}
              image={cimg2}
              title="green iguana"
             
            />
            <CardContent   sx={{ height: 140 }}>
           <img src={stick} alt="" />
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained"  style={{marginTop:'5px'}}>Share</Button>
              <Button size="small"  variant="contained" style={{marginTop:'5px'}}>Learn More</Button>
            </CardActions>
          </Card></div>
          <div>  <Card sx={{ maxWidth: 300 }} gutt>
            <CardMedia
              sx={{ height: 140 }}
              image={cimg3}
              title="green iguana"
             
            />
            <CardContent   sx={{ height: 140 }}>
           <img src={stick} alt="" />
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained"  style={{marginTop:'5px'}}>Share</Button>
              <Button size="small"  variant="contained" style={{marginTop:'5px'}}>Learn More</Button>
            </CardActions>
          </Card></div>
          <div>  <Card sx={{ maxWidth: 300 }} gutt>
            <CardMedia
              sx={{ height: 140 }}
              image={cimg4}
              title="green iguana"
             
            />
            <CardContent   sx={{ height: 140 }}>
           <img src={stick} alt="" />
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained"  style={{marginTop:'5px'}}>Share</Button>
              <Button size="small"  variant="contained" style={{marginTop:'5px'}}>Learn More</Button>
            </CardActions>
          </Card></div>  
        </div>
      </Container>
    </div>
  );
}
