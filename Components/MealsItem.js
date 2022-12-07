import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Mealdetails from "./MealDetails";


export default function MealsItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function NavigationFunction() {
        navigation.navigate('MealsDetails',{id: id});
    }

    return (
        <View style={styles.mealItem}>
            <View style={styles.mealinner}>
                <Pressable onPress={NavigationFunction} style={({pressed}) =>  pressed ? styles.onpress: null} android_ripple={{color: '#cccccc'}}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.text}>{title}</Text>
                    </View>
                    <Mealdetails affordability={affordability} duration={duration} complexity = {complexity}/>
                </Pressable>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%'
    },
    text: {
        fontWeight: 'bold',
        textAlign: "center",
        margin: 8,
        fontSize: 18,
    },
    mealItem: {

        borderRadius: 10,
        backgroundColor: 'white',
        margin: 16,
        elevation: 8,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 2 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                shadowRadius: 8
            },
           
        })
    },
    mealinner: {
        borderRadius: 8,
        overflow:"hidden"
    },
    mealsDetails: {
        margin: 10,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
    },
    mealitemd: {
        padding: 8,
        fontSize: 12
    },
    onpress: {
        opacity: 0.9,
    }
});