import { AppProvider } from './context/AppContext';
import Menu from './components/Menu';
import Featured from './components/Featured';
import TrendingNow from './components/TrendingNow';
import './App.css';

function App() {
  return (
      <AppProvider>
        <div className="app">
          <Menu />
          <div className="content">
            <Featured />
            <TrendingNow />
          </div>
        </div>
      </AppProvider>
  );
}

export default App;
