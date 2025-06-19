import { GameStats } from '../types';
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface GameRowProps {
  game: GameStats;
  onPress: (gameID: string) => void;
}

const GameRow: React.FC<GameRowProps> = ({ game, onPress }) => {
  const resultLabel = game.isWin ? 'W' : 'L'; // Image shows 'L' only, so we'll simplify based on that
  const finalScoreParts = game.finalScore ? game.finalScore.split('-') : ['', '']; // Split score for 109-63 format
  const teamScore = finalScoreParts[0];
  const opponentScore = finalScoreParts[1];

  return (
    <TouchableOpacity onPress={() => onPress(game.gameID)} style={styles.gameRowContainer}>
      <View style={styles.mainContent}>
        <View style={styles.leftColumn}>
          <Text style={styles.opponentTeamName}>{game.opponentTeamName}</Text>
          <View style={styles.scoreResultRow}>
            <Text style={styles.scoreText}>{game.finalScore}</Text>
            <Text style={styles.resultLabel}> {resultLabel}</Text>
          </View>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.statLine}>
            <Text style={styles.statLabel}>PTS:</Text>
            <Text style={styles.statValue}>{game.points}</Text>
            <Text style={styles.statLabel}>STL:</Text>
            <Text style={styles.statValue}>{game.steals}</Text>
          </View>
          <View style={styles.statLine}>
            <Text style={styles.statLabel}>REB:</Text>
            <Text style={styles.statValue}>{game.rebounds}</Text>
            <Text style={styles.statLabel}>BLK:</Text>
            <Text style={styles.statValue}>{game.blocks}</Text>
          </View>
          <View style={styles.statLine}>
            <Text style={styles.statLabel}>AST:</Text>
            <Text style={styles.statValue}>{game.assists}</Text>
            <Text style={styles.statLabel}>MP:</Text>
            <Text style={styles.statValue}>{game.minutes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gameRowContainer: {
    backgroundColor: '#D4E8D1', // Light green background from the image
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftColumn: {
    flex: 1, // Takes up available space
    marginRight: 15, // Space between left and right columns
  },
  opponentTeamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  scoreResultRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24, // Larger font size for the score
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },
  resultLabel: {
    fontSize: 24, // Same large font size
    fontWeight: 'bold',
    color: '#000', // Image shows 'L' in black
  },
  rightColumn: {
    // No flex: 1 here, let content dictate width
  },
  statLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4, // Space between stat lines
  },
  statLabel: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'normal', // Labels are not bold in the image
    width: 35, // Fixed width for labels to align values (adjust as needed)
    textAlign: 'right', // Align label text to the right
    marginRight: 5, // Space between label and value
  },
  statValue: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold', // Values are bold in the image
    width: 35, // Fixed width for values to align (adjust as needed)
    textAlign: 'left', // Align value text to the left
    marginRight: 10, // Space between value and next label
  },
});

export default GameRow;