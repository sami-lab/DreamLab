import React from 'react';
import Head from 'next/head';
import Lottie from 'react-lottie';

import {
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import LandingData from '../src/animations/landinganimation/data';

import ButtonArrow from '../src/UI/ButtonArrow';
import CallToAction from '../src/UI/CallToAction';
import Link from '../src/Link';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 40,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnMoreButton: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
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
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginButtom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0em',
    },
  },
  serviceContainer: {
    marginTop: '8em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
  },
  revolutionBackground: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  RevolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '8em 0',
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));
const Home = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LandingData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites Design & Development|
          DreamLab Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost! "
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the MiddleEast |  DreamLab Development"
          key="og:title"
        />
        <meta property="og:url" content="/" key="og:url" />
        <link rel="canonical" key="canonical" href="/" />
      </Head>
      <Grid item>
        {' '}
        {/*=========HERO BLOCK =========*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h1" color="primary" align="center">
              Bringing West Coast Technology <br /> to the MiddleEast{' '}
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => props.setValue(5)}
                  component={Link}
                  href="/estimate"
                  className={classes.estimateButton}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => props.setValue(2)}
                  component={Link}
                  href="/revolution"
                  className={classes.learnMoreButton}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
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
          <Grid item style={{ marginTop: matchesSM ? '1em' : 0 }}>
            <img
              alt="custom Software Development"
              className={classes.icon}
              src="/assets/CustomSoftwareIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.serviceContainer}>
        {' '}
        {/*=========Mobile App BLOCK =========*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
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
            style={{
              marginRight: matchesSM ? '0em' : '5em',
              marginTop: matchesSM ? '1em' : 0,
            }}
          >
            <img
              alt="Mobile App Development"
              className={classes.icon}
              src="/assets/mobileIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.serviceContainer}>
        {' '}
        {/*=========Website  BLOCK =========*/}
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
          <Grid item style={{ marginTop: '1em' }}>
            <img
              alt="Website Development"
              className={classes.icon}
              src="/assets/websiteIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*=========Revolution  BLOCK =========*/}
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: '80em' }}
        >
          <Card className={classes.RevolutionCard}>
            <CardContent>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution{' '}
                  </Typography>
                </Grid>
                <Grid item style={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for Revolution{' '}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                    component={Link}
                    href="/revolution"
                    className={classes.learnMoreButton}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground}></div>
        </Grid>
      </Grid>
      <Grid item>
        {/*=========About/Contact  BLOCK =========*/}
        <Grid
          container
          className={classes.infoBackground}
          style={{ height: '70em' }}
          alignItems="center"
          direction="row"
        >
          <Grid
            item
            container
            style={{ textAlign: matchesXS ? 'center' : 'inherit' }}
            direction={matchesXS ? 'column' : 'row'}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
            >
              <Grid
                container
                direction="column"
                style={{ marginBottom: matchesXS ? '10em' : 0 }}
              >
                <Typography variant="h1" style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={() => props.setValue(3)}
                    component={Link}
                    href="/about"
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                    <ButtonArrow width={15} height={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right',
              }}
            >
              <Grid container direction="column">
                <Typography variant="h1" style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Say Hello!!!</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={() => props.setValue(4)}
                    component={Link}
                    href="/contact"
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                    <ButtonArrow width={15} height={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*=========CallToAction  BLOCK =========*/}
        <CallToAction {...props} />
      </Grid>
    </Grid>
  );
};

export default Home;
