//
import { faGithub, faLinkedin, faInstagram, faHtml5, faCss3Alt, faReact, faBootstrap, faJava, faNode, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, } from '@mui/material';
import { useState } from 'react'
import { Link } from 'react-scroll';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const Portfolio = () => {

  const [isBouncing, setIsBouncing] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleMouseOver = (icon) => {
    setIsBouncing(icon);
  };

  const handleMouseLeave = () => {
    setIsBouncing(false);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  return (
    <> 
    
    <Grid container  style={{ height: "100vh", }}>
        <Grid item container style={{ height: "100vh", backgroundColor: "#5c6bc0", position: "fixed", width:"20vw"}}
                direction="column"
                justifyContent="center"
                alignItems="center">
             <ul style={{cursor: "pointer"}}>
              <Link to="facundo" smooth={true} duration={1000} spy={true}
            onSetActive={() => handleSetActive('facundo')}><Typography variant="h6"  style={{fontFamily: 'Bebas Neue, cursive', color: activeLink === 'facundo' ? '#33c9dc' : '#c5cae9',}}>Facundo</Typography></Link>
              <Link to="portfolio" smooth={true} duration={1000} spy={true}
            onSetActive={() =>  handleSetActive('portfolio')}><Typography variant="h6" style={{ fontFamily: 'Bebas Neue, cursive', color: activeLink === 'portfolio' ? '#33c9dc' : '#c5cae9', }}>Portfolio</Typography></Link>
              <Link to="educacion" smooth={true} duration={1000} spy={true}
            onSetActive={() =>  handleSetActive('educacion')}><Typography variant="h6" style={{ fontFamily: 'Bebas Neue, cursive', color: activeLink === 'educacion' ? '#33c9dc' : '#c5cae9' }}>Educacion</Typography></Link>
              <Link to="skills" smooth={true} duration={1000} spy={true}
            onSetActive={() =>  handleSetActive('skills')}><Typography variant="h6" style={{ fontFamily: 'Bebas Neue, cursive', color: activeLink === 'skills' ? '#33c9dc' : '#c5cae9' }}>Skills</Typography></Link>
              <Link to="contact" smooth={true} duration={1000} spy={true}
            onSetActive={() =>  handleSetActive('contact')}><Typography variant="h6" style={{ fontFamily: 'Bebas Neue, cursive', color: activeLink === 'contact' ? '#33c9dc' : '#c5cae9' }}>Contact</Typography></Link>
             </ul>
        </Grid>
        <Grid item container style={{ backgroundColor: "#3f51b5", gap: '30px', paddingLeft: "40px", width: "calc(100vw - 20vw)", marginLeft: "20vw"}}
                direction="column"
                justifyContent="center"
                alignItems="flex-start">
            <Grid container direction="column"
                justifyContent="center"
                alignItems="flex-start" 
                id="facundo"
                style={{gap: "30px", height: "100vh"}}>
            <div spacing={2}><Typography variant='h2' style={{fontFamily: "initial", color: "#ffee58"}} >FACUNDO SUAREZ</Typography></div>
            <div><Typography variant='h5' style={{fontFamily: "Bebas Neue, cursive", color: "#829baf"}} >Bienvenido a mi Portfolio personal te invito a conocer sobre mi!!</Typography></div>
            <div><Typography variant='h7' style={{fontFamily: "Bruno Ace", color: "#829baf"}}>si quieres ponerte en contacto conmigo te dejo mis redes...</Typography></div>
            <Grid   container 
                    sx={{ gap: '20px' }}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="baseline">
              <FontAwesomeIcon  
                icon={faGithub} 
                size="2xl" 
                style={{color: "#fff176", gap:'30px' }}
                className={isBouncing === faGithub ? "fa-bounce" : ""}
                onMouseOver={() => handleMouseOver(faGithub)}
                onMouseLeave={handleMouseLeave}
              />

              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                style={{ color: "#fff176", gap: "30px" }}
                className={isBouncing === faLinkedin ? "fa-bounce" : ""}
                onMouseOver={() => handleMouseOver(faLinkedin)}
                onMouseLeave={handleMouseLeave}
              />

              <FontAwesomeIcon 
                icon={faInstagram}  
                size="2xl" 
                style={{color: "#fff176",}}
                className={isBouncing === faInstagram ? "fa-bounce" : ""}
                onMouseOver={() => handleMouseOver(faInstagram)}
                onMouseLeave={handleMouseLeave}
               />
            </Grid>
            </Grid>      
            

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
            
            <Grid container 
                 direction="column"
                 justifyContent="center"
                 alignItems="flex-start" 
                 style={{gap: "30px", }} id='educacion' >
              <Typography variant='h2' style={{fontFamily: "initial" ,color: "#ffee58"}}>EDUCACION</Typography>
            
               <Grid >
                <Typography variant='h4' style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>Ingenieria en Informatica</Typography>
                 <Grid>
                   <Typography style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Facultad de ciencias exactas y tecnologia - UNT (iniversidad nacional de Tucuman)</Typography>
                   <h6 style={{fontFamily: "Bruno Ace", color: "#c5cae9", paddingTop: "18px"}}>En curso.</h6>
                 </Grid>
               </Grid>

               <Grid >
                <Grid>
                <Typography variant='h4' style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>Programacion Web</Typography>
                </Grid>
                
                 <Grid>
                   <Typography style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Curso de HTML + CSS, Bootstrap, sass hecho en Coderhause</Typography>
                   <h6 style={{fontFamily: "Bruno Ace", color: "#c5cae9", paddingTop: "18px", paddingBottom: "10px"}}>Curso de 38 horas.</h6>
                 </Grid>
                 <Grid  style={{ width: "120px",display: "flex", justifyContent: "center", paddingTop: "5px"}}>
                   <a href='../src/assets/certificado-Web.png' target='_blank' className='Link-pers'>Certificado</a>
                 </Grid>
               </Grid>

               <Grid >
                <Grid>
                <Typography variant='h4' style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>Programacion con JavaScript</Typography>
                </Grid>
                
                 <Grid>
                   <Typography style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Curso de JavaScript hecho en Coderhause</Typography>
                   <h6 style={{fontFamily: "Bruno Ace", color: "#c5cae9", paddingTop: "18px", paddingBottom: "10px"}}>Curso de 34 horas.</h6>
                 </Grid>
                 <Grid  style={{ width: "120px",display: "flex", justifyContent: "center", paddingTop: "5px"}}>
                   <a href='../src/assets/certificado-JS.png' target='_blank' className='Link-pers'>Certificado</a>
                 </Grid>
               </Grid>  

               <Grid >
                <Grid>
                <Typography variant='h4' style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>React + NodeJS</Typography>
                </Grid>
                
                 <Grid>
                   <Typography style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Curso de React: Hooks, React Router, Redux toolkit, Node, Express, MongoDB hecho en Udemy</Typography>
                   <h6 style={{fontFamily: "Bruno Ace", color: "#c5cae9", paddingTop: "18px", paddingBottom: "10px"}}>Curso de 54 horas.</h6>
                 </Grid>
                 <Grid  style={{ width: "120px",display: "flex", justifyContent: "center", paddingTop: "5px"}}>
                   <a href='../src/assets/certificado-React.jpg' target='_blank' className='Link-pers'>Certificado</a>
                 </Grid>
               </Grid>  
                
               <Grid >
                <Grid>
                <Typography variant='h4' style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>Base de datos no relacionables</Typography>
                </Grid>
                
                 <Grid>
                   <Typography style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Curso de Sql Server hecho en Udemy</Typography>
                   <h6 style={{fontFamily: "Bruno Ace", color: "#c5cae9", paddingTop: "18px", paddingBottom: "10px"}}>Curso de 16 horas.</h6>
                 </Grid>
                 <Grid  style={{ width: "120px",display: "flex", justifyContent: "center", paddingTop: "5px"}}>
                   <a href='../src/assets/certificado-Sql.jpg' target='_blank' className='Link-pers'>Certificado</a>
                 </Grid>
               </Grid>  
               
            </Grid>
           
          
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
                  <CardActions style={{justifyContent: "center"}}>
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
                  <img src="../src/assets/pngwing.com.png" alt="Mongo" style={{width: "40px", height: "40px"}} />
                  <img src="../src/assets/visual.png" alt="Mongo" style={{width: "40px", height: "40px"}} /> 
                  <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#fff176", gap:'30px' }} />   
                  </CardActions>
               </Grid> 
                  
                </Grid>
            </Grid>

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
                <Typography variant='h7' style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Email:  <a href="mailto:facundosuarez78@gmail.com" style={{color: "#25bb96", textDecoration: "none", fontSize: "13px"}}>facundosuarez78@gmail.com</a></Typography>
                </Grid>

                <Grid container direction="row" style={{ gap:"15px", paddingBottom: "10px", alignItems:"flex-end"}}>
                <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#fcff47",}} />
                <Typography variant='h7' style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Whatsapp:  <a href="https://wa.me/+543813254378" target='_black' style={{color: "#25bb96", textDecoration: "none", fontSize: "13px"}}>+54 381 3254378</a></Typography>
                </Grid>

                <Grid container direction="row" style={{gap:"15px", paddingBottom: "10px", alignItems:"flex-end"}}>
                <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#fcff47",}} />
                <Typography variant='h7' style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>LinkedIn:  <a href="https://www.linkedin.com/in/facundo-suarez-4612a71b1/" target='_black' style={{color: "#25bb96", textDecoration: "none", fontSize: "13px"}}>Facundo Suarez</a></Typography>
                </Grid>

                <Grid style={{paddingTop: "20px"}} >
                  <Typography variant="h6" style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>
                    ESTE SITIO ESTA DESARROLLADO CON:
                  </Typography>
                  <CardActions style={{justifyContent: "start"}} >   
                    <img src="../src/assets/logo-Material.png" alt="Material" style={{width: "40px", height: "40px"}} />
                    <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#0f3e8f",}} />
                  </CardActions>
                </Grid>
              </Grid>
            </Grid >
  
        </Grid>
    </Grid>

    </>
    
  )
}
