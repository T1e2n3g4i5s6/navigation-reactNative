import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screen/detail";
const Mystack = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="Bottom" component={}/>

            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
    )
}
export default Mystack;