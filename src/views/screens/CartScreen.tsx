import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import COLORS from '../../constants/colors';

import View from '../../components/View';
import Text from '../../components/Text';
import {Button} from '../components/Button';
import {generateBoxShadow} from '../../utils/boxShadow';
import foods from '../../constants/foods';

import IconMinus from '../../assets/icons/remove.svg';
import IconPlus from '../../assets/icons/add.svg';

const CartScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      {/* header */}
      <Header title="Cart" navigation={navigation} />

      {/* cart items list */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 20,
          paddingVertical: 40,
        }}>
        {foods.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ScrollView>

      {/* amount summary */}
      <View styles={{...styles.footer}}>
        <View
          styles={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text styles={{fontWeight: 'bold'}}>Total Price</Text>
          <Text styles={{fontWeight: 'bold', fontSize: 20}}>$50</Text>
        </View>
        <View styles={{marginHorizontal: 40, marginTop: 20}}>
          <Button
            btnColor={{...generateBoxShadow(2, 2, 8, COLORS.dark, 5, 0.2)}}>
            CHECKOUT
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const CartItem = ({item}: any) => {
  const [count, setCount] = useState(1);

  return (
    <View styles={{...styles.card}}>
      <View>
        <Image style={{height: 80, width: 80}} source={item.image} />
      </View>
      <View styles={{marginLeft: 10}}>
        <View>
          <Text styles={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
          <Text styles={{color: COLORS.grey, fontSize: 12}}>
            {item.ingredients}
          </Text>
          <Text styles={{fontWeight: 'bold'}}>${item.price}</Text>
        </View>
      </View>
      <View
        styles={{
          marginLeft: 'auto',
          marginRight: 20,
          alignItems: 'center',
          gap: 10,
        }}>
        <Text styles={{fontWeight: 'bold'}}>{count}</Text>
        <View styles={{...styles.quantityBtn}}>
          <TouchableOpacity
            style={{paddingHorizontal: 10, paddingVertical: 5}}
            onPress={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}>
            <IconMinus fill={COLORS.white} height={20} width={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingHorizontal: 10, paddingVertical: 5}}
            onPress={() => {
              setCount(count + 1);
            }}>
            <IconPlus fill={COLORS.white} height={20} width={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    marginTop: 'auto',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    ...generateBoxShadow(2, 5, 10, COLORS.dark, 10, 0.2),
  },
  quantityBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CartScreen;
