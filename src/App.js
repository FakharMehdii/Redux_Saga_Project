import './App.css'
import store from './store'
import {Provider} from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {Homepage} from './Components/Homepage/index'

const App = () => {
  return (
    <Provider store={store}>
     <Homepage  />    
    </Provider>
  );
}

export default App;