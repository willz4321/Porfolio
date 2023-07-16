import { Grid, Typography } from '@mui/material'

export const Educacion = () => {
  return (
    <>
    
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
                <Typography variant='h4' style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>Desarrollador Genexus</Typography>
                 <Grid>
                   <Typography style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Curso de Programacion genexus version 18</Typography>
                   <h6 style={{fontFamily: "Bruno Ace", color: "#c5cae9", paddingTop: "18px"}}>Finalizado</h6>
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
                   <a href='./assets/certificado-Web.png' target='_blank' className='Link-pers'>Certificado</a>
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
                   <a href='./assets/certificado-JS.png' target='_blank' className='Link-pers'>Certificado</a>
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
                   <a href='./assets/certificado-React.jpg' target='_blank' className='Link-pers'>Certificado</a>
                 </Grid>
               </Grid>  
                
               <Grid >
                <Grid>
                <Typography variant='h4' style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>Programacion Full Stack Java</Typography>
                </Grid>
                 <Grid>
                   <Typography style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Curso de Java: Jakarta EE y Spring</Typography>
                   <h6 style={{fontFamily: "Bruno Ace", color: "#c5cae9", paddingTop: "18px", paddingBottom: "10px"}}>Curso de 127 horas.</h6>
                 </Grid>
                 <Grid  style={{ width: "120px",display: "flex", justifyContent: "center", paddingTop: "5px"}}>
                   <a href='./assets/certificado-java.jpg' target='_blank' className='Link-pers'>Certificado</a>
                 </Grid>
               </Grid> 

               <Grid >
                <Grid>
                <Typography variant='h4' style={{fontFamily: "Bebas Neue, cursive", color: "#ffee58"}}>Base de datos relacionables</Typography>
                </Grid>
                 <Grid>
                   <Typography style={{fontFamily: "Bruno Ace", color: "#c5cae9"}}>Curso de Sql Server hecho en Udemy</Typography>
                   <h6 style={{fontFamily: "Bruno Ace", color: "#c5cae9", paddingTop: "18px", paddingBottom: "10px"}}>Curso de 16 horas.</h6>
                 </Grid>
                 <Grid  style={{ width: "120px",display: "flex", justifyContent: "center", paddingTop: "5px"}}>
                   <a href='./assets/certificado-Sql.jpg' target='_blank' className='Link-pers'>Certificado</a>
                 </Grid>
               </Grid>  
               
            </Grid>

    </>
  )
}
