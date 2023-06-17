import React, {PropsWithChildren} from 'react';
import {View as ReactView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type TextProps = PropsWithChildren<{
  styles?: any;
}>;

const View = ({children, styles}: TextProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ReactView
      style={{
        backgroundColor: isDarkMode ? Colors.dark : Colors.white,
        ...styles,
      }}>
      {children}
    </ReactView>
  );
};

export default View;
