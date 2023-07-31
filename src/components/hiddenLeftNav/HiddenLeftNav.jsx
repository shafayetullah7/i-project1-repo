import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { MdOutlineMenu } from "react-icons/md";
import LeftNav2 from '../leftnav/LeftNav2';

import './hiddenLeftNav.css'

export default function HiddenLeftNav() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      display={'inline'}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <LeftNav2></LeftNav2>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
            <button className='toggler' onClick={toggleDrawer('left', true)}><MdOutlineMenu></MdOutlineMenu></button>
            <SwipeableDrawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
