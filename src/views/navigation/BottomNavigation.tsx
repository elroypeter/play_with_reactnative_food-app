import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import COLORS from '../../constants/colors';

import IconHome from '../../assets/icons/home.svg';
import IconBag from '../../assets/icons/local_mall.svg';
import IconCart from '../../assets/icons/shopping_cart.svg';
import IconSearch from '../../assets/icons/search.svg';
import IconHeartSolid from '../../assets/icons/favorite-solid.svg';
import {View} from 'react-native';
import {generateBoxShadow} from '../../utils/boxShadow';
import CartScreen from '../screens/CartScreen';

const TabBar = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <TabBar.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <TabBar.Screen
        name="HomeScreenTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}: any) => (
            <IconHome fill={color} height={28} width={28} />
          ),
        }}
      />
      <TabBar.Screen
        name="ShopScreenTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}: any) => (
            <IconBag fill={color} height={28} width={28} />
          ),
        }}
      />
      <TabBar.Screen
        name="SearchScreenTab"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: COLORS.white,
                height: 50,
                width: 50,
                borderRadius: 25,
                borderColor: COLORS.primary,
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
                top: -25,
                ...generateBoxShadow(1, 1, 10, COLORS.grey, 2, 0.6),
              }}>
              <IconSearch fill={COLORS.primary} height={28} width={28} />
            </View>
          ),
        }}
      />
      <TabBar.Screen
        name="FavoriteScreenTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}: any) => (
            <IconHeartSolid fill={color} height={28} width={28} />
          ),
        }}
      />
      <TabBar.Screen
        name="CartScreenTab"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}: any) => (
            <IconCart fill={color} height={28} width={28} />
          ),
        }}
      />
    </TabBar.Navigator>
  );
};

export default BottomNavigation;
