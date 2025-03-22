import Title from '../Title';
import DefinitionsList from '../DefinitionsList/DefinitionsList'

// выводит часто посещаемые страницы
const FavoritesWidget = ({ title, items }) => {
  return (
    <div className="Favorites-widget">
      <Title title={title} />
      <DefinitionsList items={items} />
    </div>
  );
}

export default FavoritesWidget;