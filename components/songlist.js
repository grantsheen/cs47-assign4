import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Colors from "../Themes/colors";
import Images from "../Themes/images"
import getDuration from "../utils/millisToMinuteSeconds";
import Song from "../components/song";

export default function TopTracks( {tracks} ) {
    const renderItem = ({item}) => {
        return (
            <Song 
            image = {item.album.images[1].url}
            title = {item.name}
            artist = {item.album.artists[0].name}
            album = {item.album.name}
            duration = {getDuration(item.duration_ms)}
            external_url = {item.external_urls.spotify}
            preview_url = {item.preview_url}
            />
        )
    };
    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <Image source={Images.spotify} style={styles.logo} />
                <Text style={styles.titleStyle}>My Top Tracks</Text>
            </View>
            <FlatList
                data={tracks}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
        marginVertical: 10
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 180,
        paddingVertical: 10      
    },
    logo: {
        width: 16,
        height: 16
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});