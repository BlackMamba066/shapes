import ShapeDescriptionItem from "./ShapeDescriptionItem";

const ShapeDescriptionList = (props) => {
  return (
    <ul className="shape-description-list">
      {props.items.map((shape) => (
        <ShapeDescriptionItem
          key={shape.id}
          id={shape.id}
          image={shape.image}
          title={shape.title}
          name={shape.name}
          categorie={shape.categorie}
          quantity={shape.total}
        />
      ))}
    </ul>
  );
};

export default ShapeDescriptionList;
