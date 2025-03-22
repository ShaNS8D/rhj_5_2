// выводит изображения
const Image = (props) => {
  const {containerClass, imgClass, src, alt } = props;

  return (
    <div className={containerClass}>
      <img className={imgClass} src={src} alt={alt} />
    </div>
  );
}

export default Image;