import React, { useRef, useEffect, useCallback, useState, useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { MdClose } from 'react-icons/md'
import { Callout } from "@blueprintjs/core"


import { UserContext } from "../context/UserContext"

const Login = ({ showLogin, setShowLogin }) => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userContext, setUserContext] = useContext(UserContext)

  const paperSytle = { padding: 20, height: '55vh', width: 280, margin: "20px auto" };
  const avatarStyle = { backgroundColor: '#00BFA6', width: 70, height: 70 };
  const iconStyle = { width: 50, height: 50 };
  const titel = { fontSize: "30px", fontWeight: 'bold' };
  const btstyle = { margin: '20px 0' }

  const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    display:flex;
    justify-content: center;
    align-items:center;
    z-index:10;
    `;
  const NavBtnLink = styled.button`
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

  const CloseButton = styled(MdClose)`
    cursor:pointer;
    position: absolute;
    top:30px;
    right:10px;
    width:20px;
    height:32px;
    padding 0;
    z-index:10;
    `;
  const loginRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showLogin ? 1 : 0,
    transform: showLogin ? 'translateY(0%)' : 'translateY(-100%)'
  });

  const closeLogin = e => {
    if (loginRef.current === e.target) {
      setShowLogin(false);
    }
  };
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showLogin)
        setShowLogin(false)
    },
    [setShowLogin, showLogin],
  )
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const formSubmitHandler = e => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    const genericErrorMessage = "Something went wrong! Please try again later."
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then(async response => {
        setIsSubmitting(false)
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!")
          } else if (response.status === 401) {
            setError("Invalid email and password combination.")
          } else {
            setError(genericErrorMessage)
          }
        } else {
          const data = await response.json();
          setUserContext(oldValues => {
            return { ...oldValues, token: data.token,isManager:data.isManager }
          
          }
          )
         
        }
      })
      .catch(error => {
        setIsSubmitting(false)
        setError(genericErrorMessage)
      })
  }

  return (
    <>
    
      {error && <Callout intent="danger">{error}</Callout>}
      {showLogin ?
        <Background ref={loginRef} onClick={closeLogin}>
          <animated.div style={animation}>
            <Grid>
              <form onSubmit={formSubmitHandler}>
                <Paper elevation={10} style={paperSytle}>
                  <CloseButton aria-label='Close login' onClick={() => setShowLogin(prev => !prev)} />
                  <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon style={iconStyle} /></Avatar>
                    <h3 style={titel}>Log In</h3>
                  
                  <TextField id="emailelm" label='Email' onChange={e => setEmail(e.target.value)} value={email} placeholder='Enter email' fullWidth required />
                  <TextField id="passwordelm" label='Password' onChange={e => setPassword(e.target.value)} value={password} placeholder='Enter password' type='password' fullWidth required />
                  <NavBtnLink type='submit'  style={btstyle} variant='contained' fullWidth
                    disabled={isSubmitting}>Log In</NavBtnLink>
                    </Grid>
                </Paper>
              </form>
            </Grid>
          </animated.div>
        </Background>
        : null}
    </>
  );
};
export default Login;