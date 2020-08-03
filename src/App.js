import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path="/dialogs" render={() => 
          <Dialogs 
            state={props.state.messagesPage}  />} />
            
          <Route path="/profile" render={() => <Profile 
            state={props.state.profilePage} />} />



          <Route path="/settings" component={Settings} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />


        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
