import React from 'react';
import Head from 'next/head';

import { Grid, Button, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ButtonArrow from '../src/UI/ButtonArrow';
import Link from '../src/Link';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginButtom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0em',
    },
  },
  serviceContainer: {
    marginTop: '8em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
      marginTop: '8em',
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginButtom: '2em',
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Top Custom Software Development Services | DreamLab Development
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge software, mobile-app and website development services with sleek custom designs - get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the MiddleEast | Services"
          key="og:title"
        />
        <meta property="og:url" content="/services" key="og:url" />
        <link rel="canonical" key="canonical" href="/services" />
      </Head>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}
      >
        <Typography
          variant="h1"
          align={matchesSM ? 'center' : undefined}
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid
        item
        className={classes.serviceContainer}
        style={{ marginTop: matchesSM ? '1em' : '5em' }}
      >
        {' '}
        {/*=========Mobile App BLOCK =========*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">IOS/Android Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Extend Engagement
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create Your Stanalone{' '}
              <span className={classes.specialText}>APP.</span>
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
              className={classes.learnButton}
              component={Link}
              href="/mobileapps"
            >
              <span style={{ marginRight: 10 }}>Learn More</span>{' '}
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{ marginRight: matchesSM ? '0em' : '5em', marginTop: '2px' }}
          >
            <img
              alt="Mobile App Development"
              width="250em"
              className={classes.icon}
              src="/assets/mobileIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.serviceContainer}>
        {' '}
        {/*=========Custom Software BLOCK =========*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? '0em' : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital Solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>{' '}
              {matchesSM ? null : <br />} with either mobile plateform.
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
              component={Link}
              href="/customsoftware"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>{' '}
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom Software Development"
              className={classes.icon}
              src="/assets/CustomSoftwareIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.serviceContainer}
        style={{ marginBottom: '10em' }}
      >
        {' '}
        {/*=========Website  BLOCK =========*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              React More. Discover More. Sell More
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines{' '}
              <span className={classes.specialText}>SEO.</span>{' '}
              {matchesSM ? null : <br />} built for speed.
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
              component={Link}
              href="/website"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>{' '}
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{ marginTop: '2px', marginRight: matchesSM ? '0' : '5em' }}
          >
            <img
              alt="Website Development"
              width="250em"
              className={classes.icon}
              src="/assets/websiteIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
