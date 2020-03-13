import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';

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

export default function skillsCard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ textAlign: "center", margin: "10px" }}>
                <SettingsIcon style={{ marginTop: "30px", fontSize: "50px", color: "#636363" }} />
                <h1 style={{ marginTop: "15px" }}>Skills</h1>
                <div style={{ marginTop: "30px", lineHeight: 2 }}>
                &nbsp;&nbsp;Experienced in HTML5, CSS3, Bootstrap, Google Materialize,
                    JavaScript, ES6, jQuery, NodeJS, ExpressJS, HandlebarsJS, MySQL, Sequelize, ReactJS, PassportJS, MongoDB, Mongoose, 
                    Git, Heroku, Material UI,
                    and responsive web design.
            </div>
            </div>
        </div>
    );
}