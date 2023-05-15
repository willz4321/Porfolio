import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJava, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardActions, Grid, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import React from 'react'

export const Skills = () => {
  return (
    <>
    
    <Grid container 
                 direction="column"
                 justifyContent="center"
                 alignItems="flex-start" 
                 style={{gap: "30px", height: "80vh",}} id="skills" >
                <Typography variant='h2' style={{fontFamily: "initial" ,color: "#ffee58"}}>SKILLS</Typography>
                <Grid>
                  
                <Grid >
                  <Typography variant='h5' style={{fontFamily: "Bebas Neue, cursive", color: "#c5cae9"}}>
                    LENGUAJES DE PROGRAMACION
                  </Typography>
                  <CardActions style={{justifyContent: "center"}}>
                  <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#f50a0a",}} />
                  <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#1160e8",}} />
                  <FontAwesomeIcon icon={faJava} size="2xl" style={{color: "#e31616",}} />
                  <JavascriptIcon sx={{ color: "#f0e80f", fontSize: "60px" }} />
                  <img src="../src/assets/c++.png" alt="c++" style={{width: "40px", height: "40px"}} />
                  </CardActions>
               </Grid>

               <Grid >
                  <Typography variant='h5' style={{fontFamily: "Bebas Neue, cursive", color: "#c5cae9"}}>
                    FRAMEWORKS Y LIBRERIAS
                  </Typography>
                  <CardActions style={{justifyContent: "flex-start"}}>
                    <FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "#67169c",}} />
                    <img src="../src/assets/logo-Material.png" alt="Material" style={{width: "40px", height: "40px"}} />
                    <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
                    
                  </CardActions>
               </Grid>
                  
               <Grid >
                  <Typography variant='h5' style={{fontFamily: "Bebas Neue, cursive", color: "#c5cae9"}}>
                    SOFTWARE Y HERRAMIENTAS
                  </Typography>
                  <CardActions style={{justifyContent: "center"}}>
                  <FontAwesomeIcon icon={faNode} size="2xl" style={{color: "#22c343",}} />
                  <img src="../src/assets/pngegg.png" alt="Mongo" style={{width: "40px", height: "40px"}} />
                  <img src="../src/assets/pngwing.com.png" alt="sql" style={{width: "40px", height: "40px"}} />
                  <img src="../src/assets/visual.png" alt="visual" style={{width: "40px", height: "40px"}} /> 
                  <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#fff176", gap:'30px' }} />   
                  </CardActions>
               </Grid> 
                  
                </Grid>
            </Grid>
    
    </>
  )
}
