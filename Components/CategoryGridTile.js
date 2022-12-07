import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

// import { useNavigation } from "@react-navigation/native";

// const navigation = useNavigation();

export default function CategoryGridTile({ title, color, onPress }) {

    return (
        <View style={[styles.container]}>
            <Pressable onPress={onPress} style = {({pressed}) => [styles.button, pressed ? styles.buttonpressed : null]} android_ripple={{color: '#ccccc'}}>
                <View style = {[styles.innercontainer,  {backgroundColor: color}]}>
                    <Text style = {styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 16,
        flex:1,
        height: 150,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    button: {
        flex: 1,
    },
    innercontainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 16,
        borderRadius: 10,

    },
    buttonpressed: {
        ...Platform.select({
            ios: {
                opacity: 0.5,
            },
            android: {
                flex: 1
            }
        })
    },
});

