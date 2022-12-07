import { StyleSheet, Text, View } from "react-native";


export default function Mealdetails({duration, complexity, affordability}) {
    return (
        <View style={styles.mealsDetails}>
            <Text style={styles.mealitemd}>{duration}m</Text>
            <Text style={styles.mealitemd}>{complexity.toUpperCase()}</Text>
            <Text style={styles.mealitemd}>{affordability.toUpperCase()}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
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
});