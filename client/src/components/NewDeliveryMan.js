import React, { Component } from 'react';
import { Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Axios from 'axios';
import styled from 'styled-components'


const paperSytle = { backgroundColor: '#010606', padding: 20, height: '66vh', width: 600, margin: "20px auto" };
const avatarStyle = { backgroundColor: '#00BFA6', width: 70, height: 70 };
const iconStyle = { width: 50, height: 50 };
const titel = { color: '#ffffff' , fontSize: "36px", fontWeight: 'bold' };
const btstyle = { margin: '8px 0' };
const grid2Style = { margin: '0 8px' };
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignContent: 'space-evenly',
};
const fieldStyle = {backgroundColor: '#ffffff', padding: '2', margin: '8px 0' };
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

export default class NewDeliveryMan extends Component
{
    constructor(props){
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeIsActive = this.onChangeIsActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            isActive: true,
            deliveryMans: []
        }
    }  
    componentDidMount() {
        this.setState({});
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
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeIsActive(e) {
        this.setState({
            isActive: e.target.checked
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('hi')
        const deliveryMan = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            password: this.state.password,
            isActive: this.state.isActive,
        }
        console.log(deliveryMan);
        Axios.post('http://localhost:3333/deliveryMan/addDeliveryMan',deliveryMan).
        then(res=>{console.log(res.data);
            this.setState({
                id: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                password: '',
                isActive: true,
                deliveryMans: []
            })
        }
            );
    }
    render() {

//const NewDeliveryMan = () => {

    return (

        <Grid >
            <form onSubmit={this.onSubmit}>
                <Paper elevation={10} style={paperSytle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}><EmojiPeopleIcon style={iconStyle} /></Avatar>
                        <h3 style={titel}>Join to be part of our community</h3>
                    </Grid>
                    <Grid container style={gridStyle} align="center" spacing={3}>
                        <Grid item xs={12} >
                            <TextField variant="outlined" style={fieldStyle} label='ID' placeholder='Enter id' fullWidth required
                             value={this.state.id} onChange={this.onChangeId} />
                            <TextField variant="outlined" style={fieldStyle} label='First Name' placeholder='Enter first name' fullWidth required
                                value={this.state.firstName} onChange={this.onChangeFirstName} />
                            <TextField variant="outlined" style={fieldStyle} label='Last Name' placeholder='Enter last name' fullWidth required
                               value={this.state.lastName} onChange={this.onChangeLastName} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField variant="outlined" style={fieldStyle} label='Phone number' placeholder='Enter phone number' fullWidth required
                             value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} />
                            <TextField variant="outlined" style={fieldStyle} label='Email' placeholder='Enter eamil' fullWidth required
                             value={this.state.email} autocomplete="off" onChange={this.onChangeEmail} />
                            <TextField variant="outlined" style={fieldStyle} label='Password' placeholder='Enter password' type='password' fullWidth required
                            value={this.state.password} autocomplete="off" onChange={this.onChangePassword} />
                        </Grid>
                    </Grid>
                    <Grid align="center">
                        <Grid style={grid2Style} align="center">
                            <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                label="Is active"
                                value={this.state.isActive}
                                onClick={this.onChangeIsActive}
                            />
                        </Grid>

                        <BtnSubmit type='submit' backgroundColor='#61d441' color='primary' style={btstyle} variant='contained' >Save</BtnSubmit>
                    </Grid>
                </Paper>
            </form>
        </Grid>
    );
}
}
//export default NewDeliveryMan;