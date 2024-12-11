import { LogoutOutlined, MenuBookOutlined } from "@mui/icons-material"
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";


export const NavBar = ({drawerWidth=240}) => {


    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }


  return (
    <AppBar 
    position="fixed"
    sx={{
        width: {sm: `calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`}
    }}
    >
        <Toolbar>
            <IconButton 
                color="inherit"
                edge="start"
                sx={{mr:2, display:{sm:'none'}}}
            
            >
                <MenuBookOutlined/>
            </IconButton>

            <Grid2 container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" noWrap component='div' >JournalApp</Typography>
                <IconButton 
                    color="error"
                    onClick={onLogout}>
                    <LogoutOutlined/>
                </IconButton>
            </Grid2>
        </Toolbar>
    </AppBar>
  )
}
