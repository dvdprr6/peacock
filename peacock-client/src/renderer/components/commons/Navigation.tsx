import {FC, ReactNode, useState} from 'react'
import { makeStyles } from '@mui/styles'
import {
  AppBar, Badge, Container,
  Divider, Drawer, IconButton,
  List, ListItem, ListItemButton,
  ListItemIcon, Theme, Tooltip,
  Box, Toolbar, Typography, Link
} from '@mui/material'

import NotificationsIcon from '@mui/icons-material/Notifications'
import { Dashboard } from '@mui/icons-material'
import clsx from 'clsx'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    padding: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))

const Navigation: FC<{ component: ReactNode }> = (props) => {
  const { component: Component } = props
  const classes = useStyles()
  const [open] = useState<boolean>(false)

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar
        position={'absolute'}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
            Giraffe Client
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={'permanent'}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <Box className={classes.toolbarIcon} />
        <Divider />
        {/*<List>*/}
        {/*  <ListItemButton component={Link} href={'/Dashboard'}>*/}
        {/*    <ListItemIcon>*/}
        {/*      <Dashboard />*/}
        {/*    </ListItemIcon>*/}
        {/*  </ListItemButton>*/}
        {/*</List>*/}
        {/*<List>*/}
        {/*  <Tooltip title={'Dashboard'} arrow placement={'right'}>*/}
        {/*    <ListItem disablePadding>*/}
        {/*      <ListItemButton>*/}
        {/*        <Link href={'/dashboard'}>*/}
        {/*          <ListItemIcon>*/}
        {/*            <DashboardIcon />*/}
        {/*          </ListItemIcon>*/}
        {/*        </Link>*/}
        {/*      </ListItemButton>*/}
        {/*    </ListItem>*/}
        {/*  </Tooltip>*/}
        {/*  <Tooltip title={'Mapping'} arrow placement={'right'}>*/}
        {/*    <ListItem disablePadding>*/}
        {/*      <ListItemButton>*/}
        {/*        <Link href={'/mapping'}>*/}
        {/*          <ListItemIcon>*/}
        {/*            <MapIcon />*/}
        {/*          </ListItemIcon>*/}
        {/*        </Link>*/}
        {/*      </ListItemButton>*/}
        {/*    </ListItem>*/}
        {/*  </Tooltip>*/}
        {/*  <Tooltip title={'Rule'} arrow placement={'right'}>*/}
        {/*    <ListItem disablePadding>*/}
        {/*      <ListItemButton>*/}
        {/*        <Link href={'/rule'}>*/}
        {/*          <ListItemIcon>*/}
        {/*            <RuleIcon />*/}
        {/*          </ListItemIcon>*/}
        {/*        </Link>*/}
        {/*      </ListItemButton>*/}
        {/*    </ListItem>*/}
        {/*  </Tooltip>*/}
        {/*  <Tooltip title={'Job'} arrow placement={'right'}>*/}
        {/*    <ListItem disablePadding>*/}
        {/*      <ListItemButton>*/}
        {/*        <Link href={'/job'}>*/}
        {/*          <ListItemIcon>*/}
        {/*            <WorkIcon />*/}
        {/*          </ListItemIcon>*/}
        {/*        </Link>*/}
        {/*      </ListItemButton>*/}
        {/*    </ListItem>*/}
        {/*  </Tooltip>*/}
        {/*</List>*/}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container
          maxWidth={'xl'}
          className={classes.container}
        >
          <div>{Component}</div>
        </Container>
      </main>
    </Box>
  )
}

export default Navigation