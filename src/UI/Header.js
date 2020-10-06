import React, { useEffect, useState } from 'react';
import {
  useScrollTrigger,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  MenuItem,
  Menu,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Typography,
} from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import Link from '../Link';

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true, //disable delay
    threshold: 0, //how far user has to scroll beforee it triggers this event
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles((theme) => ({
  AppBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    //classname
    ...theme.mixins.toolbar,
    marginBottom: '1.5em', //jss
    [theme.breakpoints.down('md')]: {
      marginBottom: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em',
    },
  }, //This Provides height of Appbar,//By Using this we can push content after appbar
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    height: '6.5em',
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      height: '6.5em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '6em',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    color: 'white',
    marginLeft: '20px',
    '&:hover': {
      textDecoration: 'none',
      opacity: 1,
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '60px',
    marginRight: '20px',
    whiteSpace: 'nowrap',
    height: '45px',
    boxShadow: '1px 1px 5px 1px  #000',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },

  menuItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
    '&.Mui-selected': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: '1em',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    width: 50,
    height: 50,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    height: '45px',
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false); //for dropdownOpen

  const handleChanged = (event, newValue) => {
    props.setValue(newValue);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Mobile App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Website Development',
      link: '/website',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaHaspopup: anchorEl ? true : false,
      onMouseOver: (event) => handleClick(event),
    },
    { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
    { name: 'Portfolio', link: '/portfolio', activeIndex: 5 },
  ];
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
    if (window.location.pathname === '/estimate') {
      props.setValue(6);
    }
    if (window.location.pathname.includes('/project/')) {
      props.setValue(5);
    }
  }, [props.value, props.selectedIndex, menuOptions, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChanged}
        indicatorColor="primary"
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            classes={{ textColorPrimary: 'white' }}
            className={classes.tab}
            key={route.name}
            label={route.name}
            component={Link}
            href={route.link}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaHaspopup}
            onMouseOver={route.onMouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        onClick={() => props.setValue(6)}
        color="secondary"
        component={Link}
        href="/estimate"
        className={classes.button}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        style={{ zIndex: 1302 }}
        anchorEl={anchorEl}
        keepMounted
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }} //Props pass to List of Menu
        classes={{
          paper: classes.menu,
        }} //Passing Prop to Paper component
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option.name}
            onClick={() => {
              handleClose();
              props.setSelectedIndex(i);
              props.setValue(1);
            }}
            component={Link}
            href={option.link}
            classes={{ root: classes.menuItem }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding onClick={() => setOpenDrawer(false)}>
          {routes.map((route) => (
            <ListItem
              key={route.name}
              divider
              button
              component={Link}
              href={route.link}
              onClick={handleChanged}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            component={Link}
            href={'/estimate'}
            onClick={() => props.setValue(6)}
            selected={props.value === 6}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer((openDrawer) => !openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.AppBar}>
          <Toolbar disableGutters={true}>
            <Button
              component={Link}
              style={{ textDecoration: 'none' }}
              href="/"
              onClick={() => props.setValue(0)}
              disableRipple
              className={classes.logoContainer}
            >
              <svg
                id="Layer_1"
                className={classes.logo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 139"
              >
                <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10} `}</style>

                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />

                <path className="st0" d="M-1 139h479.92v.01H-1z" />
                <text
                  transform="translate(110.994 60.233)"
                  className="st1 st2"
                  fontSize="50"
                >
                  DreamLab
                </text>
                <text
                  transform="translate(20.692 110.015)"
                  className="st1 st2"
                  fontSize="54"
                >
                  Development
                </text>

                <path
                  className="st0"
                  d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
                />
                <path
                  d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                  fill="#0b72b9"
                />
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                      <path
                        id="Path_59"
                        className="st1"
                        d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st0"
                  d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
                />
              </svg>
            </Button>

            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
      {/* This Div is Imaginary Space we Assign to AppBar */}
    </React.Fragment>
  );
}
