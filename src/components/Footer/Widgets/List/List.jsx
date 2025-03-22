import './List.css';

// выводит простой список
const List = ({ items }) => {
  return (
    <ul className="Widget-list">
      {items.map(({ content }, index) => {
        return (
          <li className="Widget-list__item" key={index}>
            {content}
          </li>
        );
      })}
    </ul>
  );
}

export default List;