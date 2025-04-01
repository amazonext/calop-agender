import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

export default function Route({ name, component }) {
    return <createStackNavigator.Screen name={name} component={component} />;
}