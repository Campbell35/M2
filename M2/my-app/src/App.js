
import Header from './components/Header';
import Main from './components/Main';
import BingCustomSearch from './components/api/BingCustomSearch';
import BingSearch from './components/api/BingSearch';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BingSearch />
      <BingCustomSearch />

    </div>
  );
}

export default App;
