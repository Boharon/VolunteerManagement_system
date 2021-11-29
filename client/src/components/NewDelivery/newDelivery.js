import React from 'react';
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

import Controler from './Controler'

export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`
export const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right: 0;
`;
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
        flexBasis: '33.33%',
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



const NewDelivery = () => {

    const classes = useStyles();
    const paperSytle = { padding: 20,  margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#00BFA6', width: 70, height: 70 };
    const iconStyle = { width: 50, height: 50 };
    const icon2Style = { width: 30, height: 30 };
    const titel = { fontSize: "30px", fontWeight: 'bold' };
    const btstyle = { margin: '8px 0' };
    const grid2Style = { margin: '0 8px' };
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        width: "50%"
    };

    const fieldStyle = {backgroundColor: '#ffffff', margin: '8px 0', width: '25vh' };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };


    const [selectedDate, setSelectedDate] = React.useState(new Date().format);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        
    };

    return (

        <Grid >
            
            <form>
                <Paper elevation={10} style={paperSytle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}><DirectionsRunIcon style={iconStyle} /></Avatar>
                        <h3 style={titel}>Another meaningful delivery is on the way..</h3>
                    </Grid>
                    
                    <h1/>
                    <div className={classes.root}>
                        <Controler/>
                    </div>




                </Paper>
            </form>
        </Grid>

    )
};
export default NewDelivery;


