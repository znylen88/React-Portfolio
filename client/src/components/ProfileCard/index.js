import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function profileCard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ textAlign: "center", margin: "10px" }}>
                <AccountCircleIcon style={{ marginTop: "30px", fontSize: "50px", color: "#636363" }} />
                <h1 style={{ marginTop: "15px" }}>Profile</h1>
                <div style={{ marginTop: "30px", lineHeight: 2 }}>
                &nbsp;&nbsp;Developer with an educational background in both Cultural Anthropology and International Studies, looking to bring my unique skill-set to the web development field. Currently earning my certificate in Full Stack Development from UCSD. I’m eager to begin my career in this field, share my skills with a team and build web-based applications that create memorable experiences for the user.
            </div>
            </div>
        </div>
    );
}