import React from 'react';
import {View, SafeAreaView, Image, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import Text from '../../components/Text';
import {Button} from '../components/Button';

const BoardingScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{marginTop: 60}}>
        <Image
          style={styles.boardingImage}
          source={require('../../assets/onboardImage.png')}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text styles={{fontSize: 28, fontWeight: 'bold', color: COLORS.dark}}>
          Delicious Food
        </Text>
        <Text
          styles={{
            color: COLORS.grey,
            marginTop: 20,
            marginHorizontal: 100,
            textAlign: 'center',
          }}>
          We help you to find best and delicious food
        </Text>
      </View>

      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, styles.activeIndicator]} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>

      <View
        style={{marginTop: 'auto', marginBottom: 40, paddingHorizontal: 80}}>
        <Button onPress={() => navigation.navigate('HomeScreen')}>
          Get Started
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boardingImage: {
    height: 400,
    width: '100%',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.grey,
  },
  activeIndicator: {
    width: 25,
    backgroundColor: COLORS.primary,
  },
});

export default BoardingScreen;
