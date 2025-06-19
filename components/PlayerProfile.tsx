import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PlayerDoc } from "../types";
import { formatMinutes } from "../components/gameUtils";

interface PlayerProfileProps {
  player: PlayerDoc;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ player }) => {
  const PlayerStatsCard = () => {
    return (
      <View style={styles.container}>
        {player.gamesPlayed ? (
          <>
            <Text style={styles.title}>Games Played: {player.gamesPlayed}</Text>

            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.stat}>
                  Avg PTS: {player.avgPTS?.toFixed(1)}
                </Text>
                <Text style={styles.stat}>
                  Avg REB: {player.avgREB?.toFixed(1)}
                </Text>
                <Text style={styles.stat}>
                  Avg AST: {player.avgAST?.toFixed(1)}
                </Text>
              </View>

              <View style={styles.colWithBorder}>
                <Text style={styles.stat}>
                  Avg STL: {player.avgSTL?.toFixed(1)}
                </Text>
                <Text style={styles.stat}>
                  Avg BLK: {player.avgBLK?.toFixed(1)}
                </Text>
                <Text style={styles.stat}>
                  Avg MP: {formatMinutes(player.avgSecs || 0)}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <Text>No stats available for this player.</Text>
        )}
      </View>
    );
  };

  return (
    <View>
      <View style={styles.topSection}>
        {player.photoURL ? (
          <Image source={{ uri: player.photoURL }} style={styles.playerPhoto} />
        ) : (
          <View style={[styles.playerPhoto, { backgroundColor: "#ccc" }]} />
        )}
        <View style={styles.bioContainer}>
          <Text style={styles.playerName}>
            {player.firstName} {player.lastName}
          </Text>
          {player.dob && <Text style={styles.dob}>DOB: {player.dob}</Text>}
          {player.age && <Text style={styles.age}>Age: {player.age}</Text>}
          {player.height && (
            <Text style={styles.height}>Height: {player.height} cm</Text>
          )}
          {player.weight && (
            <Text style={styles.weight}>Weight: {player.weight} kg</Text>
          )}
        </View>
      </View>

      <View style={styles.overallStatsSection}>
        <Text style={styles.sectionTitle}>Overall Stats:</Text>
        {PlayerStatsCard()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#d1f0d1", // light green
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  col: {
    paddingRight: 8,
    textAlign: "center",
  },
  colWithBorder: {
    paddingLeft: 8,
    borderRadius: 4,
  },
  stat: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "500",
  },

  topSection: {
    flexDirection: "row",
    padding: 16,
  },
  playerPhoto: {
    width: 150,
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#ccc",
  },
  bioContainer: {
    marginLeft: 16,
    flex: 1,
  },
  playerName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 26,
    textAlign: "center",
  },
  dob: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  age: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  height: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  weight: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  overallStatsSection: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    marginLeft: 16,
  },
});

export default PlayerProfile;
