import './ShapeItem.css';
import Avatar from "../UIElements/Avatar";

const ShapeItem = props => {

    return (
      <li className="shape-item" id="bottom-line">
          <div className="shape-item__content">
            {/* <Link to={`details/${props.id}`} id={props.id}> */}
              <div className="shape-item__image">
                <Avatar
                  className="avatar-image"
                  image={props.image}
                  alt={props.name}
                />
              </div>
              <div className="shape-item__info">
                <h2>{props.name}</h2>
              </div>
            {/* </Link> */}
          </div>
      </li>
    );
  };

  export default ShapeItem;