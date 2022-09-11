import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home"; 
import { Intro } from "../screens/Intro";
import { Signup } from "../screens/SignUp";
import { Login } from "../screens/Login";
import { Profile } from "../screens/Profile";
import {Notifications} from "../screens/Notifications";
import {History} from "../screens/History";

const Stack = createStackNavigator();

export function StackNavigation () {
    return(
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Intro" component={Intro}  options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            
        </Stack.Navigator>
    )
}