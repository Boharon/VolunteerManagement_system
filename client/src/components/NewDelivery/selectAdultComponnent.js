
import React, { useState } from 'react';
import Axios from 'axios';
import { Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SendIcon from '@material-ui/icons/Send';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '50%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));





export default function SelectAdultComponnent(props)
{
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const handleAdd = (item)=>() => {
        props.addAdult(item);
        console.info('You clicked the delete icon. '+item.a);
    };
    const handleRemove = (item)=>() => {
        props.removeAdult(item);
        console.info('You clicked the delete icon. '+item.a);
    };
    const classes = useStyles();
    return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Adult</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>Select adult</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <div className={classes.column}>
                        {props.adults.map(item =><Chip
                            icon={<FaceIcon />}
                            label={item.id+"\n"+item.firstName}
                            clickable
                            onClick={handleAdd(item)}
                            onDelete={handleAdd(item)}
                            deleteIcon={<DoneIcon />}
                            variant="outlined"
                        />)}
                    </div>
                    <div className={classes.column}>
                    {props.selectAdults.map(item =><Chip
                            icon={<FaceIcon />}
                            label={item.id+"\n"+item.firstName}
                            clickable
                            onClick={handleRemove(item)}
                            onDelete={handleRemove(item)}
                        />)}
                    </div>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <Button onClick={props.saveAdult} size="small" color="primary">
                        Save
                    </Button>
                </AccordionActions>
            </Accordion>
    )
}

