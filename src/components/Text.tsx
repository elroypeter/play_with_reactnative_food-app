import React, {PropsWithChildren} from 'react';
import {Text as ReactText, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type TextProps = PropsWithChildren<{
  styles?: any;
}>;

const Text = ({children, styles}: TextProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ReactText
      style={{color: isDarkMode ? Colors.white : Colors.black, ...styles}}>
      {children}
    </ReactText>
  );
};

export default Text;
