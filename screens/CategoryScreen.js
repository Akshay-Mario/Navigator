
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../Components/CategoryGridTile";
import { CATEGORIES } from "../data/dummydata";
// import { useNavigation } from "@react-navigation/native";



export default function CategoryScreen({ navigation }) {

    // const navigation = useNavigation();

    function renderCategoryItem(ItemData) {
        function openOverViewScreen() {
            navigation.navigate('Meals Overview', { categoryId: ItemData.item.id })
        }

        return (
            <CategoryGridTile onPress={openOverViewScreen} title={ItemData.item.title} color={ItemData.item.color} />
        );
    }

    return (

        // <Flatlist data={CATEGORIES}  keyExtractor={(Item) => Item.id}
        // renderItem = { (ItemData) => <CategoryGridTile title = {ItemData.title} color = {ItemData.color}/>} />
        <>
            <StatusBar style="light"/>
            <FlatList data={CATEGORIES} keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});