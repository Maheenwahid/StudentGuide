// import React from "react";
// import ThemeeeContext from "./ThemeeeContext";
// import { makeStyles } from '@material-ui/core/styles';



// const ThemeeeState=(props)=>{
  
//     const useStyles = makeStyles((theme) => ({
      
//         centerContainer: {
        
//           border:'10px solid red',
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '100vh', // Adjust the height as needed
        
//         },
//       get_started_aside_image: {
//         position: 'relative',
//         left: '0',
//         top: '10%',
//         transform: 'translateY(40vh) scale(0.8)',
//         opacity: '0',
//         transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
//       },active: {
      
//         transform: 'translateY(0) scale(1)',
//         opacity: '1',
//       }
//       }));
//       const classes = useStyles();
//     return(
        
// <ThemeeeContext.Provider value={classes}>
// {props.children}
// </ThemeeeContext.Provider>


//     )
// }
// export default ThemeeeState;

import React from "react";
import ThemeeeContext from "./ThemeeeContext";
import { makeStyles } from '@material-ui/core/styles';

const ThemeeeState = (props) => {
    const useStyles = makeStyles((theme) => ({
        centerContainer: {
            border: '10px solid red',
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
        },
        active: {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
        }
    }));

    const classes = useStyles();

    return (
        <ThemeeeContext.Provider value={useStyles}>
            {props.children}
        </ThemeeeContext.Provider>
    );
};

export default ThemeeeState;
