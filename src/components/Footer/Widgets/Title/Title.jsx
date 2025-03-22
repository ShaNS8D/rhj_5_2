import './Title.css';

// выводит заголовки виджетов
const Title = ({ title }) => {
  return (
    <h3 className="Widget-title">
      <a href="#0" className="Widget-title__link">
        {title}
      </a>
    </h3>
  );
}

export default Title;