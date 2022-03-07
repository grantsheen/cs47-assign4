import { WebView } from 'react-native-webview';

export default function SongPreview({ route }) {
  return (
    <WebView source={{ uri: route.params.url}}/>
  )
}