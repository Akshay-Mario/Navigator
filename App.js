import { StatusBar } from 'expo-status-bar';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverview from './screens/MealsOverviewScreen';
import MealsDetails from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style = "light"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsContainer" component={CategoryScreen}
            options={{
              title: 'All Categories',
              headerStyle: {
                backgroundColor: 'black',
                color: 'white',
                
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#000000'
              }
            }} />
          <Stack.Screen name="Meals Overview" component={MealsOverview} 
            //  options={({ route, navigation })=>{
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId,
            //   };
            //  }}
             />
          <Stack.Screen name="MealsDetails" component={MealsDetails}
          //  options = {{
          //   headerRight: () => {
          //     return(
          //       <Button title='Tap Me!' />
          //     );
          //   }
          //  }} 
           />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <CategoryScreen style={styles.container} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootStyle: {
    ...Platform.select({
      android: {
        marginTop: 40
      }
    })
  }
});
