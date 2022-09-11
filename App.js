import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./infrastructure/navigation/StackNav";
import { Service } from "./infrastructure/screens/Service"
import { Home } from "./infrastructure/screens/Home";


export default function App() {
    return(
        // <NavigationContainer>
        //     <StackNavigation/>
        // </NavigationContainer>
            
        // <Service/>
        <Home/>
    )
}