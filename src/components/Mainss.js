import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
import imageSrc from '../assets/mah.png';

const Main = (props) => {
  const {classes} = props;
 const [checkuser,setCheckuser]=useState('') // to check any option sleected or not
  return (
    <Container maxWidth="md" className={classes.centerContainer} style={{backgroundColor:'white',boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}>
            {/* <NavigationIcon sx={{ mr: 1 }} /> */}
       
        <Container  style={{borderRadius:'50px',border:'1px solid black', width:'50%',height:'100%',textAlign:'center',padding:'10%'}} >
      <h1 >How do you want to use our platform: </h1>
      <p style={{borderBottom:'1px solid black'}}>We provide you best facilities for multiple purposes </p>
      <h3><Link  to="#" onClick={()=>{setCheckuser('company');console.log("company")}}>-For hiring purpose :</Link></h3>
      <h3><Link  to="#"onClick={()=>{setCheckuser('candidate');console.log("candidate")}}>-For preparation purpose :</Link></h3>
     {checkuser!==''?( checkuser!=='company'? (<Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
       <Link style={{color:'black',textDecoration:'none'}} to="/Hiring"> Create Account</Link>
      </Fab>):(<Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
       <Link style={{color:'black',textDecoration:'none'}} to="/candidatePractice"> Create Account</Link>
      </Fab>)): ( <Fab variant="extended"disabled='true' >
        <NavigationIcon sx={{ mr: 1 }} />
        <Link style={{color:'grey',textDecoration:'none'}} to="#"> Create Account</Link>
      </Fab>) }
     
        </Container>
        <Container style={{border:'1px solid black', width:'50%',height:'100%',borderRadius:'50px' ,backgroundColor:'#1b1b1b'}} >
      {checkuser!==''?(<Container  className={`${classes.get_started_aside_image} ${classes.active}`}>
   
         <img style={{width:'80%'}} src="https://static.vecteezy.com/system/resources/thumbnails/020/962/986/small_2x/software-engineer-graphic-clipart-design-free-png.png" alt="" />

         <img style={{width:'100%'}} src={imageSrc} alt="" />
        
        
        </Container>): <h3 style={{color:'white',textAlign:'center',margin:'60% auto'}}>select any option ..whoare you a company or a candidate..??</h3> }
        

        {/* className={classes.get_started_aside_image} */}


        </Container>


    </Container>
  );
};

export default Main;
