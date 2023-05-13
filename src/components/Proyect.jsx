import { faBootstrap, faCss3Alt, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'

export const Proyect = () => {
  return (
    <>
    
       <Grid container 
            direction="column"
            justifyContent="center"
            alignItems="flex-start" 
            style={{gap: "30px", height: "100vh"}} id='portfolio'>
        <Typography variant='h2' style={{fontFamily: "initial" ,color: "#ffee58"}}>PORTFOLIO</Typography>
        <Grid  container direction="row" justifyContent="flex-start" alignItems="center" >
        
        <Card sx={{ maxWidth: 400, marginRight: '1rem' }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            src="../src/assets/pro1.png"
            />
            <CardContent style={{backgroundColor: "#5c6bc0"}}>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>
                Pokedex
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>
                Apliacacion web desarrollada con react donde se realizan peticiones
                a la API PokeApi brindando informacion y estadiscas del pokemon seleccionado
                o buscado.
            </Typography>
            </CardContent>
            <CardActions style={{backgroundColor: "#5c6bc0" ,justifyContent: "center"}}>
            <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#f50a0a",}} />
            <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#1160e8",}} />
            <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
            <FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "#67169c",}} />
            </CardActions>
            <CardActions style={{backgroundColor: "#5c6bc0" ,justifyContent: "center"}}>
            <a underline="none" href="https://willz4321.github.io/01-Pokedex-App/" target="_blank" rel="noopener"> <AttachFileIcon sx={{ color: "#ef6694" }} className='hover-icon'/> </a>
            <a underline="none" href="https://github.com/willz4321/01-Pokedex-App" target="_blank" rel="noopener"> <GitHubIcon sx={{ color: "#ef6694" }} className='hover-icon'/> </a>
            </CardActions>
        </Card>


        <Card sx={{ maxWidth: 400, marginRight: '1rem' }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            src="../src/assets/pro1.png"
            />
            <CardContent style={{backgroundColor: "#5c6bc0"}}>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>
                Pokedex
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>
                Apliacacion web desarrollada con react donde se realizan peticiones
                a la API PokeApi brindando informacion y estadiscas del pokemon seleccionado
                o buscado.
            </Typography>
            </CardContent>
            <CardActions style={{backgroundColor: "#5c6bc0" ,justifyContent: "center"}}>
            <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#f50a0a",}} />
            <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#1160e8",}} />
            <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
            <FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "#67169c",}} />
            </CardActions>
            <CardActions style={{backgroundColor: "#5c6bc0" ,justifyContent: "center"}}>
            <a underline="none" href="https://willz4321.github.io/01-Pokedex-App/" target="_blank" rel="noopener"><AttachFileIcon sx={{ color: "#ef6694" }} className='hover-icon'/> </a>
            <a underline="none" href="https://github.com/willz4321/01-Pokedex-App" target="_blank" rel="noopener"><GitHubIcon sx={{ color: "#ef6694" }} className='hover-icon'/> </a>
            </CardActions>
        </Card>

        </Grid>
    </Grid>
</>
  )
}
