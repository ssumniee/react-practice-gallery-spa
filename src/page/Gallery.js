import "./Gallery.css";

function Gallery() {
  return (
    <div className="Gallery">
      <div className="thumbnail-area">
        <div className="thumbnail-image">
          <image src="./IMG/cat.jpeg" />
        </div>
        <div className="thumbnail-image">
          <image src="./IMG/dog.jpeg" />
        </div>
        <div className="thumbnail-image">
          <image src="./IMG/man.jpg" />
        </div>
      </div>
      <div className="image-area">
        <div className="image-title"></div>
        <image src="./IMG/cat.jpeg" />
      </div>
    </div>
  );
}

export default Gallery;
