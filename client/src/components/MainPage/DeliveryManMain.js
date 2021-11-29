import React,{useState,Component} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import DeliveryList from './DeliveryList'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Axios from 'axios';
import styled from 'styled-components'
import Moment from 'moment';
Moment.locale('iw-IL');

    const paperSytle = { padding: 20,  height: '100%', width: 640, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#00BFA6', width: 70, height: 70 };
    const iconStyle = { width: 50, height: 50 };
    const titel = { fontSize: "30px", fontWeight: 'bold' };
    const titel2 = { fontSize: "28px" };
    const btstyle = { margin: '20px 0' };
    const BtnSubmit = styled.button`
    border-radius: 50px;
    background: #00BFA6;
    white-space: nowrap;
    padding: 10px 50px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    `
    
const ImgWrap = styled.div`
max-width:555px;
height:100%;
`
 const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right: 0;
`;

export default class DeliveryManMain extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onIsDoneChange=this.onIsDoneChange.bind(this);

        this.state = {
            deliverys: [],
            imgUrl:"",
            selectedDate:new Date().format
        }
    }
    componentDidMount() {
        Axios.post('http://localhost:3333/delivery/fetchAllDeliveryByDate',{date:this.state.selectedDate}).
            then(res => {
              //  console.log(res.data.adults)
                this.setState({
                    deliverys: res.data
                });
                Axios.post('http://localhost:3333/tools/getMapDeliveryMan',{deliveries:this.state.deliverys}).
                then(res => {
                    console.log(res.data);
                    this.setState({
                        imgUrl:res.data
                    });
                }
                );
            }
            );
    }
    componentDidUpdate()
    {
      /*  Axios.post('http://localhost:3333/delivery/fetchAllDeliveryByDate',{date:this.state.selectedDate}).
        then(res => {
            this.setState({
                deliverys:res.data
            });
        }
        
        );*/
    }
    onChangeDate(date) {
        this.setState({
            selectedDate: date
        });
        console.log(date)
        Axios.post('http://localhost:3333/delivery/fetchAllDeliveryByDate',{date:date}).
        then(res => {
            this.setState({
                deliverys:res.data
            });
            Axios.post('http://localhost:3333/tools/getMapDeliveryMan',{deliveries:this.state.deliverys}).
            then(res => {
                console.log(res.data);
                this.setState({
                    imgUrl:res.data
                });
            }
            );
        }
        );
        
        
    }
    onIsDoneChange(deliveryId,deliveryIsDone)
    {
        Axios.post('http://localhost:3333/delivery/onIsDoneChange',{id:deliveryId,isDone:deliveryIsDone}).
        then(res => {
            console.log(res);
            this.setState({
            //    deliverys:res.data
            });    
            Axios.post('http://localhost:3333/tools/getMapDeliveryMan',{deliveries:this.state.deliverys}).
            then(res => {
                console.log(res.data);
                this.setState({
                    imgUrl:res.data
                });
            }
            );
        }
        
        );
    }
    render() {
        console.log(this.state.deliverys);  
        return (
        <Grid>
            <Paper elevation={10} style={paperSytle}>
            <Grid align="center">
                        <Avatar style={avatarStyle}><PlaylistAddCheckIcon style={iconStyle} /></Avatar>
                        <h3 style={titel}>Life is Short. Do Stuff that Matters</h3>
                    </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Please select a date"
                        value={this.state.selectedDate}
                        onChange={this.onChangeDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Grid container direction="row" align="center">
                    <h3 style={titel2} title>Here is your delivery list for&nbsp;</h3>
                    <h3 style={titel2}>{Moment(this.state.selectedDate).format('DD/MM/YYYY')}:</h3>
                </Grid>
                {  
  
                   this.state.deliverys.map(item=> <DeliveryList firstName={item.adult.firstName} lastName={item.adult.lastName} street={item.adult.street} buildingNumber={item.adult.buildingNumber} city={item.adult.city} id={item.index} isDone={item.isDone} onIsDoneChange={this.onIsDoneChange}/>)
                }
                <div>
                    <ImgWrap>
                        <Img src={this.state.imgUrl} />
                    </ImgWrap>
                </div>
             
            </Paper>
        </Grid>
    )
}
}