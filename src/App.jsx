
import { Provider } from 'react-redux'
import './App.css'
import Theme from './Component/Theme'
import store from './redux/Store'

function App() {
  

  return (
    <Provider store={store}>
     <Theme/>
    </Provider>
  )
}

export default App
