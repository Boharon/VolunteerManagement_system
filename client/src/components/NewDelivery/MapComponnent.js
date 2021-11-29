
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

import styled from 'styled-components'
import Svg3 from '../images/svg-3.svg';

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
        flexBasis: '100%',
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

export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`
export const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right: 0;
`;



export default function SelectAdultComponnent(props) {
    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
            >
                <div className={classes.column}>
                    <Typography className={classes.heading}>Map</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div>
                    <ImgWrap>
                        <Img src={props.mapURL} />
                    </ImgWrap>
                </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
                <Button size="small" color="primary" onClick={props.saveDelivery}>
                    Save
                </Button>
            </AccordionActions>
        </Accordion>
    )
}

