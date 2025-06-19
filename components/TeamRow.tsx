import React from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';

export interface TeamRowProps {
  place: number;
  team: any;
  showDetails: boolean;
  onPress: () => void;
  getPlaceTextColor: (place: number, division?: string) => object;
}

const TeamRow: React.FC<TeamRowProps> = ({
  place,
  team,
  onPress,
  getPlaceTextColor,
}) => {
  const colorStyle = getPlaceTextColor(place, team.division);
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.mainRow}>
        <Text style={[styles.placeText, colorStyle]}>{place}.</Text>
        <View style={styles.teamInfo}>
          {team.icon ? (
            <Image source={{ uri: team.icon }} style={styles.teamIcon} />
          ) : (
            <View style={styles.placeholderIcon} />
          )}
          <Text style={styles.teamName}>
            {team.teamName ?? 'Unnamed'}
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsColumn}>
            <Text style={styles.statNumber}>{team.gamesPlayed ?? 0}</Text>
            <Text style={styles.statLabel}>GP</Text>
          </View>
          <View style={styles.statsColumn}>
            <Text style={styles.statNumber}>{team.wins ?? 0}</Text>
            <Text style={styles.statLabel}>W</Text>
          </View>
          <View style={styles.statsColumn}>
            <Text style={styles.statNumber}>{team.losses ?? 0}</Text>
            <Text style={styles.statLabel}>L</Text>
          </View>
          <View style={styles.statsColumn}>
            <Text style={styles.statNumber}>{team.standingPoints ?? 0}</Text>
            <Text style={styles.statLabel}>PTS</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
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
    borderColor: "#000",
    borderWidth: 1,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeText: {
    fontSize: 14, // Larger font size for the rank
    fontWeight: 'bold', // Bold as in the image
    color: '#000', // Black color as in the image
    marginRight: 8,
    width: 25, // Fixed width to align team info
  },
  teamInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Allows team info to take up available space
  },
  teamIcon: {
    width: 30, // Larger icon size
    height: 30, // Larger icon size
    borderRadius: 15, // Half of width/height for circular icon
    marginRight: 8,
  },
  placeholderIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    marginRight: 8,
  },
  teamName: {
    fontSize: 16, // Larger font size for team name
    fontWeight: 'normal', // Regular weight as in image
    color: '#000', // Black color
    flexShrink: 1, // Allow text to wrap if too long
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end', // Align numbers and labels to the bottom
  },
  statsColumn: {
    alignItems: 'center', // Center content within each stats column
    marginLeft: 15, // Space between stats columns
  },
  statNumber: {
    fontSize: 18, // Larger font for numbers
    fontWeight: 'bold', // Bold as in the image
    color: '#000', // Black color
    marginBottom: 2, // Small space between number and label
  },
  statLabel: {
    fontSize: 10, // Smaller font for labels (GP, W, L, PTS)
    color: '#555', // Grey color for labels
    fontWeight: 'normal',
  },
});

export default TeamRow;