import './App.css';
import HomeScreen from './containers/HomeScreen';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HomeScreen />
            </div>
        </Provider>
    );
}

export default App;
