import { useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/common/Header';

const ChangingBgColour = () => {
    const [randomColor,setRandomColor] = useState('#303030')

    const randomColorGenrator = () => {
        const hexValues = '0123456789ABCDEF'
        let color = "#" 
        for(let i = 0;i<6;i++){
            color+= hexValues[Math.floor(Math.random()*16)] 
        }
        setRandomColor(color)
    }
  return (
    <>
      <Header/>
      <View style={{backgroundColor: randomColor,justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          style={{
            height: 80,
            width: 140,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: 'white',
          }}
          onPress={randomColorGenrator}
          >
          <Text>Click Here</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChangingBgColour;
