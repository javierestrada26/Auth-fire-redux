import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

import { useSelector } from "react-redux"

export const SideBar = ({drawerWidth=240}) => {

   const {displayName} = useSelector(state => state.auth) 
  return (
    <Box
        component='nav'
        sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}
    >   
        <Drawer
            variant='permanent'
            open
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper':{
                    width:drawerWidth,
                    boxSizing:'border-box'
                }
            }}
        >
            {/* Toolbar */}
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>{displayName}</Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Home', 'Profile', 'About', 'Contact'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid2 container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'algo como no se que pero tiene que tener sentido'}/>
                                </Grid2>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
