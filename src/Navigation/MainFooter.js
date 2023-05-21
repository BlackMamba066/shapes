import "./MainFooter.css";
import { Link } from "react-router-dom";

import { Fragment } from "react";

const MainFooter = props => {
  return (
    <Fragment>
      <div className="main-navigation__footer">
        <h2><Link to="/" >∷ Things </Link></h2>
        <h2><Link to="/categorie"> 📁 Categories</Link></h2>
      </div>
    </Fragment>
  );
};

export default MainFooter;
