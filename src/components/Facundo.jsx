import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Typography } from "@mui/material"
import { useState } from "react";
import { TypeAnimation } from "react-type-animation"


export const Facundo = () => {

    const [isBouncing, setIsBouncing] = useState(false);

    const handleMouseOver = (icon) => {
        setIsBouncing(icon);
      };
    
      const handleMouseLeave = () => {
        setIsBouncing(false);
      };
  return (
    <>
    
    <Grid container direction="column"
                justifyContent="center"
                alignItems="flex-start" 
                id="facundo"
                style={{gap: "30px", height: "100vh"}}>
            <div spacing={2}><Typography variant='h2' style={{fontFamily: "initial", color: "#ffee58"}} >FACUNDO SUAREZ</Typography></div>

            <div>
            <TypeAnimation
                  sequence={[
                    // Same String at the start will only be typed once, initially
                    "Bienvenido",
                    1000,
                    "Bienvenido a mi Portfolio personal, te invito a conocer sobre mi!!",
                    1000,
                  ]}
                  speed={70}
                  style={{ fontSize: '2em', fontFamily: "Bebas Neue, cursive", color: "#829baf"}}
                  repeat={Infinity}
            />
              </div>

            <div style={{maxWidth: "700px"}}><Typography variant='h7' style={{fontFamily: "Bruno Ace", color: "#829baf"}}>Soy Estudiante de Ingenieria en Informatica en FACET - UNT (universidad nacional de tucuman) y developer freelance, 25 años de edad, residencia en San miguel de Tucuman.</Typography></div>
            
            <Grid  style={{ width: "120px",display: "flex", justifyContent: "center", paddingTop: "5px"}}>
                   <a href='./assets/cv-Programador.pdf' target='_blank' className='Link-pers'>Descarga mi CV</a>
            </Grid>

            <Grid   container 
                    sx={{ gap: '20px' }}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="baseline">
             <a href='https://github.com/willz4321' target='_blank'>
                <FontAwesomeIcon  
                  icon={faGithub} 
                  size="2xl" 
                  style={{
                    color: isBouncing === faGithub ? "#fff176" : " #ef6694",
                    gap:'30px',
                    transform: isBouncing === faGithub ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease-out' 
                  }}
                  onMouseOver={() => handleMouseOver(faGithub)}
                  onMouseLeave={handleMouseLeave}
                />
              </a>
          <a href="https://www.linkedin.com/in/facundo-suarez-4612a71b1/" target='_blank'>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            style={{
              color: isBouncing === faLinkedin ? "#fff176" : " #ef6694",
              gap:'30px',
              transform: isBouncing === faLinkedin ? 'scale(1.25)' : 'scale(1)',
              transition: 'transform 0.3s ease-out' 
              }}
            onMouseOver={() => handleMouseOver(faLinkedin)}
            onMouseLeave={handleMouseLeave}
              />
          </a>
              
            <a href="https://www.instagram.com/facusuarez22.ok" target='_blank'>
            <FontAwesomeIcon 
                icon={faInstagram}  
                size="2xl" 
                style={{
                  color: isBouncing === faInstagram ? "#fff176" : " #ef6694",
                  gap:'30px',
                  transform: isBouncing === faInstagram ? 'scale(1.25)' : 'scale(1)',
                  transition: 'transform 0.3s ease-out' 
                }}
                onMouseOver={() => handleMouseOver(faInstagram)}
                onMouseLeave={handleMouseLeave}
              />
            </a>
              
            </Grid>
            </Grid> 
    
    </>
  )
}
