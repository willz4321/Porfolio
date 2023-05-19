import { faLinkedin, faReact, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardActions, Grid, Typography } from '@mui/material'
import React from 'react'

export const Contact = () => {
  return (
    <>
    
    <Grid container 
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start" 
                  style={{gap: "30px", height: "100vh",}}   id="contact"
                  >
                    <Typography variant='h2' style={{fontFamily: "initial" ,color: "#ffee58"}}>CONTACTATE CONMIGO</Typography>
              <Grid container 
                 direction="column"
                 justifyContent="center"
                 alignItems="flex-start" >
                <Grid container direction="row" style={{gap:"15px",  paddingBottom: "10px", alignItems:"flex-end"}}>
                <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#fcff47",}} />
                <Typography variant='h7' style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Email:  <a className='text-contact' href="mailto:facundosuarez78@gmail.com" target='_black' >facundosuarez78@gmail.com</a></Typography>
                </Grid>

                <Grid container direction="row" style={{ gap:"15px", paddingBottom: "10px", alignItems:"flex-end"}}>
                <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#fcff47",}} />
                <Typography variant='h7' style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Whatsapp:  <a className='text-contact' href="https://wa.me/+543813254378" target='_black' >+54 381 3254378</a></Typography>
                </Grid>

                <Grid container direction="row" style={{gap:"15px", paddingBottom: "10px", alignItems:"flex-end"}}>
                <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#fcff47",}} />
                <Typography variant='h7' style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>LinkedIn:  <a className='text-contact' href="https://www.linkedin.com/in/facundo-suarez-4612a71b1/" target='_black'>Facundo Suarez</a></Typography>
                </Grid>

                <Grid style={{paddingTop: "20px"}} >
                  <Typography variant="h6" style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>
                    ESTE SITIO ESTA DESARROLLADO CON:
                  </Typography>
                  <CardActions style={{justifyContent: "start"}} >  

                  <div className='Logos'>
                    <img src="../assets/logo-Material.png" alt="Material" style={{ width: "40px", height: "40px" }} />
                    <Typography variant="h8" style={{ marginLeft: "10px" }}>Material</Typography>
                  </div>



                   <div className='Logos'>
                     <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
                     <Typography variant="h8" style={{ marginLeft: "10px" }}>React</Typography>
                   </div>
                    
                  </CardActions>
                </Grid>
              </Grid>
            </Grid >

    </>
  )
}
