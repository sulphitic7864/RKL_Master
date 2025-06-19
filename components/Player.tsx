import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

interface PlayerData {
  id: string;
  firstName?: string;
  lastName?: string;
  photoURL?: string;
}

interface PlayerProps {
  player: PlayerData;
  onPress: (playerId: string) => void;
}

const Player: React.FC<PlayerProps> = ({ player, onPress }) => {
  return (
    <Pressable style={styles.playerRow} onPress={() => onPress(player.id)}>
      {player.photoURL ? (
        <Image source={{ uri: player.photoURL }} style={styles.playerImage} />
      ) : (
        <View style={[styles.playerImage, { backgroundColor: '#ccc' }]} />
      )}
      <Text style={styles.playerName}>
        {player.firstName ?? 'Unknown'} {player.lastName ?? ''}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: '#D4E8D1', // Background color from the image
    borderRadius: 8,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#000', // Basic shadow for depth
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerName: {
    fontSize: 16,
    fontWeight: "bold"
  },
});

export default Player;
