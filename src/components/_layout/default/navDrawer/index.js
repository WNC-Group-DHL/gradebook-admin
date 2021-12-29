import {
  useMediaQuery
} from '@mui/material';

import {
  Box,
  Drawer,
  Paper,
} from '@mui/material';

import DrawerContent from './drawerContent';

const DRAWER_WIDTH = 250;

export default function NavigationDrawer({open, toggleDrawer}) {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Drawer
      variant={isMdUp ? 'persistent': 'temporary'}
      anchor='left'
      open={open}
      onClose={toggleDrawer}
    >
      <Paper>
        <Box width={DRAWER_WIDTH}>
          <DrawerContent
            toggleDrawer={toggleDrawer}
          />
        </Box>
      </Paper>
    </Drawer>
  )
}
