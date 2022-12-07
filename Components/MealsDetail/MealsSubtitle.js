import { StyleSheet, Text, View } from "react-native";


export default function Subtitle({children}) {

    return (
        <View style={styles.subtitlecontainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
        );

}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center',

    },
    subtitlecontainer: {
        marginHorizontal: 24,
        marginVertical: 8,
        padding: 8,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
});