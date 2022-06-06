import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar';
import Video from './components/Video';
import CarsList from './components/CarsList';

import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
        <hr />
        <CarsList />
      </Provider>
    </div>
  );
}

export default App;
