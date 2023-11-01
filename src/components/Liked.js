import { useState } from "react";

const Liked = () => {
  const [isLiked, setIsLiked] = useState(false);

  // const toggle = () => {
  //   if (isLiked === false) {
  //     setIsLiked(true);
  //   } else {
  //     setIsLiked(false);
  //   }
  // };
  const heartStyle = isLiked
    ? {
        backgroundColor: "red",
        border: "1px solid red",
        "border-radius": "75% 75% 75% 75%",
      }
    : { backgroundColor: "white" };
  return (
    <i
      className="fa fa-heart-o text-2xl "
      style={heartStyle}
      aria-hidden="true"
    ></i>
  );
};

export default Liked;
