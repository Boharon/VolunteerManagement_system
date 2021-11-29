import React, { useState } from 'react';
import {Button, Grid,TextField} from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SendIcon from '@material-ui/icons/Send';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';


export default function SelectDateAndCityComponnent(props) {
    const icon2Style = {width: 30, height: 30 };
    const titel = { fontSize: "30px", fontWeight: 'bold' };
    const btstyle = { margin: '8px 0' };
    const grid2Style = { margin: '0 8px' };
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        width: "100%"
    };
    const fieldStyle = { backgroundColor: '#ffffff',margin: '8px 0', width: '25vh' };
    const [selectedDate, setSelectedDate] = useState(new Date().format);
    const [selectedCity, setSelectedCity] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date)
        props.setDate(date); 
    };
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };
    const getAdultByCity = () => {
        props.getAllAdultsByCity(selectedCity); 
    };


    return (

        <Grid container style={gridStyle} align="center">
            <TextField variant="outlined" onChange={handleCityChange} value={selectedCity} style={fieldStyle} label='Enter a city' placeholder='Enter a city' fullWidth required />
            <Button style={btstyle} onClick={getAdultByCity} ><SendIcon style={icon2Style} /></Button>
            <MuiPickersUtilsProvider style={fieldStyle} utils={DateFnsUtils}>
                <KeyboardDatePicker
                style={fieldStyle}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </Grid>
    )
}