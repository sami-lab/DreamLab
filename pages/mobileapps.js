import React from 'react';
import Lottie from 'react-lottie';
import Head from 'next/head';

import {
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import integrationAnimation from '../src/animations/integrationAnimation/data.json';
import CallToAction from '../src/UI/CallToAction';
import Link from '../src/Link';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
      paddingTop: '1em',
    },
  },
  heading: {
    maxWidth: '40em',
  },
  ArrowContainer: {
    marginTop: '0.5em',
  },
  itemContainer: {
    maxWidth: '33em',
  },
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          iOS/Android App Design and Development | DreamLab Development
        </title>
        <meta
          name="description"
          key="description"
          content="Mobile Apps Made Easy | Our cutting-edge mobile app development process lets us build beautifully designed, carefully crafted apps for both iOS and Android"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the MiddleEast | iOS/Android App Development"
          key="og:title"
        />
        <meta property="og:url" content="/mobileapps" key="og:url" />
        <link rel="canonical" key="canonical" href="/mobileapps" />
      </Head>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify={matchesMD ? 'center' : undefined}
        style={{ marginTop: matchesXS ? '1em' : 'em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.ArrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              component={Link}
              href="/customsoftware"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
              style={{ backgroundColor: 'transparent' }}
            >
              {' '}
              <img src="/assets/backArrow.svg" alt="Back Arrow" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          direction="column"
          className={classes.heading}
          spacing={1}
        >
          <Grid item>
            <Typography
              variant="h1"
              gutterBottom
              align={matchesMD ? 'center' : undefined}
              style={{
                lineHeight: matchesXS ? 1.1 : null,
                marginBottom: matchesXS ? '0.5em' : null,
                fontSize: '2.25em',
              }}
            >
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            ></Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutio ns for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid
            item
            className={classes.ArrowContainer}
            style={{ position: 'absolute', right: 0 }}
          >
            <IconButton
              component={Link}
              href="/website"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
              style={{ backgroundColor: 'transparent' }}
            >
              {' '}
              <img src="/assets/forwardArrow.svg" alt="forward Arrow" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        md
        style={{ marginTop: '15em', marginBottom: '15em' }}
        className={classes.rowContainer}
      >
        <Grid item container md direction="column">
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? 'center' : undefined}
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{
              maxWidth: matchesMD ? '15em' : '20em',
              height: matchesMD ? '20em' : undefined,
            }}
          />
        </Grid>
        <Grid item md container direction="column">
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? 'center' : 'right'}
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align={matchesMD ? 'center' : 'right'}>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography variant="body1" align={matchesMD ? 'center' : 'right'}>
              This significantly reduces cost s and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        justify="center"
        className={classes.rowContainer}
        style={{ marginBottom: '10em', display: 'grid' }}
      >
        <Grid item container md alignItems="center" direction="column">
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/swissKnife.svg" alt="Knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          style={{
            marginTop: matchesMD ? '5em' : 0,
            marginBottom: matchesMD ? '5em' : 0,
          }}
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              {' '}
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/extendAccess.svg"
              style={{ maxWidth: matchesXS ? '20em' : '28em' }}
              alt="Extend Access"
            />
          </Grid>
        </Grid>
        <Grid item container md alignItems="center" direction="column">
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/increaseEngagement.svg" alt="Engagement" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
