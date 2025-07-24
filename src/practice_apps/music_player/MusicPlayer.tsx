import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/SpalshScreenBg.jpg")}
        style={styles.backgroundImage}>
        <View style={styles.bottomPanel}>
          <Text style={styles.songTitle}>Freedom Me</Text>
          <Text style={styles.artist}>James Cameron</Text>
          <Text style={styles.timestamp}>-1:51</Text>

          <View style={styles.controls}>
            <Icon name="shuffle" size={28} color="#fff" />
            <Icon name="skip-previous" size={28} color="#fff" />
            <View style={styles.playButton}>
              <Icon name="pause" size={32} color="#000" />
            </View>
            <Icon name="skip-next" size={28} color="#fff" />
            <Icon name="volume-up" size={28} color="#fff" />
          </View>

          <TouchableOpacity style={styles.lyricsButton}>
            <Text style={styles.lyricsText}>Open Lyrics</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58c8f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    borderWidth:1,
    width: '100%',
    height: 600,
    flex:1,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  bottomPanel: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 48,
  },
  songTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  artist: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timestamp: {
    color: '#aaa',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lyricsButton: {
    backgroundColor: '#ccc',
    alignSelf: 'center',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  lyricsText: {
    fontWeight: '600',
    color: '#444',
  },
});
