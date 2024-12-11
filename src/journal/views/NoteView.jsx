import { SaveOutlined, SpaceBar } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"


export const NoteView = () => {
  return (
    <Grid2
        className="animate__animated animate__fadeIn animate__faster" 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{mb:1}}>
        <Grid2 item >
            <Typography fontSize={30} fontWeight='light'>30/12/2024</Typography>
        </Grid2>

        <Grid2>
            <Button color="primary" sx={{padding:2}}>
                <SaveOutlined sx={{fontSize:30, mr:1}}/>
                Guardar
            </Button>
        </Grid2>
        {/**insertar un espacio  */}
        
        <Grid2 container  >
            <TextField
                type="text"
                variant="filled"
                placeholder="Ingrese un titulo"
                label="Titulo"
                sx={{border:'none', mb:1}}
                fullWidth={true}
            >
            </TextField>

            <TextField
                type="text"
                variant="filled"
                multiline
                fullWidth
                label="¿Qué pasó hoy?"
                minRows={5}
            >
            </TextField>
        </Grid2>
        {/**Galeria de imagenes */}
        <ImageGallery/>
    </Grid2>
  )
}
