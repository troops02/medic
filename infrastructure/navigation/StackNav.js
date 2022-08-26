import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home"; 
import { Intro } from "../screens/Intro";
import { Signup } from "../screens/SignUp";
import { Login } from "../screens/Login";
import { Profile } from "../screens/Profile";

const Stack = createStackNavigator();

export function StackNavigation () {
    return(
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Intro" component={Intro}  options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}