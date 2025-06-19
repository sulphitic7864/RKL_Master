import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScheduledGameProps, TeamProps } from '../types';

type ScheduledGameItemProps = {
  scheduledGame: ScheduledGameProps;
  homeTeam?: TeamProps;
  awayTeam?: TeamProps;
};

const ScheduledGameItem: React.FC<ScheduledGameItemProps> = ({
  scheduledGame,
  homeTeam,
  awayTeam,
}) => {
  return (
    <View style={styles.gameContainer}>
  <View style={styles.leftColumn}>
    <Text style={styles.gameDateText}>2024-10-10</Text>
    <Text style={styles.gameTimeText}>19:30</Text>
  </View>

  <View style={styles.centerColumn}>
    <View style={styles.teamRow}>
      <Image source={{ uri: homeTeam?.icon || '' }} style={styles.teamIcon} />
      <Text style={styles.teamName}>{homeTeam?.teamName || scheduledGame.homeTeam}</Text>
    </View>

    <View style={styles.teamRow}>
      <Image source={{ uri: awayTeam?.icon || '' }} style={styles.teamIcon} />
      <Text style={styles.teamName}>{awayTeam?.teamName || scheduledGame.awayTeam}</Text>
    </View>
  </View>

  <View style={styles.rightColumn}>
    <Text style={styles.arenaText}>
      {scheduledGame.arena ? scheduledGame.arena : ''}
    </Text>
  </View>
</View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#D4E8D1',
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'space-between', // Distribute space between columns
    alignItems: 'center', // Align items vertically in the center
  },
  leftColumn: {
    alignItems: 'flex-start', // Align date and time to the left
    maxWidth: '25%', // Prevent overflow
  },
  centerColumn: {
    flex: 1, // Allows this column to take up available space
    justifyContent: 'center',
    paddingHorizontal: 10, // Add some spacing
    maxWidth: '45%', // Prevent overflow
    flexGrow: 1, // Allow this column to grow if needed
    flexShrink: 1, // Allow this column to shrink if needed
  },
  rightColumn: {
    alignItems: 'flex-end', // Align arena text to the right
    justifyContent: 'center',
    textAlign: 'right', // Ensure text itself is right-aligned
    maxWidth: '30%', // Adjust as needed to prevent overflow
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  teamIcon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 5,
  },
  teamName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  gameDateText: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20, // Space between date and time
  },
  gameTimeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  arenaText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'right', // Ensure text is right-aligned within its container
  },
  // The 'vsContainer', 'vsText', and 'bottomRow' styles from your original code are not needed for this layout.
});

export default ScheduledGameItem;
