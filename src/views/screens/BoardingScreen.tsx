import React from 'react';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
import COLORS from '../../constants/colors';
import {Button} from '../components/Button';

const {height, width} = Dimensions.get('screen');
const imageContainerWidth = height * 0.34;

const BoardingScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBackground} />
        <Image
          style={styles.onboardImage}
          source={require('../../assets/onboard.png')}
        />
      </View>

      <View style={{marginTop: 60, alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 15}}>
          Delicious Food
        </Text>
        <Text
          style={{fontSize: 16, maxWidth: 0.6 * width, textAlign: 'center'}}>
          We help you to find best and delicious food
        </Text>
      </View>

      <View style={styles.slideIndicatorContainer}>
        <View style={[styles.indicator, styles.activeIndicator]} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>

      <View
        style={{
          marginTop: 'auto',
          marginBottom: 40,
          marginHorizontal: 60,
        }}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 80,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    backgroundColor: COLORS.primary,
    height: imageContainerWidth,
    width: imageContainerWidth,
    borderRadius: imageContainerWidth / 2,
  },
  onboardImage: {
    position: 'absolute',
    width: 310,
    height: 310,
    zIndex: 1,
    right: 0,
    top: -20,
  },
  slideIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    justifyContent: 'center',
  },
  indicator: {
    width: 12,
    height: 12,
    backgroundColor: COLORS.grey,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: COLORS.primary,
    width: 30,
  },
});

export default BoardingScreen;
