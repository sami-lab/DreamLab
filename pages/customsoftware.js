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

import documentsAnimation from '../src/animations/documentsAnimation/data';
import scaleAnimation from '../src/animations/scaleAnimation/data.json';
import automationAnimation from '../src/animations/automationAnimation/data.json';
import userExperienceAnimation from '../src/animations/uxAnimation/data';

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

const CustomSoftware = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const documentOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const userExperienceOptions = {
    loop: true,
    autoplay: true,
    animationData: userExperienceAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development and Design - Free Estimate | DreamLab
          Development
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch- let us optimize your business, solving your problem instead of creating new ones."
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the MiddleEast | Custom Software Development"
          key="og:title"
        />
        <meta property="og:url" content="/customsoftware" key="og:url" />
        <link rel="canonical" key="canonical" href="/customsoftware" />
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
              href="/services"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
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
              align={matchesMD ? 'center' : undefined}
              style={{
                lineHeight: matchesXS ? 1.1 : null,
                marginBottom: matchesXS ? '0.5em' : null,
                fontSize: '2.25em',
              }}
            >
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Whether we're replacing old software or inventing new
              solutions,Arc Development is here to help your business tackle
              technology.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Using Regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuffyou do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Our Custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely turned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.{' '}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              we create exactly what you want, exactly how want it.
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
              href="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
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
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid
          item
          container
          md
          style={{ maxWidth: '40em' }}
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h4">Save Energey</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="bulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '5em' : 0,
            marginBottom: matchesSM ? '5em' : 0,
          }}
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch.svg" alt="stopWatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          style={{ maxWidth: '40em' }}
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems={matchesMD ? 'center' : undefined}
        justify={matchesMD ? 'center' : 'space-between'}
        style={{ display: matchesMD ? 'grid' : undefined }}
      >
        <Grid
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
        >
          <Grid item container md direction="column">
            <Grid item>
              <Typography
                variant="h4"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Digital Documnets and Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Reduce Errors.Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentOptions}
              style={{ maxHeight: 225, maxWidth: 225, minHeight: 200 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md style={{ marginBottom: matchesSM ? '2em' : null }}>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container md direction="column">
            <Grid item>
              <Typography
                variant="h4"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.rowContainer}
          style={{ marginTop: '20em', marginBottom: '20em' }}
        >
          <Grid item>
            <img
              src="/assets/root.svg"
              alt="roots"
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" gutterBottom align="center">
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" paragraph align="center">
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify={matchesMD ? 'center' : 'space-between'}
        className={classes.rowContainer}
        style={{ display: matchesMD ? 'grid' : undefined }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
        >
          <Grid item container md direction="column">
            <Grid item>
              <Typography
                variant="h4"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM ? '2em' : null }}>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md style={{ marginBottom: matchesSM ? '2em' : null }}>
            <Lottie
              options={userExperienceOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container md direction="column">
            <Grid item>
              <Typography
                variant="h4"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: '8em' }}>
        <CallToAction SetValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
