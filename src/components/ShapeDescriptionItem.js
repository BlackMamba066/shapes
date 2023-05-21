import Avatar from "../UIElements/Avatar";
import "./ShapeDescriptionItem.css";

const ShapeDescriptionItem = (props) => {

  return (
    <li className="shape-specification" >
    <div className="shape-specification__content">
        <div className="shape-detail__image">
          <img src={props.image} alt={props.alt} />
          <div className="shape-detail__container">
            <p className="shape-detail-name">{props.name}</p>
            <p className="shape-detail-categorie">{props.categorie}</p>
          </div>
        </div>
        <p className="shape-specification">Specifications</p>
        <div className="shape-item__description">
          <div className="shape-item__name">
            <p className="list-item">Name</p>
            <p className="list-item">Categorie</p>
            <p>Quantity</p>
          </div>
          <div className="shape-item__specific">
            <p className="list-item">{props.title}</p>
            <p className="list-item">{props.categorie}</p>
            <p>{props.total}</p>
          </div>
        </div>
        <p className="shape-suggestion">You may also like</p>
        <a className="second-shape-suggestion" href={`/specifique`}>
          <Avatar image={props.image} alt={props.name} />
          <p className="suggestion-list">Cylindre</p>
          <p className="suggestion-list">12</p>
          <p className="avatar-image-logo"></p>
        </a>
        <a className="second-shape-suggestion" href={`/specifique`}  >
          <Avatar image={props.image} alt={props.name} />
          <p className="suggestion-list">Trombi</p>
          <p className="suggestion-list">65</p>
          <p className="avatar-image-logo"></p>
        </a>
        {/* <div>{props.id}</div> */}
      </div>
    </li>
   
  );
};

export default ShapeDescriptionItem;
