import React from 'react';
import Head from 'next/head';

import {
  Grid,
  Typography,
  useMediaQuery,
  Avatar,
  Hidden,
} from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import CallToAction from '../src/UI/CallToAction';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
      paddingTop: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1em',
      paddingRight: '1em',
      paddingTop: '0.8em',
    },
  },
  profile: {
    height: '22em',
    width: '22em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
}));

const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          About Us - History & Team | DreamLab Development
        </title>
        <meta
          name="description"
          key="description"
          content="We provide the fastest, most modern, affordable and aesthetic
         software design and development services in the Midwest. Get a free estimate now!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the MiddleEast | About Us"
          key="og:title"
        />
        <meta property="og:url" content="/about" key="og:url" />
        <link rel="canonical" key="canonical" href="/about" />
      </Head>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '1em' : '2em', marginBottom: '2em' }}
      >
        <Typography
          variant="h1"
          align={matchesMD ? 'center' : undefined}
          gutterBottom
        >
          About Us
        </Typography>
      </Grid>
      <Grid item container className={classes.rowContainer} justify="center">
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
          paragraph
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. DreamLab Development will use
          that principle to provide fast, modern, inexpensive, and aesthetic
          software to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify="space-around"
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          <Grid
            item
            container
            lg
            direction="column"
            alignItems={matchesMD ? 'center' : undefined}
            style={{ maxWidth: '45em' }}
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? 'center' : undefined}
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{ fontWeight: 700, fontStyle: 'italic' }}
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                We’re the new kid on the block.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src="/assets/history.svg"
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
              alt="history"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item>
          <Typography variant="h1" align="center" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" paragraph>
            Muhammad Sami, Founder
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            A Professional Web and App Developer
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            src="/assets/founder.jpg"
            className={classes.profile}
            alt="Profile"
          />
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: '25em', padding: '1.25em' }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in first year,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics , studying
                design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            lg
            direction="column"
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '15em' : 0 }}
          >
            <Grid item>
              <img
                src="/assets/founder1.jpg"
                style={{
                  borderRadius: '10%',
                  maxWidth: matchesMD ? 300 : undefined,
                }}
                alt="Profile"
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">A Photo of Founder</Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '25em', padding: '1.25em' }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in first year,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics , studying
                design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid
              item
              container
              lg
              direction="column"
              alignItems={matchesMD ? 'center' : 'flex-end'}
            >
              <Grid item>
                <img
                  src="/assets/founder1.jpg"
                  style={{
                    borderRadius: '10%',
                    maxWidth: matchesMD ? 300 : undefined,
                  }}
                  alt="Profile"
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">A Photo of Founder</Typography>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction SetValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default About;
