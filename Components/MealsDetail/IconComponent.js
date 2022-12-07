import { Pressable, StyleSheet } from "react-native";
import { Ionicons} from '@expo/vector-icons';

export default function IconButton({ icon, onpress, color }) {

    return(
        <Pressable onPress={onpress} style={({pressed})=> pressed ? [styles.pressed]: null}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.3,
    },    
});
