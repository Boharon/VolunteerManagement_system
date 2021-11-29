
//import { Navbar } from './components/layout/Navbar';
import React, { useContext, useState, useCallback, useEffect } from 'react';
import Loader from './components/Loader'
import { UserContext } from "./context/UserContext"
import Login from './components/Login';
import NewAdult from './components/NewAdult';
import NewDeliveryMan from './components/NewDeliveryMan';
import DeliveryList from './components/MainPage/DeliveryList'
import SignIn from './components/Form/SignIn';
import DeliveryManMain from './components/MainPage/DeliveryManMain';
import Blog from './components/MainPage/Bolg/Blog';
import Blogs from './components/MainPage/Bolg/Blogs';
import BlogsDeliveryMan from './components/MainPage/Bolg/BlogsDeliveryMan';
import NewBlog from './components/MainPage/Bolg/NewBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './components/Chat/Join';
import Chat from './components/Chat/Chat';
import DeliveryManMainPage from './components/DeliveryManMainPage/DeliveryManMainPage';
import Navbar from './components/Navbar';
import Slidebar from './components/Sidebar';
import Home from './components/pages';
import ManagerHome from './components/pages/ManagerIndex';
import DeliveryManHome from './components/pages/DeliveryManIndex';
import NewDelivery from './components/NewDelivery/newDelivery'
import NewAdultPage from './components/InfoSection/NewAdultPage'
import NewDeliveryManPage from './components/InfoSection/NewDeliveryManPage'
import NewDeliveryPage from './components/InfoSection/NewDeliveryPage'
import SchedulePage from './components/InfoSection/SchedulePage'
import MyChart from './components/Graphs/test'
import GraphsPage  from './components/InfoSection/GraphsPage';
import NewChat from './components/new-chat/NewChat';
function App() {

  const [userContext, setUserContext] = useContext(UserContext)

  const verifyUser = useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(async response => {
      if (response.ok) {
        const data = await response.json()
        setUserContext(oldValues => {
          return { ...oldValues, token: data.token ,isManager:data.isManager}
        })
      } else {
        setUserContext(oldValues => {
          return { ...oldValues, token: null }
        })
      }
      // call refreshToken every 5 minutes to renew the authentication token.
      setTimeout(verifyUser, 5 * 60 * 1000)
    })
  }, [setUserContext])
  useEffect(() => {
    verifyUser()
  }, [verifyUser])

  const logoutHandler = () => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async response => {
      setUserContext(oldValues => {
        return { ...oldValues, details: undefined, token: null }
      })
      window.localStorage.setItem("logout", Date.now())
    })
  }



  return userContext.token === null ? (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
  ) : (userContext.token && userContext.isManager) ? (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact >
            <ManagerHome logoutHandler={logoutHandler}/>
          </Route>
          <Route path="/newAdult" component={NewAdultPage} exact />
          <Route path="/newDelieryMan" component={NewDeliveryManPage} exact />
          <Route path="/newdelivery" component={NewDeliveryPage} exact />
          <Route path="/graphs" component={GraphsPage} exact />
          <Route path="/blogsManager" component={Blogs} exact />
        </Switch>
      </Router>
    </div>
  ) : (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={DeliveryManHome} exact>
            <DeliveryManHome logoutHandler={logoutHandler}/>
          </Route>
          <Route path="/schedule" component={SchedulePage} exact />
          <Route path="/blog" component={BlogsDeliveryMan} exact />
        </Switch>
      </Router>
    </div>



  )
}

export default App;
