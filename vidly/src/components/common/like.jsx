import React from "react";

const Like = (props) => {
  const { like } = props;
  let classes = "fa fa-heart";
  if (!like) classes += "-o";
  return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={props.onLike}
      />
    );
}
 
export default Like;
