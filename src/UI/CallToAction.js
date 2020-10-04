import React from 'react';

import { Typography, Grid, Button, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ButtonArrow from './ButtonArrow';
import Link from '../Link';

const useStyle = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginButtom: '2em',
    },
  },
  background: {
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
      backgroundAttachment: 'inherit',
    },
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    width: 205,
    height: 80,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: '1em',
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const CallToAction = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
      justify={matchesSM ? 'center' : 'space-between'}
      alignItems="center"
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="h1"
              style={{ lineHeight: matchesSM ? 1.1 : null }}
              gutterBottom
            >
              Simple Software. <br />
              {matchesSM && <br />} Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ fontSize: matchesSM ? '1.25' : '1.5rem' }}
            >
              Take advantage of the 21st century.
            </Typography>
            <Grid container item justify={matchesSM ? 'center' : undefined}>
              <Button
                variant="outlined"
                onClick={() => props.setValue(2)}
                component={Link}
                href="/revolution"
                className={classes.learnButton}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>{' '}
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => props.setValue(6)}
          component={Link}
          href="/estimate"
          className={classes.estimateButton}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
