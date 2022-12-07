import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { FlatList, Text, View } from "react-native";
import MealsItem from "../Components/MealsItem";
import { CATEGORIES, MEALS } from '../data/dummydata'

export default function MealsOverview({ route, navigation }) {

    const catId = route.params.categoryId

    const filteredMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(catId) >= 0
    });

    useLayoutEffect(() => {
        const categorytitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({
            title: categorytitle
        })
    }, [catId, navigation]
    )


    function rendercategoryItem({ item }) {
        const mealItems = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            duration: item.duration,
            complexity: item.complexity
        }
        return (
            <MealsItem {...mealItems}/>
        );
    }

    return (
        <>
            <StatusBar style="dark"/>
            <View>

                <FlatList data={filteredMeals} keyExtractor={(item) => item.id}
                    renderItem={rendercategoryItem} />
            </View>
        </>

    );
}