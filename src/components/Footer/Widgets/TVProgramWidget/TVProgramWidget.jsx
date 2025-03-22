import Title from '../Title';
import TVProgramsList from '../TVProgramsList/TVProgramsList'

// выводит список ТВ программ
const TVProgramWidget = ({ title, items }) => {
  return (
    <div className="TV-program-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}

export default TVProgramWidget;