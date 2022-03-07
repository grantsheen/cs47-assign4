import { WebView } from 'react-native-webview';

export default function DetailedSong({ route }) {
  return (
    <WebView source={{ uri: route.params.url}}/>
  )
}