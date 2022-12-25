import { StatusBar } from 'expo-status-bar';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverview from './screens/MealsOverviewScreen';
import MealsDetails from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/Favorites';
import { Ionicons} from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator
    screenOptions={
      {
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: 'black'},
        drawerContentStyle: {backgroundColor: 'black'},
        drawerInactiveTintColor: 'white'
      }
    }>
      <Drawer.Screen name="Categories" component={CategoryScreen}
        options= {{
          title: 'All Categories',
          drawerIcon: ({color,size}) => <Ionicons name="list" color={color} size={size}/>
        }}/>
      <Drawer.Screen name="Favorites" component={FavoriteScreen}
      options={{
        drawerIcon: ({color,size}) => <Ionicons name="star" color={color} size={size}/>

      }}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style = "light"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DrawerCategory" component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false,
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
