import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ButtonArrow from '../src/UI/ButtonArrow';
import Dialog from '../src/UI/dialog';
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
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
    },
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
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: '1em',
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginButtom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '3em',
    borderRadius: 5,
  },
  SendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.common.light,
    },
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [message, setMessage] = useState('');

  const [modelOpen, setModelOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });
  const InputChangeHandler = (e) => {
    let valid;
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm.test(
          e.target.value
        );
        if (!valid) {
          setEmailHelper('Ïnvalid Email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!valid) {
          setPhoneHelper('Ïnvalid Phone number');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };

  const submitFormHandler = () => {
    setLoading(true);
    // const url = '/sendMail';
    const url = '/api/sendmail';
    const contactData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    axios
      .post(url, contactData)
      .then((data) => {
        const { status } = data.data;
        if (status === 'success') {
          setLoading(false);
          setModelOpen(false);
          setName('');
          setEmail('');
          setEmailHelper('');
          setPhone('');
          setPhoneHelper('');
          setMessage('');
          setOpenAlert({
            open: true,
            message: 'Message Sent Successfully',
            backgroundColor: '#4BB543',
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        setOpenAlert({
          open: true,
          message: 'Something Went wrong! Please try Again',
          backgroundColor: '#ff3232',
        });
      });
  };
  const buttonContent = (
    <React.Fragment>
      {' '}
      Send Message{' '}
      <img
        src="/assets/send.svg"
        alt="aeroplane"
        style={{ marginLeft: '1em' }}
      />
    </React.Fragment>
  );
  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us | DreamLab Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the MiddleEast | Contact Us"
          key="og:title"
        />
        <meta property="og:url" content="/contact" key="og:url" />
        <link rel="canonical" key="canonical" href="/contact" />
      </Head>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                variant="h1"
                align={matchesMD ? 'center' : undefined}
                gutterBottom
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We’re waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="phone"
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href="tel:03062219739"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    03062219739
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="envelop"
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href="mailto: s.m.sami125@gmail.com"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {' '}
                    s.m.sami125@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: '20em' }}
            >
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  value={email}
                  onChange={InputChangeHandler}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Phone"
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={InputChangeHandler}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: matchesXS ? '100%' : '20em' }}>
              <TextField
                multiline
                rows={10}
                fullWidth
                InputProps={{ disableUnderline: true }}
                placeholder="Hello! We have an idea that we’d just love to share."
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={classes.message}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: '2em' }}>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                variant="contained"
                className={classes.SendButton}
                onClick={() => setModelOpen(true)}
              >
                {buttonContent}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        lg={8}
        xl={9}
        alignItems="center"
        justify={matchesMD ? 'center' : undefined}
        className={classes.background}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h1" align={matchesMD ? 'center' : undefined}>
                Simple Software. <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? 'center' : undefined}
                style={{ fontSize: '1.5rem' }}
              >
                Take advantage of the 21st century.
              </Typography>

              <Grid container item justify={matchesMD ? 'center' : undefined}>
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
            onClick={() => props.setValue(5)}
            component={Link}
            href="/estimate"
            className={classes.estimateButton}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog open={modelOpen} setopen={setModelOpen}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Confirm Message
            </Typography>
          </Grid>
          <Grid item container direction="column" style={{ width: '20em' }}>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Email"
                id="email"
                fullWidth
                value={email}
                onChange={InputChangeHandler}
                error={emailHelper.length !== 0}
                helperText={emailHelper}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Phone"
                id="phone"
                fullWidth
                value={phone}
                onChange={InputChangeHandler}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
              />
            </Grid>
          </Grid>
          <Grid item style={{ width: matchesSM ? '100%' : '20em' }}>
            <TextField
              multiline
              rows={matchesSM ? 3 : 5}
              fullWidth
              InputProps={{ disableUnderline: true }}
              placeholder="Hello! We have an idea that we’d just love to share."
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={classes.message}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? 'column' : 'row'}
            style={{ marginTop: '2em' }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setModelOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                variant="contained"
                className={classes.SendButton}
                onClick={submitFormHandler}
              >
                {loading ? <CircularProgress size={30} /> : buttonContent}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
      <Snackbar
        open={openAlert.open}
        message={openAlert.message}
        ContentProps={{ style: { backgroundColor: openAlert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setOpenAlert({ ...openAlert, open: false })}
        autoHideDuration={4000}
      />
    </Grid>
  );
};

export default Contact;
