import "./Thing.css";
import "../components/ShapesList.css";
import ShapesList from "../components/ShapesList";
import Searchbar from "../components/Searchbar";
import ShapeDescriptionList from "../components/ShapeDescriptionList";
import { useState } from "react";

const Thing = (props) => {
  const SHAPE = [
    {
      id: "u1",
      name: "carrer",
      image:
        "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
    {
      id: "u2",
      name: "triangle",
      image:
        "https://images.pexels.com/photos/1340397/pexels-photo-1340397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
    {
      id: "u3",
      name: "cylindre",
      image:
        "https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
    {
      id: "u4",
      name: "triangle",
      image:
        "https://images.pexels.com/photos/1340397/pexels-photo-1340397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
    {
      id: "u5",
      name: "cylindre",
      image:
        "https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
    {
      id: "u6",
      name: "carrer",
      image:
        "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
    {
      id: "u7",
      name: "cylindre",
      image:
        "https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
    {
      id: "u8",
      name: "triangle",
      image:
        "https://images.pexels.com/photos/1340397/pexels-photo-1340397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
    {
      id: "u9",
      name: "cylindre",
      image:
        "https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
    {
      id: "u10",
      name: "cylindre",
      image:
        "https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      total: 3,
    },
  ];

  const DESCRIPTION = [
    {
      id: "u11",
      image:
        "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Triangle",
      title: "Triangle",
      categorie: "Bloc",
      total: 3,
    },
  ];

  const [activeBloc, setActiveBloc] = useState(false);

  const activeBlockHandler = () => {
    setActiveBloc(true);
  };

  const deactivateBlockHandler = () => {
    setActiveBloc(false);
  };

  return (
    <div className="shape-container">
      <div className="shape-container-information">
        <div className="shape-header">Things</div>
        <Searchbar />

        {/* Le list item marche mais à l'envers # F I X  */}

        <div className="shape-list" onClick={activeBlockHandler}>
          <ShapesList items={SHAPE} className="shape-list" />
        </div>
      </div>
      <div className="detail-information">
        {activeBloc && (
          <div className="shape-detail__information">
            <div
              className="shape-detail__information__list"
              onClick={deactivateBlockHandler}
            >
              <ShapeDescriptionList items={DESCRIPTION} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Thing;
