import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { GameProps, TeamProps } from '../types';
import { color } from '@rneui/base';

type CompletedGameItemProps = {
  game: GameProps;
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  onPress: (game: GameProps) => void;
};

const CompletedGameItem: React.FC<CompletedGameItemProps> = ({
  game,
  homeTeam,
  awayTeam,
  onPress,
}) => {
  console.log("game", game)
  return (
    <TouchableOpacity style={styles.gameContainer} onPress={() => onPress(game)}>
  <View style={styles.teamRow}>
    {/* Date for the first row */}
    <Text style={styles.teamDateTime}>{'2024-10-05'}</Text>
    <View style={styles.teamInfo}>
      <Image source={{ uri: homeTeam.icon }} style={styles.teamIcon} />
      <Text style={styles.teamName}>{homeTeam.teamName}</Text>
    </View>
    <Text style={styles.teamPoints}>{game.finalPointsHome ?? '-'}</Text>
  </View>
  <View style={styles.teamRow}>
    {/* Time for the second row */}
    <Text style={styles.teamDateTime}>{'15:00'}</Text>
    <View style={styles.teamInfo}>
      <Image source={{ uri: awayTeam.icon }} style={styles.teamIcon} />
      <Text style={styles.teamName}>{awayTeam.teamName}</Text>
    </View>
    <Text style={styles.teamPoints}>{game.finalPointsAway ?? '-'}</Text>
  </View>
</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#D4E8D1', // Changed to match the image's background
    // No need for flexDirection here, as teamRow handles it
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns items vertically in the center
    marginVertical: 4,
    justifyContent: 'space-between', // Distributes space evenly
  },
  teamInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Allows teamInfo to take up available space in the middle
    marginLeft: 10, // Add some space from the date/time
  },
  teamDateTime: {
    color: '#000',
    fontSize: 14, // Slightly larger for better readability, adjust if needed
    fontWeight: 'normal', // The font weight in the image looks regular
    // maxWidth: '25%', // Keep this if you need to constrain width for long dates/times
    width: 80, // Fixed width for consistent alignment (adjust as needed)
    textAlign: 'left', // Ensure text is left-aligned
  },
  teamIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    // maxWidth: '15%', // Remove this, as width/height are fixed
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'normal', // The font weight in the image looks regular
    color: '#333',
    flexShrink: 1, // Allows text to shrink if too long
  },
  teamPoints: {
    fontSize: 16,
    fontWeight: 'bold', // Points are bold in the image
    color: '#000', // Changed to black to match the image
    marginLeft: 10, // Add some space from team name
    width: 40, // Fixed width for consistent alignment (adjust as needed)
    textAlign: 'right', // Align points to the right
  },
});

export default CompletedGameItem;
