import React, {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';

import COLORS from '../../constants/colors';
import View from '../../components/View';
import Text from '../../components/Text';
import IconArrowBack from '../../assets/icons/arrow_back.svg';

type HeaderProps = PropsWithChildren<{
  title: string;
  navigation: any;
}>;

const Header = ({navigation, title}: HeaderProps) => {
  return (
    <View
      styles={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        height: 50,
        alignItems: 'center',
      }}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <IconArrowBack
          fill={COLORS.dark}
          style={{marginRight: 10}}
          height={28}
          width={28}
        />
      </TouchableOpacity>

      <Text styles={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
    </View>
  );
};

export default Header;
