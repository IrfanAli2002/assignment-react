import React from 'react'
import { BrowserRouter as Router ,Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import '../App.css'
import { Button } from '@mui/material';


const drawerWidth = 250;


function DrawerRouter() {

  return (
    <Router>
          <div  >
        <Drawer
        className="Drawer"
        variant = "persistent"
        anchor="left"
        open={true}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        >

          <List>
          <Button fullWidth variant='contained'>
            <Link   to="/">
            <ListItem
             >
              <ListItemIcon>
                <HomeIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText >
                Dashboard
              </ListItemText>
            </ListItem>

            </Link>
               </Button>

          <Button fullWidth variant='contained'>

            
            <Link to="/profile">
            <ListItem  >
              <ListItemIcon>
                <PersonIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText>
                Profile
              </ListItemText>
            </ListItem>
            </Link>
          </Button>

          <Button fullWidth variant='contained'>

            <Link to="/analysis">
            <ListItem  >
              <ListItemIcon>
                <InsightsIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText>
                Analysis
              </ListItemText>
            </ListItem>
            </Link>
          </Button>

          <Button fullWidth variant='contained'>

            <Link to="/accounting">
            <ListItem  >
              <ListItemIcon>
                <AccountBalanceIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText>
                Accounting
              </ListItemText>
            </ListItem>
            </Link>
          </Button>

          <Button fullWidth variant='contained'>

            <Link to="/message">
            <ListItem  >
              <ListItemIcon>
                <EmailIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText>
                Messages
              </ListItemText>
            </ListItem>
            </Link>
          </Button>


       



          <Button fullWidth variant='contained'>

            <Link to="/project">
            <ListItem  >
              <ListItemIcon>
                <WorkIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText>
                Project
              </ListItemText>
            </ListItem>
            </Link>
          </Button>
          </List>
        </Drawer>
        
          </div>
      </Router>
  )
}

export default DrawerRouter