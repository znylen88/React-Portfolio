import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles(theme => ({
    root: {
        width: "auto" + theme.spacing(3),
    },
    margin: {
        height: theme.spacing(3),
    },
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
    {
        value: 0,
    },
    {
        value: 100,
    },
];

const IOSSlider = withStyles({
    root: {
        color: '#2b4e7e',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -7,
        marginLeft: -14,
        '&:focus,&:hover,&$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 15px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 8,
    },
    rail: {
        height: 8,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 0,
        width: 2,
        marginTop: -4,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);

export default function CustomizedSlider() {
    const classes = useStyles();

    return (
        <Container>
            <div style={{ textAlign: "center", margin: "10px" }}>
            <AssessmentIcon style={{ marginTop: "30px", fontSize: "50px", color: "#636363" }}/>
        <div className={classes.root}>
            <div className={classes.margin} />
            <Typography gutterBottom><strong>HTML5</strong></Typography>
            <IOSSlider aria-label="ios slider" defaultValue={90} marks={marks} valueLabelDisplay="on" />
            <div className={classes.margin} />
            <Typography gutterBottom><strong>CSS3</strong></Typography>
            <IOSSlider aria-label="ios slider" defaultValue={90} marks={marks} valueLabelDisplay="on" />
            <div className={classes.margin} />
            <Typography gutterBottom><strong>JAVASCRIPT</strong></Typography>
            <IOSSlider aria-label="ios slider" defaultValue={75} marks={marks} valueLabelDisplay="on" />
            <div className={classes.margin} />
            <Typography gutterBottom><strong>REACT</strong></Typography>
            <IOSSlider aria-label="ios slider" defaultValue={80} marks={marks} valueLabelDisplay="on" />
            <div className={classes.margin} />
        </div>
        </div>
        </Container>
    );
}