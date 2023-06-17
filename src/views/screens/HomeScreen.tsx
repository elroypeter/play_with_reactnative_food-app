import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Text from '../../components/Text';
import COLORS from '../../constants/colors';
import View from '../../components/View';

import IconSearch from '../../assets/icons/search.svg';
import IconTune from '../../assets/icons/tune.svg';
import IconAdd from '../../assets/icons/add.svg';
import categories from '../../constants/categories';
import foods from '../../constants/foods';
import {generateBoxShadow} from '../../utils/boxShadow';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}: any) => {
  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      {/* header */}
      <View styles={{...styles.headerContainer}}>
        <View>
          <View styles={{flexDirection: 'row'}}>
            <Text styles={{fontSize: 28}}>Hello, </Text>
            <Text styles={{fontSize: 28, fontWeight: 'bold'}}>Ariz</Text>
          </View>
          <Text styles={{fontSize: 18, color: COLORS.grey}}>
            What do you want today
          </Text>
        </View>

        <View>
          <Image
            style={styles.profileImage}
            source={require('../../assets/person.png')}
          />
        </View>
      </View>
      {/* search */}
      <View styles={{...styles.searchContainer}}>
        <View styles={{...styles.searchBox}}>
          <IconSearch
            style={{marginRight: 5}}
            fill={COLORS.dark}
            height={30}
            width={30}
          />
          <TextInput
            placeholder="Search for food"
            placeholderTextColor={COLORS.grey}
            style={{
              flex: 1,
              color: COLORS.grey,
            }}
            underlineColorAndroid={'transparent'}
          />
        </View>

        <TouchableOpacity>
          <View styles={{...styles.filterBtn}}>
            <IconTune fill={COLORS.white} height={30} width={30} />
          </View>
        </TouchableOpacity>
      </View>

      {/* categories */}
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Category
            item={item}
            index={index}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        )}
        style={{
          marginTop: 20,
          paddingLeft: 20,
          height: 80,
        }}
      />

      {/* food list */}
      <FlatList
        data={foods}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <FoodCard item={item} index={index} navigation={navigation} />
        )}
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
};

const Category = ({item, index, currentCategory, setCurrentCategory}: any) => {
  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.8}
      style={{marginRight: 10}}
      onPress={() => setCurrentCategory(index)}>
      <View
        styles={{
          ...styles.categoryContianer,
          backgroundColor:
            currentCategory === index ? COLORS.primary : COLORS.secondary,
        }}>
        <View styles={{...styles.imaegCard, marginRight: 10}}>
          <Image style={{height: 35, width: 35}} source={item.image} />
        </View>
        <Text
          styles={{
            color: currentCategory === index ? COLORS.white : COLORS.primary,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const FoodCard = ({item, index, navigation}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('DetailsScreen', item)}>
      <View styles={{...styles.cardContainer}}>
        <Image
          source={item.image}
          style={{height: 150, width: 150, top: -50}}
        />
        <View styles={{marginTop: 'auto'}}>
          <Text styles={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
          <Text styles={{color: COLORS.grey, fontSize: 12}}>
            {item.ingredients}
          </Text>
        </View>
        <View
          styles={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text styles={{fontSize: 16, fontWeight: 'bold'}}>$8.30</Text>
          <View
            styles={{
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
            }}>
            <IconAdd fill={COLORS.white} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchContainer: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  searchBox: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.light,
  },
  filterBtn: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  categoryContianer: {
    height: 45,
    width: 140,
    backgroundColor: COLORS.secondary,
    borderRadius: 22.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  imaegCard: {
    height: 37,
    width: 37,
    borderRadius: 18.5,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    height: 250,
    width: (width - 40) / 2,
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    marginVertical: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 10,
    ...generateBoxShadow(2, 5, 10, COLORS.dark, 10, 0.2),
  },
});

export default HomeScreen;
