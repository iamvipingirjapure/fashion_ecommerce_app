import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigations from './src/navigation/MainNaviagtions';


const App = () => {
  return <NavigationContainer>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <MainNavigations />
  </NavigationContainer>
}

export default App