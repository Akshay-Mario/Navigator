import { StyleSheet, Text, View } from "react-native";


export default function List({ listvalues }) {

    return (
        <>
            {listvalues.map((list) => (
                <View style={styles.listItem} key={list}>
                    <Text style={styles.itemText}>{list}
                    </Text>
                </View>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginHorizontal: 8,
        marginVertical: 4,
        borderRadius: 6
    },
    itemText: {
        justifyContent: "center",
        textAlign: "center"
    }
});