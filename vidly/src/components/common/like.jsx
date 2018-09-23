import React from "react";

const Like = ({ like, onLike }) => {
  let classes = "fa fa-heart";
  if (!like) classes += "-o";
  return (
    <i className={classes} style={{ cursor: "pointer" }} onClick={onLike} />
  );
};

export default Like;
