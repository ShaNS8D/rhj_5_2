// выводит список в формате: понятие - определение
const DefinitionsList = ({ items }) => {
  return (
    <ul className="Widget-list">
      {items.map(({ term, definition }, index) => {
        return (
          <li  className="Widget-list__item" key={index}>
            <b>{term}</b> &ndash; {definition}
          </li>
        );
      })}
    </ul>
  );
}

export default DefinitionsList;