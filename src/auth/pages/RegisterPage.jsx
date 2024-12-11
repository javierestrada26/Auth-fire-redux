
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink} from "react-router"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks"


const formData = {
  displayName:'',
  email:'',
  password:''
}

const formValidations = {
  email:[ (value) => value.includes('@'),'El correo debe tener una @'],
  password:[ (value) => value.length > 5,'La contraseña debe tener al menos 6 caracteres'],
  displayName:[ (value) => value.trim().length > 0,'El nombre es obligatorio']
}



export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage}= useSelector(state => state.auth);

  const isCheckingAuthenticaction = useMemo(()=> status === 'checking', [status]);

  const {
    displayName,email,password,onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  }= useForm(formData, formValidations);



  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    
    dispatch (startCreatingUserWithEmailAndPassword(formState))
  }

  return (
    <AuthLayout title="Crear Cuenta" >
      
          <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
          <Grid2 container spacing={2} >
          <Grid2 item xs={12} md={6} sx={{mt:2}} >
              <TextField 
                fullWidth
                label="Nombre Completo" 
                type="text" 
                placeholder="Nombre Completo"
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={displayNameValid && formSubmitted}
                helperText={displayNameValid}
                />
            </Grid2>

            <Grid2 item xs={12} md={6} sx={{mt:2}} >
              <TextField 
                fullWidth
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
                error={emailValid && formSubmitted}
                helperText={emailValid}
                />
            </Grid2>


            <Grid2 item xs={12} md={6} sx={{mt:2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={passwordValid && formSubmitted}
                helperText={passwordValid}
                />
            </Grid2>

            <Grid2 container  spacing={2} sx={{mb:2, mt:2}}>

            <Grid2 
              item 
              xs={12}
              display={!!errorMessage ? '' : 'none'}
              >
              <Alert severity="error">
                {errorMessage}
              </Alert>
            </Grid2>

              <Grid2 item xs={12}>
                <Button
                  disabled={isCheckingAuthenticaction} 
                  type="submit"
                  variant="contained" 
                  fullWidth>
                  Crear Cuenta
                </Button>
              </Grid2>

            </Grid2>

            <Grid2 container direction='row' >
              <Typography sx={{mr:1}}>¿Ya tienes cuenta? </Typography>
              <Link component={RouterLink}  color="inherit" to="/auth/login">
                Ingresar
              </Link>
              
            </Grid2>

          </Grid2>
        </form>

    </AuthLayout>


  )
}


