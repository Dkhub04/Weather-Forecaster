import Search from './components/search/search';
import './App.css';
import Weather from './components/weather/weather';

function App() {

  const handleonsearchchange = (searchData) => {


  }

  return (
    <div className="font-bold max-w-5xl my-5 mx-auto  ">
      <Search onsearchchange={handleonsearchchange} />

      <Weather />

    </div>
  );
}

export default App;
