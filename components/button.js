import { Pressable, StyleSheet, View, Text, Image } from 'react-native';
import Images from '../Themes/images';
import Colors from '../Themes/colors';

export default function Button({ promptAsync }) {
    return (
        <Pressable onPress={() => promptAsync()}>
          <View style={styles.button}>
            <Image style={styles.logo} source={Images.spotify}/>
            <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
          </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.spotify,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '60%',
        paddingVertical: 12,
        borderRadius: 99999
    },
    logo: {
        width: 20,
        height: 20,
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});