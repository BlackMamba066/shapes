import "./SpecificCategorie.css";
import Avatar from "../UIElements/Avatar";

const SpecificCategorie = (props) => {
  return (
    <div className="main-container">
      <div className="specific-container">
        <div className="logo-specific"></div>

        <div className="suggestion-container">
          <a className="first-shape-suggestion" href={`/categorie`}>
            <Avatar image={props.image} alt={props.alt} />
            <p className="suggestion-list">Cylindre</p>
            <p className="suggestion-list">12</p>
            <p className="avatar-image-logo"></p>
          </a>
          <a className="second-shape-suggestion" href={`/categorie`}>
            <Avatar image={props.image} alt={props.alt} />
            <p className="suggestion-list">Cylindre</p>
            <p className="suggestion-list">12</p>
            <p className="avatar-image-logo"></p>
          </a>
          <a className="second-shape-suggestion" href={`/specifique`}>
            <Avatar image={props.image} alt={props.name} />
            <p className="suggestion-list">Cylindre</p>
            <p className="suggestion-list">12</p>
            <p className="avatar-image-logo"></p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecificCategorie;
