
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink} from "react-router"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { checkingAuthenticaction, startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth/thunks"

const initialValues = {
  email: '',
  password: ''
};

export const LoginPage = () => {

  const dispatch = useDispatch();
  const {status, errorMessage}= useSelector(state => state.auth);

  
  const { email, password, onInputChange } = useForm( initialValues );

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email,password})
    dispatch(startLoginWithEmailAndPassword({email,password}))
  }

  const onGoogleLogin = () => {
    console.log('Google login');
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
          <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
          <Grid2 container spacing={2}>
            <Grid2 item xs={12} md={6} sx={{mt:2}} >
              <TextField 
                fullWidth
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
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
                />
            </Grid2>

            <Grid2 container>
              <Grid2 
                item 
                xs={12}
                display={!!errorMessage ? '' : 'none'}
                >
                <Alert severity="error">
                  {errorMessage}
                </Alert>
              </Grid2>
            </Grid2>

            <Grid2 container spacing={2} sx={{mb:2, mt:2}}>
              <Grid2 item xs={12} sm={6}>
                <Button 
                  disabled={isAuthenticating}
                  type="submit" 
                  variant="contained" 
                  fullWidth

                  >
                  Login
                </Button>
              </Grid2>

              <Grid2 item xs={12} sm={6}>
                <Button 
                  onClick={onGoogleLogin} 
                  variant="contained" 
                  fullWidth
                  disabled={isAuthenticating}
                  >
                  <Google/>
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid2>

            </Grid2>

            <Grid2 container direction='row' justifyContent='end'>
              <Link component={RouterLink}  color="inherit" to="/auth/register">
                Crear cuenta
              </Link>
              
            </Grid2>

          </Grid2>
        </form>

    </AuthLayout>


  )
}
