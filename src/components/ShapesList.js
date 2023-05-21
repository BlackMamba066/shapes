import './ShapesList.css';
import ShapeItem from "./ShapeItem";

const ShapesList = props => {
  if (props.length === 0) {
    return (
      <div className="center">
        <h2>No results Found</h2>
      </div>
    );
  }

  return (
    <ul className="shape-list" id="bottom-line">
      {props.items?.map(shape => (
        <ShapeItem
        key={shape.id} 
        id={shape.id} 
        image={shape.image} 
        name={shape.name} 
         />
      ))}
    </ul>
  );
};

export default ShapesList;
