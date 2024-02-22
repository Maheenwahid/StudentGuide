//hiring company-------> company's id , company name  , business Email , company address,
//candidate--------->  userid , email,name,pass,phone,dob,piclasted, total exp,field



import React from 'react'
import { Container, Fab, Grid, TextField } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';
import NavigationIcon from '@mui/icons-material/Navigation';
import imageSrc from '../assets/mah.png';


export default function CandidatePractice(props) {
  const { classes } = props;
  // const [checkuser,setCheckuser]=useState('');

  return (
    <div>

<Container maxWidth="md" className={classes.centerContainer} style={{ backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '10px' }}>
            {/* <NavigationIcon sx={{ mr: 1 }} /> */}
       
        <Container  style={{borderRadius:'50px',border:'1px solid black', width:'50%',height:'100%',textAlign:'center',paddingTop:'2%'}} >
        <Container style={{ borderRadius:'50px ',maxWidth:'100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}>
     <form >
        <Grid container spacing={2} style={{padding:'10px'}} >
        <Grid item  xs={12} sm={12}>
          
          <TextField
            required
            id="EMAIL"
            label="EMAIL"
            variant="outlined"
          />
        </Grid>
        <br /> <br />
        <Grid item xs={12} sm={12}>
            
          <TextField
            required
            id="NAME"
            label="NAME"
            variant="outlined"
          />
        </Grid> <br /> 
        <Grid item xs={12} sm={12}>
            
          <TextField
            required
            id="PASSWORD"
            label="PASSWORD"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
            
          <TextField
            required
            id="PHONENUM"
            label="PHONE NUM"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
            
          <TextField
            required
            id="DOB"
            label="DATE OF BIRTH"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
            
            <TextField
              required
              id="EXPERIENCE"
              label="EXPERIENCE"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
          <label htmlFor="demo-simple-select-outlined-label"> fields :  </label>

          <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          // value={selectedOption}
          // onChange={handleChange}
          label="Select Option"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'option1'}>Option 1</MenuItem>
          <MenuItem value={'option2'}>Option 2</MenuItem>
          <MenuItem value={'option3'}>Option 3</MenuItem>
        </Select>
           
          </Grid>
        <Grid item xs={12} sm={12}>
        <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
       LOG IN
      </Fab>
      </Grid>
      
        
        </Grid>
     </form>
      </Container>
        </Container>
        <Container style={{border:'1px solid black', width:'50%',height:'100%',borderRadius:'50px' ,background:'#1b1b1b'}} >
      
        <img src="https://www.eklavvya.com/Content/wp-content/uploads/2023/02/coding-assesment.png"
         class="get_started-aside-image-assessment" alt=""/>
         <img style={{width:'80%'}} src={imageSrc} alt="" />
        

        {/* className={classes.get_started_aside_image} */}


        </Container>


    </Container>
      
     
    </div>
  )
}
