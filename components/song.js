import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import Colors from "../Themes/colors";

export default function Song({ title, artist, index, image, album, duration }) {
    return (
        <SafeAreaView style={styles.song}>
            <Text style={styles.index}>{index}</Text>
            <Image source={{uri: image}} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.artist} numberOfLines={1}>{artist}</Text>
            </View>
            <Text style={styles.album} numberOfLines={1}>{album}</Text>
            <Text style={styles.duration}>{duration}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    song: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 7
    },
    index: {
        flex: 1,
        fontSize: 16,
        color: Colors.gray,
        textAlign: 'center'
    },
    image: {
        flex: 2,
        aspectRatio: 1 / 1,
        marginHorizontal: 7
    },
    info: {
        flex: 4,
        marginHorizontal: 7
    },
    title: {
        color: 'white'
    },
    artist: {
        color: Colors.gray
    },
    album: {
        flex: 3,
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 7
    },
    duration: {
        flex: 1,
        color: 'white',
        marginHorizontal: 7
    }
});