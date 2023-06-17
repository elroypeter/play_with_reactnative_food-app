import React, {PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../components/Text';
import COLORS from '../../constants/colors';

type ButtonProps = PropsWithChildren<{
  onPress?: () => void;
  btnColor?: any;
  textColor?: any;
}>;

const Button = ({
  children,
  onPress = () => {},
  btnColor,
  textColor,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={{...styles.btn, ...styles.btnPrimary, ...btnColor}}>
        <Text styles={{color: COLORS.white, fontWeight: 'bold', ...textColor}}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary: {
    backgroundColor: COLORS.primary,
  },
});

export {Button};
