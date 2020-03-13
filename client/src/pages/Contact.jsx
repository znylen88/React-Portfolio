import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import NavBar from '../components/AppBar/index';
import ContactForm from '../components/ContactForm/index'
import Button from '@material-ui/core/Button';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Zachary Nylen
      </Link>{' '}
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
        backgroundColor: theme.palette.background.paper,
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

export default function Contact() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <main style={{ backgroundColor: "#f7f7f7", height: "auto" }}>
            <div style={{ height: 'calc(120vh)', backgroundImage: `url(/images/background3.jpg)`, backgroundSize: 'cover' }}>
                {/* Hero unit */}
                <Container style={{ width: "80%", textAlign: "center" }}>
                <Card style={{ width: "95%", marginTop: "100px", display: "inline-block", backgroundColor: "#e6e6e6" }}>
                    <div style={{ margin: "20px" }}>
                        <br></br>
                                    <Button style={{ backgroundColor: "#00695D", marginBottom: "20px", fontSize: "12px" }} variant="contained" color="primary">
                                        <ContactPhoneIcon />
                                            &nbsp;&nbsp;503.804.7852
                                    </Button>
                                    <br></br>
                                    <Button style={{ backgroundColor: "#00695D", marginBottom: "20px", fontSize: "10px" }} variant="contained" color="primary">
                                        <EmailIcon />
                                            &nbsp;&nbsp;znylen@gmail.com
                                    </Button>
                    <ContactForm/>
                    <Button style={{ backgroundColor: "#424242", color: "white", width: "50%", height: "50px", marginTop: "25px", marginBottom: "10px" }} variant="contained" >SUBMIT</Button>
                    </div>
                </Card>
                </Container>
                </div>
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
