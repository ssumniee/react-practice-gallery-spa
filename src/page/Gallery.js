import "./Gallery.css";
import React, { useState } from "react";

function Gallery() {
  const [name, setName] = useState("고양이");
  const [src, setSrc] = useState("/images/고양이.png");

  const handleClickThmb = (event) => {
    setName(event.target.name);
    setSrc(event.target.src);
  };

  return (
    <div className="Gallery">
      <div className="thumbnail-area">
        <img className="thumbnail" src="/images/고양이.png" name="고양이" onClick={handleClickThmb} />
        <img className="thumbnail" src="/images/강아지.png" name="강아지" onClick={handleClickThmb} />
        <img className="thumbnail" src="/images/사람.png" name="사람" onClick={handleClickThmb} />
      </div>
      <div className="Image">
        <h1 className="Image-title">{name}</h1>
        <img src={src} />
      </div>
    </div>
  );
}

export default Gallery;
