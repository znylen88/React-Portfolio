import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Links from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Portfolio from '../projectCards';
import LaunchIcon from '@material-ui/icons/Launch';
import CodeIcon from '@material-ui/icons/Code';
import SkillsGrid from '../components/SkillsGrid/index';
import NavBar from '../components/AppBar/index';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Links color="inherit" href="https://github.com/znylen88">
                Zachary Nylen
      </Links>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function HomePage() {
    const classes = useStyles();

    const [projects, setProjects] = useState(Portfolio)

    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <main style={{ backgroundColor: "#f7f7f7" }}>
                {/* Hero unit */}
                <div style={{ height: 'calc(90vh)', backgroundImage: `url(/images/background1.jpg)`, backgroundSize: 'cover' }}>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography style={{ marginTop: "-30px"}} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Zachary Nylen
            </Typography>
                        <Typography style={{ color: "white", fontWeight: "lighter" }} variant="h5" align="center" paragraph>
                            <LocationOnIcon />&nbsp;San Diego, CA
            </Typography>
                        <Typography align="center" style={{ marginTop: "30px" }}><img src="https://zacharynylen.herokuapp.com/images/profile.JPG" style={{ width: "150px", height: "150px", borderRadius: "50%" }}></img>
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button style={{ backgroundColor: "#00695D" }} variant="contained" color="primary">
                                        <EmailIcon />
                                        <Link style={{ color: 'white', textDecoration: "none" }} to={"/contact"}>
                                            &nbsp;&nbsp;Contact
                                            </Link>
                                    </Button>
                                </Grid>
                                <Grid item>
                                <Links href="/resume/Resume.pdf">
                                    <Button style={{ backgroundColor: "#00695D" }} variant="contained" color="primary">
                                        <PictureAsPdfIcon />&nbsp;&nbsp;Resume
                </Button>
                </Links>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                </div>
                <Container style={{ marginTop: "20px" }}>
                    <SkillsGrid />
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {projects.map(result => (
                            <Grid item key={result} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={result.image}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {result.name}
                                        </Typography>
                                        <Typography>
                                            {result.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Links href={result.githubLink}>
                                            <CodeIcon size="small" style={{ color: "#00695D" }} />
                                        </Links>
                                        <Links href={result.deployed}>
                                            <LaunchIcon size="small" style={{ color: "#00695D" }} />
                                        </Links>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer} style={{ backgroundColor: "#00695D" }}>
                <Typography style={{ color: "white" }} variant="subtitle1" align="center" component="p">
                    "It's not that we use technology, we live technology." - Godfrey Reggio
        </Typography>
                <br></br>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
