import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import MainNavigations from './src/navigation/MainNaviagtions';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return <Provider store={store}> <NavigationContainer>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <MainNavigations />
  </NavigationContainer>
  </Provider>
}

export default App