import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { poppins } from '../../utils/fonts';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  fontSize?: number;
  style?: TextStyle | TextStyle[];
}

const AppText: React.FC<AppTextProps> = ({ children, fontSize = 14, style, ...rest }) => {
  return (
    <Text
      style={[{fontSize: RFValue(fontSize) }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default AppText;
