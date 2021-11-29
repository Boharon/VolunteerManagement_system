import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MyImage from './images/2.jpg';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
//props={ title: '',text: '',author:'admin',date: new Date()}
const Blog = (props) => {

    const paperSytle = { padding: 20, height: 'auto', width: 600, margin: "20px auto" };
    const title = { fontSize: "30px", fontWeight: 'bold' };
    console.log(props);
      return (

        <Grid container spacing='2' >
            <Paper  elevation={10} style={paperSytle}>
                <Grid align="left">
                    <h3 style={title} >{props.title}</h3>
                    <hr></hr>
                    <Grid>
                    <Grid style={{ display:'inline-block'}}><PermIdentityIcon /></Grid>
                    <Grid style={{ display:'inline-block'}}><h4>{props.author}</h4></Grid>
                    </Grid>
                    <Grid  >
                    <Grid style={{ display:'inline-block'}}><p>{props.text}</p></Grid>
                    <div style={{ display:'flex',justifyContent: 'flex-start',alignItems:'center'}}><img  style={{height:'100%',width:'100%'}} alt="" src={props.imgSrc} /></div>
                    </Grid>
                    <hr></hr>
                    <h5>{props.date}</h5>
               
                </Grid>
            </Paper>
        </Grid>
    )
};
export default Blog;