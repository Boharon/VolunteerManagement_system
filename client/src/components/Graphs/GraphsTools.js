import React, { useState } from 'react';
import {Button, Grid,TextField} from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SendIcon from '@material-ui/icons/Send';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
export default function GraphsTools(props) {
    const icon2Style = {width: 30, height: 30 };
    const titel = { fontSize: "30px", fontWeight: 'bold' };
    const btstyle = { margin: '8px 0' };
    const grid2Style = { color:'#ffffff', margin: '0 8px' };
    const gridStyle = {
      alignItems:'center'

    };
    const fieldStyle = { backgroundColor: '#ffffff',margin: '8px 8px', width: '25vh' };
    const [selectedDate, setSelectedDate] = useState(new Date().format);
    const [selectedCity, setSelectedCity] = useState('');
    const classes = useStyles();
    const [state, setState] = React.useState({
      range: '',
      name: 'hai',
      layOut: ''
    });
    const [ShowCity,setShowCity]=useState(false)
  
    const [DeliveryDone,setDeliveryDone]=useState(props.DeliveryDone)
    const [DeliveryNotDone,setDeliveryNotDone]=useState(props.DeliveryNotDone)

    const handleChangelayOut = (event) => {
     // const name = event.target.name;
      setState({
        ...state,
        layOut: event.target.value,
      });
      console.log(event.target.value)
      if(event.target.value==1)
        setShowCity(true)
        else
        setShowCity(false)
    };
    const handleChangeRange = (event) => {
        //const name = event.target.name;
        setState({
          ...state,
          range: event.target.value,
        });
      };
    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date)
    };
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };
    const getDelivery = () => {
        //range: 0=daily,1=weekly,2=monthly
        //layOut: 0=nationally 1=locally
        console.log("hi");
        console.log(state.range);
        console.log(state.layOut);
        switch (state.range)
        {
            case '0':
                switch (state.layOut) {
                    case '0':
                        console.log("hi2");
                        setDeliveryDone(props.getByDateDone(selectedDate));
                        setDeliveryNotDone(props.getByDateNotDone(selectedDate));
                    break;
                    case '1':
                        setDeliveryDone(props.getByCityByDayDone(selectedDate,selectedCity));
                        setDeliveryNotDone(props.getByCityByDayNotDone(selectedDate,selectedCity));
                    break;
                }
            break;
            case '1':
                switch (state.layOut) {
                    case '0':
                        setDeliveryDone(props.getByDateDoneWeekly(selectedDate,selectedDate+7));
                        setDeliveryNotDone(props.getByDateNotDoneWeekly(selectedDate,selectedDate+7));
                    break;
                    case '1':
                        setDeliveryDone(props.getByCityByDayDoneWeekly(selectedDate,selectedDate+7, selectedCity));
                        setDeliveryNotDone(props.getByCityByDayNotDoneWeekly(selectedDate,selectedDate+7,selectedCity));
                    break;
                }
            break;
            case '2':
                switch (state.layOut) {
                    case '0':
                        setDeliveryDone(props.getByDateDoneMonth(selectedDate));
                        setDeliveryNotDone(props.getByDateNotDoneMonth(selectedDate));
                      break;
                    case '1':
                        setDeliveryDone(props.getByCityByDayDoneMonth(selectedDate,selectedCity));
                        setDeliveryNotDone(props.getByCityByDayNotDoneMonth(selectedDate,selectedCity));
                      break;
                }
              break;
        }
    };


    return (

        <Grid container style={gridStyle} align="center">
              <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Choose</InputLabel>
        <Select
          native
          value={state.range}
          onChange={handleChangeRange}
          inputProps={{
            name: 'range',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={0}>Daily</option>
          <option value={1}>Weekly</option>
          <option value={2}>Monthly</option>
        </Select>
      </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Choose</InputLabel>
        <Select
          native
          value={state.layOut}
          onChange={handleChangelayOut}
          inputProps={{
            name: 'layOut',
            id: 'layOut-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={0}>Nationally</option>
          <option value={1}>locally</option>
        </Select>
      </FormControl>        
            {ShowCity?<TextField variant="outlined" onChange={handleCityChange} value={selectedCity} style={fieldStyle} label='Enter a city' placeholder='Enter a city' fullWidth required />:null}
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
            <Button style={btstyle} onClick={getDelivery} ><SendIcon style={icon2Style} /></Button>
        </Grid>
    )
}