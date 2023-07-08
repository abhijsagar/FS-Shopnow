import React from 'react';
import 'expo-router/entry';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigation } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { ProfileScreen, SettingsScreen } from './components/common/header';

const DrawerNavigator = createDrawerNavigation({ ProfileScreen, SettingsScreen });

export default createAppContainer(DrawerNavigator)