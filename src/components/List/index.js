import React from "react";

const List = ({ items, render }) => {
  return items.map(item => render(item));
};

export default List;
