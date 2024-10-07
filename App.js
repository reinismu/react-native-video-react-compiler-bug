import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNVideo from 'react-native-video';

export default function App() {
    return (
        <View style={styles.container}>
            <RNVideo
                source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                style={styles.video}
                repeat
                muted
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    video: {
        width: "100%",
        height: 300,
    },
});
