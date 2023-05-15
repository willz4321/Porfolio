//

import { Grid } from '@mui/material';
import { Navbar, Facundo, Proyect, Educacion, Skills, Contact} from './components';

export const Portfolio = () => {

  return (
    <> 
    
    <Grid container  style={{ height: "100vh", }}>
      
        <Grid item container style={{
           height: "100vh", 
           backgroundColor: "#481a75", 
           position: "fixed", 
           width:"20vw"}}

                direction="column"
                justifyContent="center"
                alignItems="center">
                
                <Navbar/>
        </Grid>
        <Grid item container style={{ 
          backgroundColor: "#311250", 
          gap: '30px', 
          paddingLeft: "40px", 
          width: "calc(100vw - 20vw)", 
          marginLeft: "20vw",
          position: "relative" }}
               
                direction="column"
                justifyContent="center"
                alignItems="flex-start">
                  
                  <Facundo/>
            
                 <Proyect/>
          
                 <Educacion/>
                  
                 <Skills/>
          
                 <Contact/>
                
        </Grid>
      
    </Grid>

    </>
    
  )
}
