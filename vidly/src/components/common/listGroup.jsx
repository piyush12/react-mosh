import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {items.map(genre => (
        <li
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
          key={genre[valueProperty]}
          onClick={() => onItemSelect(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};
export default ListGroup;
