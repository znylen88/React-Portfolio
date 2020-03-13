import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function ContactForm() {
    const classes = useStyles();

    return (
        <div>
        <div className={classes.root}>
                <TextField
                    id="first-name"
                    label="Required"
                    style={{ margin: 8 }}
                    placeholder="First Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="first-name"
                    label="Required"
                    style={{ margin: 8 }}
                    placeholder="Last Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                
                <TextField
                    id="email"
                    label="Required"
                    style={{ margin: 8 }}
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="message"
                    label="Required"
                    style={{ margin: 8 }}
                    placeholder="Message"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                </div>
        </div>
    );
}