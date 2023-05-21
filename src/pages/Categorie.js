import "./Categorie.css";
import DonutGrapgh from "../components/DonutGraph";

const Categorie = (props) => {
  return (
    <div className="global">
    <div className="main-container">
      <div className="categorie-container">
        <div className="categorie-graphique">
          <DonutGrapgh />
        </div>
        <div className="list-container">
          <div className="list-result">
            <p className="card-list__item">{props.categorie}Prisms</p>
            <p className="card-list__item">{props.categorie}Triangle</p>
            <p className="card-list__item">{props.categorie}Carrer</p>
          </div>
          <div className="categorie-result">
            <p className="card-list__item">{props.quantity}2</p>
            <p className="card-list__item">{props.quantity}3</p>
            <p className="card-list__item">{props.quantity}3</p>
          </div>
        </div>
        <div className="cubes-container">
          <a className="categorie-bloc" id="first-bloc" href={`/specifique`}></a>
          <a className="categorie-bloc" id="second-bloc" href={`/specifique`}></a>
          <a className="categorie-bloc" id="third-bloc" href={`/specifique`}></a>
        </div>
        <div className="cubes-information">
          <div className="cube-info">
            <p className="cube-title">Prisms</p>
            <p className="cube-specific">2 Things</p>
          </div>
          <div className="cube-info">
            <p className="cube-title">Triangle</p>
            <p className="cube-specific">3 Things</p>
          </div>
          <div className="cube-info">
            <p className="cube-title">Carrer</p>
            <p className="cube-specific">3 Things</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Categorie;
