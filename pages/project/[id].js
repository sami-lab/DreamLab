import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Head from 'next/head';

import {
  Grid,
  Paper,
  Typography,
  Divider,
  LinearProgress,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Link from '../../src/Link';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    marginTop: 0,
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1em',
      paddingRight: '1em',
    },
  },
}));
const Project = ({ projectData, error }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const divider = (
    <Divider
      style={{
        maxWidth: '20%',
        height: '0.5em',
        backgroundColor: theme.palette.common.blue,
        marginBottom: '1em',
        marginTop: '1em',
        display: 'block',
        marginLeft: matchesMD ? 'auto' : undefined,
        marginRight: matchesMD ? 'auto' : undefined,
      }}
    />
  );
  return (
    <>
      <Head>
        <title key="title">{projectData.title}| DreamLab Development</title>
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
        <meta property="og:url" content="/project/[id]" key="og:url" />
        <link rel="canonical" key="canonical" href="/project/[id]" />
      </Head>
      {!error ? (
        <Grid container direction="column">
          {/* Slides */}
          <Grid item container>
            <Grid item>
              <Carousel navButtonsAlwaysVisible={true}>
                {projectData.imageURL.map((item, i) => (
                  <Paper elevation={2} key={i}>
                    <img
                      src={item}
                      style={{ width: '100vw', height: '85vh' }}
                    />
                  </Paper>
                ))}
              </Carousel>
            </Grid>
          </Grid>
          {/* Introduction */}
          <Grid
            item
            container
            direction={matchesSM ? 'column' : 'row'}
            spacing={matchesSM ? 2 : 0}
            justify="space-between"
            alignItems="center"
            className={classes.rowContainer}
            style={{ marginTop: '2em' }}
          >
            <Grid item>
              <Typography variant="h3" align={matchesSM ? 'center' : undefined}>
                Project Details
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
              >
                <Link href="/portfolio" style={{ fontWeight: 'bolder' }}>
                  <a> Portfolio </a>
                </Link>
                / {projectData.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.rowContainer}>
            {divider}
          </Grid>
          {/* Project Details */}
          <Grid
            item
            container
            direction={matchesSM ? 'column' : 'row'}
            alignItems="center"
            className={classes.rowContainer}
            style={{
              marginTop: '5em',
              marginBottom: '5em',
            }}
          >
            <Grid item container spacing={2} direction="column" md={8}>
              <Grid item>
                <Typography
                  variant="h3"
                  color="secondary"
                  align={matchesSM ? 'center' : undefined}
                >
                  {projectData.title}
                </Typography>
                {divider}
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  align={matchesSM ? 'center' : undefined}
                  style={{
                    fontWeight: 'bolder',
                    fontSize: '3rem',
                  }}
                >
                  Summary
                </Typography>
                {divider}
                <Typography
                  variant="body1"
                  gutterBottom
                  align={matchesSM ? 'center' : undefined}
                  paragraph
                >
                  {projectData.summary}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={4}
              container
              direction="column"
              component={Paper}
              elevation={4}
              style={{
                padding: '2em',
                marginTop: matchesSM ? '2em' : 0,
                marginBottom: matchesSM ? '2em' : 0,
              }}
              spacing={2}
            >
              <Grid item>
                <Typography variant="h4">Project information</Typography>
              </Grid>
              <Grid item>
                <Divider />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>Category:</span>{' '}
                  {projectData.type === 0
                    ? 'Website'
                    : projectData.type === 1
                    ? 'Mobile App'
                    : 'Custom Software'}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {' '}
                  <span style={{ fontWeight: 'bolder' }}>Client:</span>{' '}
                  {projectData.client}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>Git Url:</span>{' '}
                  {projectData.gitURL ? (
                    <a href={projectData.gitURL} target="_blank">
                      CLick here
                    </a>
                  ) : (
                    'Not available'
                  )}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>Demo:</span>{' '}
                  {projectData.gitURL ? (
                    <a href={projectData.url} target="_blank">
                      CLick here
                    </a>
                  ) : (
                    'Not available'
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <>
          <LinearProgress color="secondary" />
          <Typography gutterBottom variant="h5" align="center">
            Opps! something went Wrong <br /> {props.error} <br /> Reload Page
            to try agin
          </Typography>
        </>
      )}
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  const url = 'https://dreamlab-development.firebaseio.com/portfolioData.json';
  const res = await fetch(url);
  const data = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = [];
  for (let key in data) {
    paths.push({
      params: { id: key },
    });
  }
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const url = `https://dreamlab-development.firebaseio.com/portfolioData.json?orderBy="$key"&equalTo="${params.id}"`;
    const res = await fetch(url);
    const data = await res.json();
    const key = Object.keys(data)[0];

    return {
      props: {
        projectData: { id: key, ...data[key] },
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
export default Project;
