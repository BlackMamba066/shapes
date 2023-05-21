import { Fragment } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import "./MainNavigation.css";


const MainNavigation = props => {
    const [drawerIsOpen, setDrawperIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawperIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawperIsOpen(false);
    };
  
  return (
    <Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler} >
        <div className="main-navigation__logo" >
        <p className="login">☺</p>
            <h2 className="main-navigation__login" >
               <Link to="/login">Sign In</Link> 
            </h2>
            </div>
            <h2 className="main-navigation__info" >
               <Link to="/info">About</Link> 
            </h2>  
      </SideDrawer>
      <MainHeader>
        <div className="main-navigation">
          <div className="main-subtitle">
          <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="header-title">
        </div>
        </div>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
