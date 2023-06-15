import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const Button = ({title, onPress = () => {}}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
          {title}
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
    backgroundColor: COLORS.primary,
  },
});

export {Button};
