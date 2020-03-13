import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '../SkillsSlider';
import Skills from '../SkillsCard';
import Profile from '../ProfileCard';

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

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid xs={12} sm={12} md={4}>
                    <Profile className={classes.paper} />
                </Grid>
                <Grid xs={12} sm={12} md={4}>
                    <Slider className={classes.paper} />
                </Grid>
                <Grid xs={12} sm={12} md={4}>
                    <Skills className={classes.paper} />
                </Grid>
            </Grid>
        </div>
    );
}