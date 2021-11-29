import React, { Component } from 'react';
import Axios from 'axios';
import { Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import styled from 'styled-components'

const paperSytle = { padding: 20, height: 'auto', width: 600, margin: "20px auto" };
const title = { fontSize: "30px", fontWeight: 'bold' };
const btstyle = { margin: '8px 0' };
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

export default class NewBlog extends Component {
    constructor(props) {
        super(props);

        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            title: '',
            text: '',
            author:'Daniel Nevo',
            date: new Date()
        }
    }
    /*componentDidUpdate() {
        this.setState({
            date: new Date().toLocaleDateString()
        });
    }*/
    onChangeText(e) {
        this.setState({
            text: e.target.value
        })
    }
    onChangetitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const blog = {
            title: this.state.title,
            text: this.state.text,
            author:this.state.author,
            date: this.state.date
        }
        console.log(blog);
        Axios.post('http://localhost:3333/blog/addblog', blog).
            then(res =>{console.log(res.data)
                this.setState({
                    title: '',
                    text: ''
                });
            }
                );
    }
    render() {
    return(

        <Grid spacing = '2' >
              <form onSubmit={this.onSubmit}>
            <Paper elevation={10} style={paperSytle}>
                <Grid direction="column">
                    <h3 style={title}>New blog is coming soon...</h3>
                    <TextField id="title" fullWidth fullWidth label="Title"
                    value={this.state.title} onChange={this.onChangetitle} ></TextField>
                    <p></p>
                    <TextField rows={4} fullWidth multiline id="text" label="What are you thinking about?" variant="outlined"
                    value={this.state.text} onChange={this.onChangeText} ></TextField>
                    <Grid align="center">
                        <BtnSubmit type='submit' backgroundColor='#61d441' color='primary' style={btstyle} variant='contained' >Submit</BtnSubmit>
                    </Grid>
                </Grid>
            </Paper>
            </form>
        </Grid>
    );
}
}
