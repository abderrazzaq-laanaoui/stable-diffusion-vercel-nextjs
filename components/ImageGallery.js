
function ImageGallery({ images }) {
  return (
    <div className="flex overflow-x-scroll">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Generated image ${index}`}
          className="w-32 h-32 rounded-xl shadow-lg mr-4"
        />
      ))}
    </div>
  );
}

export default ImageGallery;