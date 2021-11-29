import React, { Component } from 'react';
import { Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components'

import Axios from 'axios';

const paperSytle = {  backgroundColor: '#010606' ,padding: 20, height: 530, width: 600, margin: "20px auto" };
const avatarStyle = { backgroundColor: '#00BFA6', width: 70, height: 70 };
const iconStyle = { width: 50, height: 50 };
const titel = { color: '#ffffff' , fontSize: "26px", fontWeight: 'bold' };
const titel2 = { color: '#ffffff', fontSize: "15px" };
const btstyle = { margin: '8px 0' };
const grid2Style = { margin: '0 8px' };
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignContent: 'space-evenly',
};
const fieldStyle = { backgroundColor: '#ffffff' ,padding: '2', margin: '8px 0' };
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


export default class NewAdult extends Component {
    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeBuildingNumber = this.onChangeBuildingNumber.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeMedicine = this.onChangeMedicine.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeIsActive = this.onChangeIsActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            street: '',
            buildingNumber: '',
            city: '',
            food: false,
            medicine: false,
            isActive: true,
            adults: [],
            cities:[],
            streets:[],
            streetItem:''
        }
    }
    componentDidUpdate()
    {
       /* const city=this.state.city;
        Axios.post('http://localhost:3333/address/getStreetsByCity',{city:this.state.city}).
        then(res=>{
            this.setState({
                streets:res.data,
                streetItem:
                (this.state.streets).map((item,index)=>
                (<MenuItem key={index} value={item}>{item}</MenuItem>))
        });}
        );*/
    }
    componentDidMount() {
      /*  this.setState({});
        Axios.post('http://localhost:3333/address/fetchAllAddress').
        then(res=>{
            this.setState({
                cities:res.data 
        });}
        );*/

    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        });
    }
    onChangeStreet(e) {
        this.setState({
            street: e.target.value
        });
    }
    onChangeBuildingNumber(e) {
        this.setState({
            buildingNumber: e.target.value
        });
    }
    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
        
    }
    onChangeFood(e) {
        this.setState({
            food: e.target.checked
        });
    }
    onChangeMedicine(e) {
        this.setState({
            medicine: e.target.checked
        });
    }
    onChangeIsActive(e) {
        this.setState({
            isActive: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('hi')
        const adult = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            street: this.state.street,
            buildingNumber: this.state.buildingNumber,
            city: this.state.city,
            food: this.state.food,
            medicine: this.state.medicine,
            isActive: this.state.isActive,
        }
        console.log(adult);
        Axios.post('http://localhost:3333/adult/addadult',adult).
        then(res=>{console.log(res.data);
            this.setState({
                id: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                street: '',
                buildingNumber: '',
                city: '',
                food: false,
                medicine: false,
                isActive: true,
                adults: [],
                cities:[],
                streets:[],
                streetItem:''
            });
        }

        );
    }

    render() {
        /*const cityItem=
            (this.state.cities).map((item,index)=>
            (<MenuItem key={index} value={item}>{item}</MenuItem>));*/
       
        return (

            <Grid >
                <form onSubmit={this.onSubmit}>
                <Paper elevation={10} style={paperSytle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}><AccessibilityNewIcon style={iconStyle} /></Avatar>
                        <h3 style={titel}>Fill in small details - For a big change</h3>
                    </Grid>
                    <Grid container style={gridStyle} align="center" spacing={3}>
                        <Grid item xs={12} >
                            <TextField id='id' variant="outlined" style={fieldStyle} label='ID' placeholder='Enter id' fullWidth required
                            value={this.state.id} onChange={this.onChangeId} />
                            <TextField id='firstName' variant="outlined" style={fieldStyle} label='First Name' placeholder='Enter First Name' fullWidth required
                            value={this.state.firstName} onChange={this.onChangeFirstName} />
                            <TextField id='lastName' variant="outlined" style={fieldStyle} label='Last Name' placeholder='Enter Last Name' fullWidth required
                            value={this.state.lastName} onChange={this.onChangeLastName} />
                            <TextField id='phoneNumber' variant="outlined" style={fieldStyle} label='Phone number' placeholder='Enter Phone number' fullWidth required
                            value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField style={fieldStyle} id="street" variant="outlined" label='Street' placeholder='Enter street name' fullWidth required
                            value={this.state.street} onChange={this.onChangeStreet} />
                            <TextField style={fieldStyle} id="buildingNumber" variant="outlined" label='Number' placeholder='Enter building number' fullWidth required
                            value={this.state.buildingNumber} onChange={this.onChangeBuildingNumber} />
                            <TextField style={fieldStyle} id="city" variant="outlined" label='City' placeholder='Enter city name' fullWidth required
                            value={this.state.city} onChange={this.onChangeCity} />
                            <h3 style={titel2}>Let us know what u need</h3>
                            <Grid style={grid2Style} align="center">
                                <FormControlLabel style={{color: '#ffffff'}}
                                    control={<Checkbox style={{color: '#ffffff'}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                    label="food"
                                    value={this.state.food}
                                    onChange={this.onChangeFood}
                                />
                                <FormControlLabel style={{color: '#ffffff'}}
                                    control={<Checkbox style={{color: '#ffffff'}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" 
                                    value={this.state.medicine} onClick={this.onChangeMedicine} />}
                                    label="medicine"
                                    
                                />
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid align="center">
                    <BtnSubmit type='submit' style={btstyle} variant='contained' fullWidth>Save</BtnSubmit>
                    </Grid>
                </Paper>
                </form>
            </Grid>
        );
    }
}
