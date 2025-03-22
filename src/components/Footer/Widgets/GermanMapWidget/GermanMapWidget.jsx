import Title from '../Title';
import List from '../List/List'

// выводит список разделов виджета "Карта Германии"
const GermanMapWidget = ({ title, items }) => {
  return (
    <div className="German-map-widget">
      <Title title={title} />
      <List items={items} />
    </div>
  );
}

export default GermanMapWidget;