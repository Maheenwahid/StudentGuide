// src/App.js
import React from 'react';
import Main from './components/Mainss';
import Hiring from './components/Hiring';
import CandidatePractice from './components/CandidatePractice';
// import ThemeeeState from './contet/themescontexthook/ThemeeeState';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Popularcourses from './components/Popularcourses';
import StudentCard from './components/StudentCard';
import Stafftraining from './components/Stafftraining';
import Addispay from './components/Addispay';

const useStyles = makeStyles((theme) => ({
  centerContainer: {
  
 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust the height as needed
  
  },
get_started_aside_image: {
  position: 'relative',
  left: '0',
  top: '10%',
  transform: 'translateY(40vh) scale(0.8)',
  opacity: '0',
  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
},active: {

  transform: 'translateY(0) scale(1)',
  opacity: '1',
},
managepc:{
  position:'relative',
  bottom:'100px',
  right:'75%',
  objectPosition:'center',
  objectFit:'cover',
maxWidth:'600px',
height:'auto',
overflow:'auto'
},
whitecolorproperty:{
  color:'#FFFFF0'
},
marg:{
  marginTop:'20px'
}
}));



function App() {
  const classes = useStyles();
  return (
    <div className="App" style={{backgroundColor:'#E5E8E8 '}} >
   
   <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main classes={classes} />} />
          <Route path="/candidatePractice" element={<CandidatePractice classes={classes} />} />
          <Route path="/hiring" element={<Hiring classes={classes} />} />
          <Route path="/courses" element={<Popularcourses />} />
          <Route path="/studentcard" element={<StudentCard/>} />
          <Route path="/stafftraining" element={<Stafftraining/>} />
          <Route path="/adddisplay" element={<Addispay classes={classes}/>} />


         
        </Routes>
      </div>
    </Router>
       
    </div>
  );
}

export default App;
