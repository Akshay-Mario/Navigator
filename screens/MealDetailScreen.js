import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import Mealdetails from "../Components/MealDetails";
import IconButton from "../Components/MealsDetail/IconComponent";
import List from "../Components/MealsDetail/Lists";
import Subtitle from "../Components/MealsDetail/MealsSubtitle";
import { MEALS } from "../data/dummydata";


export default function MealsDetails({ route }) {

    const id = route.params.id;
    const mealSelected = MEALS.find((x) => x.id == id);
    const navigation = useNavigation();
    let iconColor= '#f8e044'

    function onPressHeaderButton() {
        iconColor='black';
        console.log('hello')
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
            return <IconButton icon='star' color={iconColor} onpress={onPressHeaderButton}/>
                
            }
        }
        );
    }, [navigation, onPressHeaderButton])

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: mealSelected.imageUrl }} />
            <Text style={styles.title}>{mealSelected.title}</Text>
            <Mealdetails affordability={mealSelected.affordability} duration={mealSelected.duration} complexity={mealSelected.complexity} />


            <View style={styles.listouter}>
                <View style={styles.listcontainer}>
                    <Subtitle>Ingredient</Subtitle>
                    <List listvalues={mealSelected.ingredients} />
                    <Subtitle>Receipe</Subtitle>
                    <List listvalues={mealSelected.steps} />
                </View>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 350,
        width: '100%',
    },
    title: {
        margin: 8,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,

    },

    scrollview: {
        height: 200,
        flex: 1
    },
    listcontainer: {
        width: '80%',
    },
    listouter: {
        alignItems: "center",
        marginBottom: 30,
    },
});