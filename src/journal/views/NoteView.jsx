import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"

import { DeleteOutline, SaveOutlined, SpaceBar, UploadOutlined } from "@mui/icons-material"
import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from "../../hooks/useForm"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks"



export const NoteView = () => {

    const dispatch = useDispatch();

    const {active:note, messageSaved, isSaving} = useSelector(state => state.journal);

    const {title, body,date, onInputChange, formState} = useForm(note);

    const dateString  = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    },date)

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if(messageSaved.length > 0){
            Swal.fire('Nota guardada',messageSaved,'success')
        }
    }, [messageSaved])
    

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;
        console.log('subiendo archivos');
        dispatch(startUploadingFiles(target.files))
    }


    const onDelete = () => {
        dispatch(startDeletingNote());
    }
  return (
    <Grid2
        className="animate__animated animate__fadeIn animate__faster" 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{mb:1}}>
        <Grid2 item >
            <Typography fontSize={30} fontWeight='light'>{dateString}</Typography>
        </Grid2>

        <Grid2>

            <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{display:'none'}}
            />
            <IconButton
                color="primary"
                disabled={isSaving}
                onClick={() => fileInputRef.current.click()}
            >
                <UploadOutlined/>
            </IconButton>

            <Button 
                disabled={isSaving}
                onClick={onSaveNote}
                color="primary" 
                sx={{padding:2}}>
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
                name="title"
                value={title}
                onChange={onInputChange}
            >
            </TextField>

            <TextField
                type="text"
                variant="filled"
                multiline
                fullWidth
                label="¿Qué pasó hoy?"
                minRows={5}
                name="body"
                value={body}
                onChange={onInputChange}
            >
            </TextField>
        </Grid2>

        <Grid2 conatiner justifyContent='end'>
            <Button
                onClick={onDelete}
                sx={{mt:2}}
                color="error"
            >
                <DeleteOutline/>
                Borrar
            </Button>
        </Grid2>
        {/**Galeria de imagenes */}
        <ImageGallery images={note.imageUrls}/>
    </Grid2>
  )
}
