import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import View from '../../components/View';
import Text from '../../components/Text';
import IconArrowBack from '../../assets/icons/arrow_back.svg';
import IconHeart from '../../assets/icons/favorite.svg';
import COLORS from '../../constants/colors';
import {generateBoxShadow} from '../../utils/boxShadow';
import {Button} from '../components/Button';
import Header from '../components/Header';

const DetailsScreen = ({navigation, route}: any) => {
  const details = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* header */}
      <Header title="Details" navigation={navigation} />

      {/* Details */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          styles={{
            padding: 50,
            height: 280,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={details.image} style={{height: 220, width: 220}} />
        </View>
        <View styles={{...styles.details}}>
          <View
            styles={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginTop: 20,
            }}>
            <Text
              styles={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>
              {details.name}
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <View
                styles={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...generateBoxShadow(2, 2, 8, COLORS.dark, 5, 0.2),
                }}>
                <IconHeart fill={COLORS.primary} />
              </View>
            </TouchableOpacity>
          </View>

          <View
            styles={{
              marginTop: 20,
              backgroundColor: 'transparent',
            }}>
            <Text styles={{color: COLORS.white, lineHeight: 20}}>
              {details.description}
            </Text>
          </View>

          <View styles={{marginVertical: 40, backgroundColor: 'transparent'}}>
            <Button
              btnColor={{
                backgroundColor: COLORS.white,
                ...generateBoxShadow(2, 2, 8, COLORS.dark, 5, 0.2),
              }}
              textColor={{color: COLORS.primary}}
              onPress={() => navigation.navigate('CartScreenTab')}>
              Add To Cart
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  details: {
    padding: 20,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    minHeight: '100%',
  },
});
export default DetailsScreen;
