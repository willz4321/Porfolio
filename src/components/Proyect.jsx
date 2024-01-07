import { faBootstrap, faCss3Alt, faHtml5, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip } from 'react-tooltip';

export const Proyect = () => {
  return (
    <>
   
       <Grid container 
            direction="column"
            justifyContent="center"
            alignItems="flex-start" 
            style={{gap: "30px", height: "100vh"}} id='portfolio'>

        <Typography variant='h2' style={{fontFamily: "initial" ,color: "#ffee58"}}>PORTFOLIO</Typography>

        <div style={{ overflowX: "auto", maxWidth: "75vw" }}>
        <Grid  
        container 
        direction="row" 
        justifyContent="flex-start" 
        alignItems="center" 
        style={{ width: "2000px", paddingBottom: '10px', flexWrap: "nowrap", overflow: "auto"}}>
        
        <Card sx={{ width: 400, marginRight: '1rem', border: "solid white 1px" }} style={{height: "100%", }}>
            <CardMedia
            component="img"
            alt="pokedex"
            height="150"
            src="./assets/pro1.png"
            />
            <CardContent style={{backgroundColor: "#481a75"}}>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>
                Pokedex
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontFamily: "Bruno Ace", color: "#33c9dc", height: '140px'}}>
                Apliacacion web desarrollada con react donde se realizan peticiones
                a la API PokeApi brindando informacion y estadiscas del pokemon seleccionado
                o buscado.
            </Typography>
            </CardContent>
            <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center"}}>
            <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#f50a0a",}} />
            <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#1160e8",}} />
            <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
            <FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "black",}} />
            </CardActions>
            <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center"}}>
            <a  href="https://willz4321.github.io/01-Pokedex-App/" target="_blank" rel="noopener noreferrer"> <AttachFileIcon sx={{ color: "#33c9dc" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Web'/> </a>
            
            <a  href="https://github.com/willz4321/01-Pokedex-App" target="_blank" rel="noopener noreferrer"> <GitHubIcon sx={{ color: "#ef6694" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Repositorio'/> </a>
            </CardActions>
        </Card>


        <Card sx={{ width: 400,marginRight: '1rem', border: "solid white 1px" }} style={{height: "100%"}}>
            <CardMedia
            component="img"
            alt="calendario"
            height="150"
            src="./assets/calendar.png"
            />
            <CardContent style={{backgroundColor: "#481a75"}}>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>
                Calendario
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontFamily: "Bruno Ace", color: "#33c9dc", height: '140px'}}>
                Calendario web desarrollada con react donde su funcionalidad es ver, anadir, modificar y eliminar tareas en el calendario, la misma cuenta con login de usuario.
            </Typography>
            </CardContent>
            <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center"}}>
            <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#f50a0a",}} />
            <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#1160e8",}} />
            <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
            <FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "black",}} />
            <FontAwesomeIcon icon={faNode} size="2xl" style={{color: "#22c343",}} />
            <img src="./assets/pngegg.png" alt="Mongo" style={{width: "40px", height: "40px"}} />
            </CardActions>
            <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center", paddingTop: "1px"}}>
            <a  href="https://github.com/willz4321/10-Calendar" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: "#ef6694" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Frontend'/> </a>
           
            <a  href="https://github.com/willz4321/11-calendar-backend" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: "black" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Backend' /> </a>
           
            </CardActions>
        </Card>

        <Card sx={{ width: 400,marginRight: '1rem', border: "solid white 1px" }} style={{height: "100%" }}>
            
                <CardMedia
                component="img"
                alt="tienda web"
                height="150"
                src="./assets/tienda-web.png"
                />
                <CardContent style={{backgroundColor: "#481a75"}}>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>
                    Ghost store
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{fontFamily: "Bruno Ace", color: "#33c9dc", height: '140px'}}>
                    Tienda online desarrollada con react + spring con conexion a base de datos MySql para gestionar compras y seleccion de productos.
                </Typography>
                </CardContent>
                <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center"}}>
                <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#f50a0a",}} />
                <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#1160e8",}} />
                <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
                <FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "black",}} />
                <img src="./assets/spring.png" alt="spring" style={{width: "60px", height: "40px"}} />
                <img src="./assets/pngwing.com.png" alt="sql" style={{width: "40px", height: "40px"}} />
                </CardActions>
                <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center", paddingTop: "1px"}}>
                <a href="https://ghoststore-sz.netlify.app" target="_blank" rel="noopener noreferrer"> <AttachFileIcon sx={{ color: "#33c9dc" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Web'/> </a>
                <a  href="https://github.com/willz4321/Tienda-web" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: "#ef6694" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Frontend'/> </a>
                <a href="https://github.com/willz4321/Tienda-web-backend" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: "black" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Backend'/> </a>
                </CardActions>
         
        </Card>

        <Card sx={{ width: 400,marginRight: '1rem', border: "solid white 1px" }} style={{height: "100%" }}>
            
                <CardMedia
                component="img"
                alt="journal app"
                height="150"
                src="./assets/journal-app.png"
                />
                <CardContent style={{backgroundColor: "#481a75"}}>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>
                    Journal App
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{fontFamily: "Bruno Ace", color: "#33c9dc", height: '140px'}}>
                    Diario online desarrollada con react + spring con conexion a base de datos MongoDb, con login de usuario. Añade notas personales y sube imagenes a cloudinary.
                </Typography>
                </CardContent>
                <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center"}}>
                <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#f50a0a",}} />
                <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#1160e8",}} />
                <img src="./assets/logo-Material.png" alt="Material" style={{width: "40px", height: "40px"}} />
                <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
                <img src="./assets/spring.png" alt="spring" style={{width: "60px", height: "40px"}} />
                <img src="./assets/pngegg.png" alt="Mongo" style={{width: "40px", height: "40px"}} />
                </CardActions>
                <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center", paddingTop: "1px"}}>
                <a href="https://willz4321.github.io/Journal-app/" target="_blank" rel="noopener noreferrer"> <AttachFileIcon sx={{ color: "#33c9dc" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Web'/> </a>
                <a href="https://github.com/willz4321/journal-app" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: "#ef6694" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Frontend'/> </a>
                <Tooltip id='svgTooltip3'/>
                <a  href="https://github.com/willz4321/Tienda-web-backend" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: "black" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Backend'/> </a>
                </CardActions>
         
        </Card>

        <Card sx={{ width: 400,marginRight: '1rem', border: "solid white 1px" }} style={{height: "100%" }}>
            
            <CardMedia
            component="img"
            alt="Restaurant"
            height="150"
            src="./assets/restaurant.png"
            />
            <CardContent style={{backgroundColor: "#481a75"}}>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>
                Restaurante
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontFamily: "Bruno Ace", color: "#33c9dc", height: '140px'}}>
                Restaurante online desarrollada con react + spring con conexion a base de datos Sql Server, con login de empleado (seleccion entre MOZO, GERENTE, CEO). Dependiendo el rol se habilitan algunas funciones u otras.
            </Typography>
            </CardContent>
            <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center"}}>
            <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#f50a0a",}} />
            <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#1160e8",}} />
            <FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "black",}} />
            <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
            <img src="./assets/spring.png" alt="spring" style={{width: "60px", height: "40px"}} />
            <img src="./assets/pngwing.com.png" alt="sql" style={{width: "40px", height: "40px"}} />
            </CardActions>
            <CardActions style={{backgroundColor: "#481a75" ,justifyContent: "center", paddingTop: "1px"}}>
            <a href="https://restaurantsz.netlify.app" target="_blank" rel="noopener noreferrer"> <AttachFileIcon sx={{ color: "#33c9dc" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Web'/> </a>
            <a href="https://github.com/willz4321/journal-app" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: "#ef6694" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Frontend'/> </a>
            <a  href="https://github.com/willz4321/restaurante-backend" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: "black" }} className='hover-icon' data-tooltip-id='tooltip' data-tooltip-content='Backend'/> </a>
            </CardActions>
     
        </Card>

        </Grid>
      </div>
    </Grid>
    <Tooltip id="tooltip"/>
</>
  )
}
