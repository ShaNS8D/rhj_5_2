import Search from './components/Search';

import Ads from './components/Header/Ads';
import ExchangeRates from './components/Header/ExchangeRates';
import Image from './components/Header/Image';
import News from './components/Header/News';

import EtherWidget from './components/Footer/Widgets/EtherWidget';
import FavoritesWidget from './components/Footer/Widgets/FavoritesWidget';
import GermanMapWidget from './components/Footer/Widgets/GermanMapWidget';
import TVProgramWidget from './components/Footer/Widgets/TVProgramWidget';
import WeatherWidget from './components/Footer/Widgets/WeatherWidget';
import Widgets from './components/Footer/Widgets';

import currencyRates from './data/currencyRates';
import ether from './data/ether';
import favoritePages from './data/favoritePages';
import germanMapItems from './data/germanMapItems';
import newsCategories from './data/newsСategories';
import newsNames from './data/newsNames';
import searchСategories from './data/searchСategories';
import TVPrograms from './data/TVPrograms';

import './App.css';

const App = () => {
  return (
    <>
      <header className="App-header">
        <div className="App-wrapper">
          <div className="App-header__main">
            <News 
            newsCategories={newsCategories} 
            newsNames={newsNames} />
            <ExchangeRates currencyRates={currencyRates} />
          </div>
          <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <Image
              containerClass="Ads__image-container"
              imgClass="Ads-image"
              src="https://picsum.photos/id/2/100"
              alt="Plug"
            />
          </Ads>
        </div>
      </header>
      <div className="App-body">
        <div className="App-wrapper">
          <Search
            searchСategories={searchСategories}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />
          <Image
            containerClass="Banner"
            imgClass="Banner-image"
            src="https://picsum.photos/id/1063/1000"
            alt="Plug"
          />
        </div>
      </div>
      <footer className="App-footer">
        <div className="App-wrapper">
          <Widgets>
            <WeatherWidget
              title="Погода"
              averageTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+20"
            />
            <GermanMapWidget
              title="Карта Германии"
              items={germanMapItems}
            />
            <EtherWidget
              title="Эфир"
              items={ether}
            />
            <FavoritesWidget
              title="Посещаемое"
              items={favoritePages}
            />
            <TVProgramWidget
              title="Телепрограмма"
              items={TVPrograms}
            />
          </Widgets>
        </div>
      </footer>
    </>
  );
}

export default App;
