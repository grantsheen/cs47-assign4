import { StyleSheet, SafeAreaView } from "react-native";
import Colors from "./Themes/colors";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import DetailedSong from './screens/DetailedSong';
import SongPreview from './screens/SongPreview';

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main Screen' component={MainScreen} 
                              options={{ headerShown: false }}/>
                <Stack.Screen name='Song Details' component={DetailedSong} 
                              options={{ headerStyle: {backgroundColor: 'black'},
                                         headerTitleStyle: {color: 'white'},
                                         title: 'Song Details',
                                         headerBackTitle: 'Back'}}/>
                <Stack.Screen name='Song Preview' component={SongPreview}
                              options={{ headerStyle: {backgroundColor: 'black'},
                                         headerTitleStyle: {color: 'white'},
                                         title: 'Song Preview',       
                                         headerBackTitle: 'Back'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

