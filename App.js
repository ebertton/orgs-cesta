
import { StatusBar, SafeAreaView, mock, View} from 'react-native';
import Cesta from './src/telas/cesta';
import cesta from './src/mocks/cesta';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold, 
  
} 
from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MonteserratRegular": Montserrat_400Regular,
    "MonteserratBold": Montserrat_700Bold,
  });
if(!fonteCarregada){
  return <AppLoading/>
}

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar/>
      <Cesta {...cesta}/>
    </SafeAreaView>
  );
}

