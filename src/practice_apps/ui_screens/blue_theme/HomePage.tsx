import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { blueImage1, blueImage2, blueImage3 } from './assets/images';

const HomePage = () => {
  return (
   <SafeAreaView style={{ flex: 1 }}>
  <View style={{ flex: 1, position: 'relative' }}>
    <Image source={blueImage1} style={{ height: 300, zIndex: 999 }} />
    <Image
      source={blueImage2}
      style={{ height: 500, position: 'absolute', top: 30 }}
    />
    <Image
      source={blueImage3}
      style={{
        height: 172,
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }}
      resizeMode="cover"
    />
    <Text style={{ zIndex: 1000, position: 'relative' ,fontSize:42,top:180,left:40}}>Lorem</Text>
    <Text style={{ zIndex: 1000, position: 'relative' ,fontSize:22,top:180,left:40}}>Lorem ipsum</Text>
    <Pressable 
    style={{justifyContent:"center",alignItems:"center",borderWidth:1,height:60,width:140,borderRadius:12,
    alignSelf:"flex-end",
    marginTop:"auto",
    marginRight:20,marginBottom:40,
    borderColor:'white'
    }}>
        <Text style={{fontSize:20,color:'white'}}>
            Get Started
        </Text>
    </Pressable>
  </View>
</SafeAreaView>
  );
};

export default HomePage;
