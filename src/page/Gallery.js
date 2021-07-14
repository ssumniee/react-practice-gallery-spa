import "./Gallery.css";
import React, { useState } from "react";

function Gallery() {
  const [name, setName] = useState("고양이");
  const [src, setSrc] = useState("/images/고양이.png");

  const handleClickThmb = (event) => {
    setName(event.target.value);
    setSrc(`/images/${event.target.value}.png`);
  };

  return (
    <div className="Gallery">
      <div className="thumbnail-area">
        <button
          className="thumbnail"
          style={{
            backgroundImage: "url(/images/고양이.png)",
          }}
          value="고양이"
          onClick={handleClickThmb}
        ></button>
        <button
          className="thumbnail"
          style={{
            backgroundImage: "url(/images/강아지.png)",
          }}
          value="강아지"
          onClick={handleClickThmb}
        ></button>
        <button
          className="thumbnail"
          style={{
            backgroundImage: "url(/images/사람.png)",
          }}
          value="사람"
          onClick={handleClickThmb}
        ></button>
      </div>
      <div className="Image">
        <h1 className="Image-title">{name}</h1>
        <img src={src} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
