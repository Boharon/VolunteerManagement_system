import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { red } from '@material-ui/core/colors';
import MyImage from './3.jpeg';
import Fab from '@material-ui/core/Fab';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import './MainPage.css';
const DeliveryManMainPage = () => {

  const paperSytle = { padding: 20, height: '66vh', width: 600, margin: "20px auto" };
  const pStyle = { backgroundColor: '#61d441', height: '10vh' };
  const avatarStyle = { backgroundColor: '#61d441', width: 70, height: 70 };
  const iconStyle = { width: 50, height: 50 };
  const titel = { fontSize: "30px", fontWeight: 'bold' };
  const btstyle = { margin: '8px 0' };
  const grid2Style = { margin: '0 8px' };
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignContent: 'space-evenly',
  };
  const fieldStyle = { padding: '2', margin: '8px 0' };
  return (

    <Grid>
      <div style={pStyle} >
        <h2> 22/8/2020</h2>
        <h3>Dliveryname</h3>
      </div>
      <div className="home" style={{ height: "90vh", width: '100%' }} >
        <h1 >Giving is not just about making a donation.</h1>
        <h1>It is about making a diffrence.</h1>
        <button  className="rigth-btn">
         Who will be happy today</button>
        <button className="left-btn">
          What's new on the blog
        </button>
        <Fab className="chat-btn" color="primary" aria-label="chat">
          <ChatBubbleIcon />
        </Fab>
      </div>

    </Grid>
  )
};
export default DeliveryManMainPage;