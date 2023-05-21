import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

// Allows to render the component in a different place thant the component itself.
// To avoid really deep nesting!

const SideDrawer = (props) => {
  const content = (
    <CSSTransition 
    in={props.show} 
    timeout={200} 
    classNames="slide-in-left" 
    mountOnEnter 
    unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));

};

export default SideDrawer;
