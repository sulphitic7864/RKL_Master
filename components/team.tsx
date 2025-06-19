import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { firestore } from "../app/firebaseConfig";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import Player from "./Player";

interface Team {
  teamName?: string;
  icon?: string;
  teamPhoto?: string;
  headCoach?: string;
  assistantCoach?: string;
  teamManager?: string;
}

interface PlayerData {
  id: string;
  firstName?: string;
  lastName?: string;
  photoURL?: string;
}

interface TeamScreenNav {
  navigate: (
    screenName: "PlayerScreen",
    params: { teamID: string; playerID: string }
  ) => void;
}

const Team: React.FC<{ teamName: string }> = ({ teamName }) => {
  const navigation = useNavigation<TeamScreenNav>();
  const [teamData, setTeamData] = useState<Team | null>(null);
  const [players, setPlayers] = useState<PlayerData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);

        const teamDocRef = doc(firestore, "teams", teamName);
        const teamDoc = await getDoc(teamDocRef);

        if (teamDoc.exists()) {
          setTeamData(teamDoc.data() as Team);
        } else {
          setTeamData({});
        }

        const playersColl = collection(firestore, `teams/${teamName}/players`);
        const playersSnap = await getDocs(playersColl);
        const loadedPlayers: PlayerData[] = playersSnap.docs.map((p) => {
          const playerData = p.data() as PlayerData;
          return {
            ...playerData,
            id: p.id,
          };
        });

        setPlayers(loadedPlayers);
      } catch (err) {
        console.error("Error fetching team data:", err);
        setTeamData({});
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, [teamName]);

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (!teamData) {
    return <Text>No team data found.</Text>;
  }

  const handlePlayerPress = (playerId: string) => {
    navigation.navigate("PlayerScreen", {
      teamID: teamName,
      playerID: playerId,
    });
  };

  return (
    <View style={styles.container}>
      {teamData.teamPhoto && (
        <Image source={{ uri: teamData.teamPhoto }} style={styles.teamPhoto} />
      )}

      {teamData.teamName && (
        <View style={styles.teamContainer}>
          {teamData.icon && (
            <Image source={{ uri: teamData.icon }} style={styles.icon} />
          )}
          <Text style={styles.teamNameText}>
            {teamData.teamName}
          </Text>
        </View>
      )}

      {teamData.headCoach && <Text>Head Coach: {teamData.headCoach}</Text>}
      {teamData.assistantCoach && (
        <Text>Assistant Coach: {teamData.assistantCoach}</Text>
      )}
      {teamData.teamManager && <Text>Manager: {teamData.teamManager}</Text>}

      <Text style={styles.subheading}>Players:</Text>

      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Player player={item} onPress={handlePlayerPress} />
        )}
        nestedScrollEnabled
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 90,
    verticalAlign: "middle",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#D4E8D1",
  },
  teamPhoto: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  teamContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingBottom: 10, 
  },
  teamNameText: {
    fontSize: 24,
    fontWeight: 'bold', 
    color: '#333', 
    textDecorationStyle: 'solid',
    
    marginLeft: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});
