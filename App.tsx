import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigations from './src/navigation/MainNaviagtions';


const App = () => {
  return <NavigationContainer>
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <MainNavigations />
    </SafeAreaView>
  </NavigationContainer>
}

export default App