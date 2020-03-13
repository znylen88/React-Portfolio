import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Links from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: "#00695D" }} position="static">
                <Toolbar>
                <Links color="inherit" href="https://github.com/znylen88">
                    <GitHubIcon edge="start" className={classes.menuButton} color="inherit">
                    </GitHubIcon>
                    </Links>
                    <Links color="inherit" href="https://www.instagram.com/zachy_d/?hl=en">
                    <InstagramIcon edge="start" className={classes.menuButton} color="inherit">
                    </InstagramIcon>
                    </Links>
                    <Links color="inherit" href="https://www.linkedin.com/in/zachary-nylen-52265b192/">
                    <LinkedInIcon edge="start" className={classes.menuButton} color="inherit">
                    </LinkedInIcon>
                    </Links>
                    <Typography variant="h6" className={classes.title}/>
                    <Link style={{ color: 'white', textDecoration: "none" }} to={"/"}>
                    <HomeIcon color="inherit"/>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Link from '@material-ui/core/Link';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import HomeIcon from '@material-ui/icons/Home';

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }))

// export default function NavBar() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <AppBar style={{ backgroundColor: "#00695D" }} position="static">
//                 <Toolbar>
//                     <Link color="inherit" href="https://github.com/znylen88"><GitHubIcon edge='start' className={classes.menuButton}></GitHubIcon></Link>
//                     <Link color="inherit" href="https://www.instagram.com/zachy_d/?hl=en"><InstagramIcon edge='start' className={classes.menuButton}></InstagramIcon></Link>
//                     <Link color="inherit" href="https://www.linkedin.com/in/zachary-nylen-52265b192/"><LinkedInIcon edge='start' className={classes.menuButton}></LinkedInIcon></Link>
//                     <Link color="inherit" href="https://www.linkedin.com/in/zachary-nylen-52265b192/"><HomeIcon className={classes.title}></HomeIcon></Link>
//                 </Toolbar>
//             </AppBar>
//         </div>

//     )
// }