import { StyleSheet, Text, SafeAreaView, View, Image, Pressable } from "react-native";
import Colors from "../Themes/colors";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Song({ title, artist, image, album, duration, external_url, preview_url }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Pressable style={styles.container} onPress={() => navigation.navigate('Song Details', {url: external_url})}>
                <Pressable style={styles.play} 
                           onPress={(e) => {
                                e.stopPropagation();
                                navigation.navigate('Song Preview', {url: preview_url})}}>
                    <Ionicons name='play-circle' size={32} color='#1DB954'/>
                </Pressable>
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.info}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <Text style={styles.artist} numberOfLines={1}>{artist}</Text>
                </View>
                <Text style={styles.album} numberOfLines={1}>{album}</Text>
                <Text style={styles.duration}>{duration}</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 7
    },
    play: {
        flex: 1,
        marginLeft: 10
    },
    image: {
        flex: 2,
        aspectRatio: 1 / 1,
        marginHorizontal: 8
    },
    info: {
        flex: 4,
        marginHorizontal: 8
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
        marginHorizontal: 4
    },
    duration: {
        flex: 1,
        color: 'white',
        marginHorizontal: 4
    }
});