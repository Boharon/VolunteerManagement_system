import React,{ useState } from 'react';
import Axios from 'axios';
import { Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import 'date-fns';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

import styled from 'styled-components'
import BarChart from './BarChart';
import PieChart from './PieChart';
import GraphsTools from './GraphsTools';

export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`
export const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right: 0;
`;



const GraphsController = () => {
    const paperSytle = { padding: 20,width: '600px', height: '100%' ,  margin: "20px auto" };
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

    const [CountDeliveryDone,setCountDeliveryDone]=useState(0)
    const [CountDeliveryNotDone,setCountDeliveryNotDone]=useState(0)

    const fieldStyle = {backgroundColor: '#ffffff', margin: '8px 0', width: '25vh' };

    const [selectedDate, setSelectedDate] = React.useState(new Date().format);

    const [DeliveryDone,setDeliveryDone]=useState([])
    const [DeliveryNotDone,setDeliveryNotDone]=useState([])

    const getByDateDone=(date)=>{
        Axios.post('http://localhost:3333/graphs/getByDateDone',{date:date}).
        then(res=>{
            setDeliveryDone(res.data)
            setCountDeliveryDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByDateNotDone=(date)=>{
        Axios.post('http://localhost:3333/graphs/getByDateNotDone',{date:date}).
        then(res=>{
            setDeliveryNotDone(res.data)
            setCountDeliveryNotDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByCityByDayDone=(date,city)=>{
        Axios.post('http://localhost:3333/graphs/getByCityByDayDone',{date:date,city:city}).
        then(res=>{
            setDeliveryDone(res.data)
            setCountDeliveryDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByCityByDayNotDone=(date,city)=>{
        Axios.post('http://localhost:3333/graphs/getByCityByDayNotDone',{date:date,city:city}).
        then(res=>{
            setDeliveryNotDone(res.data)
            setCountDeliveryNotDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByDateDoneWeekly=(date,date7)=>{
        Axios.post('http://localhost:3333/graphs/getByDateDoneWeekly',{date:date,date7:date7}).
        then(res=>{
            setDeliveryDone(res.data)
            setCountDeliveryDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByDateNotDoneWeekly=(date,date7)=>{
        Axios.post('http://localhost:3333/graphs/getByDateNotDoneWeekly',{date:date,date7:date7}).
        then(res=>{
            setDeliveryNotDone(res.data)
            setCountDeliveryNotDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByCityByDayDoneWeekly=(date,date7)=>{
        Axios.post('http://localhost:3333/graphs/getByCityByDayDoneWeekly',{date:date,date7:date7}).
        then(res=>{
            setDeliveryDone(res.data)
            setCountDeliveryDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByCityByDayNotDoneWeekly=(date,date7)=>{
        Axios.post('http://localhost:3333/graphs/getByCityByDayNotDoneWeekly',{date:date,date7:date7}).
        then(res=>{
            setDeliveryNotDone(res.data)
            setCountDeliveryNotDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByDateDoneMonth=(date)=>{
        Axios.post('http://localhost:3333/graphs/getByDateDoneMonth',{date:date}).
        then(res=>{
            setDeliveryDone(res.data)
            setCountDeliveryDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByDateNotDoneMonth=(date)=>{
        Axios.post('http://localhost:3333/graphs/getByDateNotDoneMonth',{date:date}).
        then(res=>{
            setDeliveryNotDone(res.data)
            setCountDeliveryNotDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByCityByDayDoneMonth=(date,city)=>{
        Axios.post('http://localhost:3333/graphs/getByCityByDayDoneMonth',{date:date,city:city}).
        then(res=>{
            setDeliveryDone(res.data)
            setCountDeliveryDone(res.data.length)
            console.log(res.data)
    });
    }
    const getByCityByDayNotDoneMonth=(date,city)=>{
        Axios.post('http://localhost:3333/graphs/getByCityByDayNotDoneMonth',{date:date,city:city}).
        then(res=>{
            setDeliveryNotDone(res.data)
            setCountDeliveryNotDone(res.data.length)
            console.log(res.data)
    });
    }


    return (

        <Grid >
            
            <form>
                <Paper elevation={10} style={paperSytle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}><DirectionsRunIcon style={iconStyle} /></Avatar>
                        <h3 style={titel}>Planned VS Done statistics Graphs</h3>
                        <GraphsTools DeliveryDone={DeliveryDone} DeliveryNotDone={DeliveryNotDone} getByDateDone={getByDateDone}
                                     getByDateNotDone={getByDateNotDone}
                                     getByCityByDayDone={getByCityByDayDone}
                                     getByCityByDayNotDone={getByCityByDayNotDone}
                                    getByDateDoneWeekly={getByDateDoneWeekly}
                                    getByDateNotDoneWeekly={getByDateNotDoneWeekly}
                                    getByCityByDayDoneWeekly={getByCityByDayDoneWeekly}
                                    getByCityByDayNotDoneWeekly={getByCityByDayNotDoneWeekly}
                                    getByDateDoneMonth={getByDateDoneMonth}
                                    getByDateNotDoneMonth={getByDateNotDoneMonth}
                                    getByCityByDayDoneMonth={getByCityByDayDoneMonth}
                                    getByCityByDayNotDoneMonth={getByCityByDayNotDoneMonth}
                                    />
                        <PieChart CountDeliveryDone={CountDeliveryDone} CountDeliveryNotDone={CountDeliveryNotDone}/>
                      <BarChart CountDeliveryDone={CountDeliveryDone} CountDeliveryNotDone={CountDeliveryNotDone}/>
                    </Grid>
                </Paper>
            </form>
        </Grid>

    )
};
export default GraphsController;


