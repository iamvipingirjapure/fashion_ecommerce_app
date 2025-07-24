import {useRef, useState} from 'react';
import {TouchableOpacity, Text, View, Animated, StyleSheet} from 'react-native';
import Header from '../../components/common/Header';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const RollingDice = () => {
  const [diceValue, setDiceValue] = useState(1);
 const shakeAnim = useRef(new Animated.Value(0)).current;
  const handleDicePress = () => {
     Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
    const val = Math.floor(Math.random() * 6) + 1;
    setDiceValue(val);
    ReactNativeHapticFeedback.trigger('impactHeavy', hapticOptions);
  };

  return (
    <View style={{flex: 1}}>
        <Header title='Rolling Dice'/>
        <View style={styles.container}>
      <TouchableOpacity onPress={handleDicePress}>
        <Animated.View style={[styles.diceWrapper, { transform: [{ translateX: shakeAnim }] }]}>
          <Text style={{fontSize: 32}}>{diceValue}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceWrapper: {
    height: 120,
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginBottom:122
  },
  diceImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default RollingDice;
