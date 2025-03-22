import Title from '../Title';
import TVProgramsList from '../TVProgramsList/TVProgramsList'

// выводит программу "Эфира"
const EtherWidget = ({ title, items }) => {
  return (
    <div className="Ether-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}

export default EtherWidget;