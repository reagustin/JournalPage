import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux';




export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: {sm:0}}}
    >
        <Drawer
            variant='permanent'  // temporary (si tenemos la intencion de ocultarlo condicionalmente)
            open // open={true} es lo mismo que ponerla en true, si tenemos una propidad, mencionarla es ponerla en true.
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text }></ListItemText>
                                    <ListItemText secondary={ 'Et aliquip sit tempor Lorem ad commodo in consectetur.' }></ListItemText>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

    </Box>
  )
}
