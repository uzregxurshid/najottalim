import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { RestaurantOutlined } from '@mui/icons-material';

export default function Appbar(props) {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' , verticalAlign: 'center'} }}
            align={'center'}
          >
           <RestaurantOutlined/>  {props.name}
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Appbar.defaultProps={
  name:"Restaurants"
}

