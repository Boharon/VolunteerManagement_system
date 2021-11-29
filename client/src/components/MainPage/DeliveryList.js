import React,{useState} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Checkbox from '@material-ui/core/Checkbox';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';

const DeliveryList = (props) => {
    console.log(props);
    const paperSytle = { padding: 20, height: '100%', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#61d441' };
    const iconStyle = {};
    const titel = { fontSize: "30px", fontWeight: 'bold' };
    const btstyle = { margin: '20px 0' }
    const gridStyle = {
        height: 10,
        width: 20,
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        alignContent: 'space-evenly',
    };
    const gridStyle2 = {
        height: 10,
        width: 280

    };
    const [isDone,setIsDone]=useState(props.isDone===true)
    console.log(props.isDone===true)
    const onChangeIsDone=(e)=> {
        setIsDone(e.target.checked)
        props.onIsDoneChange(props.id,e.target.checked)
        }
    return (
      
        <Grid container>
                    <List>
                    <ListItem>
                    <Checkbox
        color="primary"
        checked={isDone} onChange={onChangeIsDone}
      />
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
  
                       <ListItemText primary={props.firstName+" "+props.lastName} secondary={props.street+" "+props.buildingNumber+" "+props.city} />
                        <IconButton backgroundColor="#61d441" color="secondary" aria-label="MotorcycleIcon">
                            <MotorcycleIcon />
                        </IconButton>
                    </ListItem>

                </List>

        </Grid>
    )
};
export default DeliveryList;