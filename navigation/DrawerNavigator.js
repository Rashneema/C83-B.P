/*
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from '../navigation/TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator =()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
*/

//CLASS 84

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigation";
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator =()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
