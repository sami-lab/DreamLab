import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Hidden,
  Avatar,
  Divider,
  Tabs,
  Tab,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Snackbar,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import DevicesIcon from '@material-ui/icons/Devices';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ComputerIcon from '@material-ui/icons/Computer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

import useWebAnimations from '@wellyshen/use-web-animations';
import { bounceInRight, bounceInLeft } from '@wellyshen/use-web-animations';
import ReactRotatingText from 'react-rotating-text';
import Link from '../src/Link';
import ButtonArrow from '../src/UI/ButtonArrow';
import Dialog from '../src/UI/dialog';

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
  IntroSection: {
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
      backgroundAttachment: 'inherit',
    },
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '90vh',
    width: '100%',
  },
  buttonContainer: {
    marginTop: '1em',
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
  learnMoreButton: {
    ...theme.typography.learnButton,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.blue,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  profile: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
  PortfolioButtonGroup: {
    flexGrow: 1,
    maxWidth: 500,
    borderRadius: 40,
    backgroundColor: '#ADB1B8',
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

const Portfolio = (props) => {
  const { ref } = useWebAnimations({
    ...bounceInLeft,
  });
  const { ref: text } = useWebAnimations({
    ...bounceInRight,
  });

  const classes = useStyles();
  const theme = useTheme();
  const [portfolioSelection, setPortfolioSelection] = useState(0);
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

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
  const animationText = [
    "I'm Website developer",
    "I'm Mobile Application developer",
    "I'm Freelancer",
  ];
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

  const divider = (
    <Divider
      style={{
        maxWidth: '20%',
        height: '0.5em',
        backgroundColor: theme.palette.common.blue,
        marginBottom: '1em',
        display: 'block',
        margin: matchesMD ? 'auto' : undefined,
      }}
    />
  );
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
  const error = (
    <Typography gutterBottom variant="h5" width="" align="center">
      Opps something went Wrong <br /> Unable to fetch Data
    </Typography>
  );
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Our Portfolio | DreamLab Development</title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side-rendering, and perfect responsive design | 99% PageSpeed Score "
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the MiddleEast | Portfolio"
          key="og:title"
        />
        <meta property="og:url" content="/portfolio" key="og:url" />
        <link rel="canonical" key="canonical" href="/portfolio" />
      </Head>
      {/* Introduction */}
      <Grid
        item
        container
        direction="column"
        className={[classes.IntroSection, classes.rowContainer].join(' ')}
        justify="center"
        alignItems={matchesSM ? 'center' : undefined}
      >
        <Grid item>
          <Typography
            variant="h1"
            color="primary"
            align={matchesSM ? 'center' : undefined}
          >
            DreamLab Development
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: '0.3em', marginBottom: '0.3em' }}
            align={matchesSM ? 'center' : undefined}
          >
            <ReactRotatingText items={animationText} />
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify={matchesMD ? 'center' : undefined}
          className={classes.buttonContainer}
        >
          <Grid item>
            <Button
              variant="contained"
              onClick={() => props.setValue(4)}
              component={Link}
              href="/contacct"
              className={classes.estimateButton}
            >
              Contact now!
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => props.setValue(3)}
              component={Link}
              href="/about"
              className={classes.learnMoreButton}
            >
              <span style={{ marginRight: 10 }}>About me</span>{' '}
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.white}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* About me */}
      <Grid
        item
        container
        direction="column"
        style={{ marginTop: '2em' }}
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography
            variant="h1"
            style={{ fontFamily: 'Pacifico' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            About me
          </Typography>
          {divider}
          <Typography
            gutterBottom
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ fontWeight: 700, fontStyle: 'italic' }}
            paragraph
          >
            I am able to handle multiple tasks on a daily basis. I am a
            dependable person who is great at time management. I am always
            energetic and eager to learn new skills. I have experience working
            as part of a team and individually. I am flexible in my working
            hours, being able to work in morning time and weekends. I am honest
            and trustworthy. I always try to come up with innovative ideas. I
            delivered all projects in a timely fashion.
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          style={{ marginTop: '2em', marginBottom: '2em' }}
        >
          <Hidden lgUp>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              ref={ref}
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
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item lg={4} ref={ref}>
              <img
                src="/assets/founder1.jpg"
                style={{
                  borderRadius: '10%',
                  maxWidth: matchesMD ? 300 : undefined,
                }}
                alt="Profile"
              />
            </Grid>
          </Hidden>

          <Grid item lg={8} ref={text}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="h2"
                  align={matchesSM ? 'center' : undefined}
                >
                  I am FULLSTACK Web Developer.
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  align={matchesSM ? 'center' : undefined}
                  style={{ fontWeight: 700, fontStyle: 'italic' }}
                  paragraph
                >
                  I provide high Performance responsive websites using Latest
                  Technology stack MERN stack or .net Core. My primary
                  responsibilities include designing user interactions on
                  websites, developing servers and databases for website
                  functionality and coding for mobile platforms.
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 700 }}>
                  My areas of knowledge are:
                </Typography>
              </Grid>
              <Grid item style={{ marginLeft: '1em' }}>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>- IDEs: </span>
                  Visual Studio, Visual Code
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>- Languages: </span>
                  C#, JavaScript, Python
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>- Process: </span>
                  GitHub,Trello,Slack etc
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>- Back end: </span>
                  aspnet Core | NodeJS along with expressJS.
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>- Front end: </span>
                  React or Razor Pages.
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>- UI Designing: </span>
                  Material UI | Bootstap4 | CSS
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>- Database: </span>
                  MS Sql Server | MongoDb
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>
                    - Real Time Features (like Slack chat app):{' '}
                  </span>
                  Socket.io | SignalR
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>- SEO: </span>
                  Google Keyword Planner | NextJS
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>- Mobile Apps: </span>
                  React Native
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontWeight: 'bolder' }}>
                    - Photo editing:{' '}
                  </span>
                  Adobe Photoshop
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Portfolio */}
      <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
        justify="center"
        alignItems={matchesSM ? 'center' : undefined}
      >
        <Grid item>
          <Typography
            variant="h1"
            style={{ fontFamily: 'Pacifico' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Portfolio
          </Typography>
          {divider}
          <Typography
            gutterBottom
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ fontWeight: 700, fontStyle: 'italic' }}
            paragraph
          >
            I have worked on various projects. Some of these projects are my
            institution work that i have done while i am learning Web & Mobile
            Hybrid application Development. Some Projects are for Practice
            Purpose to shine my Portfolio. Visit my{' '}
            <a href="https://github.com/sami-lab" target="_blank">
              Github
            </a>{' '}
            and don't forget to Give Star for my efforts.
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Paper className={classes.PortfolioButtonGroup}>
            <Tabs
              value={portfolioSelection}
              onChange={(event, newValue) => setPortfolioSelection(newValue)}
              variant="fullWidth"
              indicatorColor="primary"
              TabIndicatorProps={{
                style: {
                  height: '0px',
                },
              }}
              textColor="primary"
              aria-label="icon label tabs example"
            >
              <Tab icon={<DevicesIcon fontSize="large" />} label="WEBSITES" />
              <Tab
                icon={<PhoneAndroidIcon fontSize="large" />}
                label="MOBILE APPS"
              />
              <Tab
                icon={<ComputerIcon fontSize="large" />}
                label="CUSTOM SOFTWARE"
              />
            </Tabs>
          </Paper>
        </Grid>
        <Grid
          item
          container
          justify="center"
          style={{ marginTop: '5em', marginBottom: '5em' }}
          spacing={1}
        >
          {props.error
            ? error
            : props.portfolioData
                .filter((project) => project.type === portfolioSelection)
                .map((project) => (
                  <Grid item lg={4} md={4} sm={12} xs={12} key={project.id}>
                    <Card style={{ height: matchesSM ? '100%' : '25em' }}>
                      <CardActionArea
                        component={Link}
                        href="/project/[id]"
                        as={`/project/${project.id}`}
                      >
                        <CardMedia
                          style={{ height: '20em' }}
                          image={project.imageURL[0]}
                          title={project.imageTitle}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" align="center">
                            {project.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
        </Grid>
      </Grid>
      {/* Resume */}
      <Grid
        item
        container
        direction="column"
        style={{ marginTop: '2em' }}
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography
            variant="h1"
            style={{ fontFamily: 'Pacifico' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Resume
          </Typography>
          {divider}
          <Typography
            gutterBottom
            variant="caption"
            align={matchesMD ? 'center' : undefined}
            style={{ fontWeight: 700, marginTop: '0.5em' }}
            component="a"
            download
            href="/assets/Resume.pdf"
            title="SamiResume"
          >
            Download PDF
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            <img src="/assets/cv.jpg" alt="resume" style={{ width: '95vw' }} />
          </Grid>
        </Grid>
      </Grid>
      {/* contact */}
      <Grid
        item
        container
        direction="column"
        style={{ marginTop: '2em', marginBottom: '10em' }}
        className={classes.rowContainer}
      >
        {/* Top Heading  and divider */}
        <Grid item>
          <Typography
            variant="h1"
            style={{ fontFamily: 'Pacifico' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Contact
          </Typography>
          {divider}
          <Typography
            gutterBottom
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ fontWeight: 700, fontStyle: 'italic' }}
            paragraph
          >
            I belongs to City of Light ⚡ Karachi ⚡, The heart of ❤️️ Pakistan
            ❤️️.
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ fontWeight: 700 }}
            paragraph
          >
            I always try to maintain a long term relationship with my clients.
            Whether you are looking to build an app from scratch or maintain
            existing apps, I can step in and take over the project.
            <br />
            My promises are:
            <br /> - Good quality work <br /> - Advises on the right technology
            for your project
            <br /> - Good communication
          </Typography>
        </Grid>
        {/* Main  content */}
        <Grid item container direction={matchesSM ? 'column' : 'row'}>
          {/* contact info*/}
          <Grid item md sm={12}>
            {/* various info sections */}
            <Grid
              container
              direction="column"
              component={Paper}
              elevation={2}
              alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: 'Pacifico',
                    marginTop: matchesSM ? '0.5em' : '0.1em',
                  }}
                  gutterBottom
                  align={matchesMD ? 'center' : undefined}
                >
                  Connect Now
                </Typography>
              </Grid>
              {/* {Location} */}
              <Grid
                item
                style={{
                  marginTop: '2em',
                  width: matchesSM ? '20em' : '25em',
                  marginLeft: !matchesMD ? '3em' : '1em',
                }}
              >
                <Grid container alignItems="center">
                  <Grid item>
                    <LocationOnIcon
                      style={{
                        fontSize: '3em',
                        marginRight: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#9EAEB7',
                        padding: '0.1em',
                      }}
                      color="primary"
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">Location</Typography>
                    <Typography variant="caption">
                      Korangi Crossing, Karachi
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* {Phone} */}
              <Grid
                item
                style={{
                  marginTop: '2em',
                  width: matchesSM ? '20em' : '25em',
                  marginLeft: !matchesMD ? '3em' : '1em',
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  component={'a'}
                  href="tel:03062219739"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Grid item>
                    <PhoneAndroidIcon
                      style={{
                        fontSize: '3em',
                        marginRight: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#FFBA60',
                        padding: '0.1em',
                      }}
                      color="primary"
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">Call</Typography>
                    <Typography variant="caption">+92 3062219739</Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* email*/}
              <Grid
                item
                style={{
                  marginTop: '2em',
                  width: matchesSM ? '20em' : '25em',
                  marginLeft: !matchesMD ? '3em' : '1em',
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  component={'a'}
                  href="mailto: s.m.sami125@gmail.com"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Grid item>
                    <EmailIcon
                      style={{
                        fontSize: '3em',
                        marginRight: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#BF3B2D',
                        padding: '0.1em',
                        color: '#fff',
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">Email</Typography>
                    <Typography variant="caption">
                      s.m.sami125@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* {WhatsApp} */}
              <Grid
                item
                style={{
                  marginTop: '2em',
                  width: matchesSM ? '20em' : '25em',
                  marginLeft: !matchesMD ? '3em' : '1em',
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  component={'a'}
                  href="https://api.whatsapp.com/send?phone=+923062219739"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Grid item>
                    <WhatsAppIcon
                      style={{
                        fontSize: '3em',
                        marginRight: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#5EBA7D',
                        padding: '0.1em',
                        color: '#fff',
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">WhatsApp</Typography>
                    <Typography variant="caption">+92 3062219739</Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* Other Link */}
              <Grid
                item
                container
                style={{
                  marginTop: '2em',
                }}
                alignItems="center"
                justify="center"
              >
                <Grid
                  item
                  component={'a'}
                  href="https://www.facebook.com/m.sami125/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <FacebookIcon
                    style={{
                      fontSize: '2em',
                      marginRight: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      padding: '0.1em',
                    }}
                    color="primary"
                  />
                </Grid>
                <Grid
                  item
                  component={'a'}
                  href="https://www.linkedin.com/in/muhammad-sami-a37601185/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <LinkedInIcon
                    style={{
                      fontSize: '2em',
                      marginRight: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      padding: '0.1em',
                    }}
                    color="primary"
                  />
                </Grid>
                <Grid
                  item
                  component={'a'}
                  href="https://github.com/sami-lab"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <GitHubIcon
                    style={{
                      fontSize: '2em',
                      marginRight: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      padding: '0.1em',
                      color: '#000',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  component={'a'}
                  href="https://twitter.com/s_sami125"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <TwitterIcon
                    style={{
                      fontSize: '2em',
                      marginRight: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      padding: '0.1em',
                    }}
                    color="primary"
                  />
                </Grid>
                <Grid
                  item
                  component={'a'}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.fiverr.com/sameer1234560"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img
                    src="/assets/fiver.svg"
                    style={{
                      width: '2em',
                      height: '2em',
                      marginRight: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      padding: '0.1em',
                      color: '#000',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  component={'a'}
                  href="https://www.upwork.com/o/profiles/users/~011e1ec384a5230ed8/?viewMode=1"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img
                    src="/assets/upwork.svg"
                    style={{
                      width: '2em',
                      height: '2em',
                      marginRight: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      padding: '0.1em',
                      color: '#000',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* contact form */}
          <Grid item md sm={12}>
            <Grid
              container
              direction="column"
              style={{
                marginLeft: matchesSM ? 0 : '2em',
                marginRight: matchesSM ? 0 : '2em',
              }}
              alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: 'Pacifico',
                    marginTop: matchesSM ? '0.5em' : '0.1em',
                  }}
                  gutterBottom
                  align={matchesMD ? 'center' : undefined}
                >
                  Send us Message Now
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  style={{ marginBottom: '0.5em' }}
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  style={{ marginBottom: '0.5em' }}
                  label="Email"
                  id="email"
                  fullWidth
                  value={email}
                  onChange={InputChangeHandler}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
                <TextField
                  style={{ marginBottom: '0.5em' }}
                  label="Phone"
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={InputChangeHandler}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
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
                justify="center"
                style={{ marginTop: '2em' }}
              >
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
      </Grid>
      <Dialog open={modelOpen} setopen={() => setModelOpen(false)}>
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

export async function getServerSideProps() {
  try {
    const url =
      'https://dreamlab-development.firebaseio.com/portfolioData.json';
    const res = await fetch(url);
    const data = await res.json();
    const portfolioData = [];
    for (let key in data) {
      portfolioData.push({
        ...data[key],
        id: key,
      });
    }
    return {
      props: {
        portfolioData,
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
export default Portfolio;
