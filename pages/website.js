import React from 'react';
import Head from 'next/head';

import {
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import CallToAction from '../src/UI/CallToAction';
import Link from '../src/Link';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  heading: {
    maxWidth: '40em',
  },
  ArrowContainer: {
    marginTop: '0.5em',
  },
  paragraphContainer: {
    maxWidth: '30em',
  },
}));

const Website = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Stunning Custom Website Design & Development | DreamLab Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side-rendering, and perfect responsive design | 99% PageSpeed Score "
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the MiddleEast | Websites"
          key="og:title"
        />
        <meta property="og:url" content="/website" key="og:url" />
        <link rel="canonical" key="canonical" href="/website" />
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
              href="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
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
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
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
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
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
              href="/services"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
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
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: '10em' }}
      >
        <Grid item>
          {' '}
          {/*//With this we can use justify and align through parent//  */}
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? 'center' : undefined}
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/analytics.svg"
                style={{ marginLeft: '-2.7em' }}
                alt="graph with magnifying glass"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            className={classes.paragraphContainer}
          >
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Knowledge is power, and data is 21st Century gold. Analyzing
                this data can reveal hidden patterns and trends in your
                business, empowering you to make smarter decisions with
                measurable effects.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems="center"
        justify="flex-end"
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          {' '}
          {/*//With this we can use justify and align through parent//  */}
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/ecommerce.svg" alt="E-commerce" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : '1em' }}>
          <Grid container direction="column">
            <Grid item className={classes.paragraphContainer}>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                It’s no secret that people like to shop online.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                time for your slice of that pie.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          {' '}
          {/*//With this we can use justify and align through parent//  */}
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? 'center' : undefined}
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/outreach.svg"
                style={{ marginLeft: '-2.7em' }}
                alt="Megaphone"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : '1em' }}>
          <Grid
            container
            direction="column"
            className={classes.paragraphContainer}
          >
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Draw people in with a dazzling website. Showing off your
                products online is a great way to help customers decide what’s
                right for them before visiting in person.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems="center"
        justify="flex-end"
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          {' '}
          {/*//With this we can use justify and align through parent//  */}
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/seo.svg"
                alt="Website standing on winner's podium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : '1em' }}>
          <Grid container direction="column">
            <Grid item className={classes.paragraphContainer}>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                How often have you ever been to the second page of Go
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                If you’re like us, probably never.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Customers don’t go there either, so we make sure your website is
                designed to end up on top.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Website;
