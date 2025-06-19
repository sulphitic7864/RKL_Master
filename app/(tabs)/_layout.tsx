import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./index";
import NewsDetailScreen from "./NewsDetailScreen";
import StandingsScreen from "./standings";
import ScheduleScreen from "./schedule";
import GameDetailsScreen from "./GameDetailScreen";
import StatisticsScreen from "./statistics";
import TeamScreen from "./TeamScreen";
import PlayerScreen from "./PlayerScreen";
import { ThemeProvider, createTheme } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons';

export type RootStackParamList = {
  Index: undefined;
  NewsDetail: { title: string; content: string; imageURL: string };
};

export type ScheduleStackParamList = {
  ScheduleMain: undefined;
  GameDetails: { gameID: number };
};

export type StandingsStackParamList = {
  StandingsMain: undefined;
  TeamScreen: { teamName: string };
  PlayerScreen: { playerID: string };
};
export type StatisticsStackParamList = {
  StatisticsMain: undefined;
  PlayerScreen: { playerID: string; teamID: string };
  GameDetails: { gameID: number };
};

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<RootStackParamList>();
const ScheduleStack = createNativeStackNavigator<ScheduleStackParamList>();
const StandingsStack = createNativeStackNavigator<StandingsStackParamList>();

const theme = createTheme({
  lightColors: { primary: "#fff" },
  darkColors: { primary: "#bb86fc" },
});

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Index"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

function ScheduleStackScreen() {
  return (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen
        name="ScheduleMain"
        component={ScheduleScreen}
        options={{ headerShown: false }}
      />
      <ScheduleStack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={{ headerShown: false }}
      />
    </ScheduleStack.Navigator>
  );
}

function StandingsStackScreen() {
  return (
    <StandingsStack.Navigator>
      <StandingsStack.Screen
        name="StandingsMain"
        component={StandingsScreen}
        options={{ headerShown: false }}
      />
      <StandingsStack.Screen
        name="TeamScreen"
        component={TeamScreen}
        options={{ headerShown: false }}
      />
      <StandingsStack.Screen
        name="PlayerScreen"
        component={PlayerScreen}
        options={{ headerShown: false }}
      />
      <ScheduleStack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={{ headerShown: false }}
      />
    </StandingsStack.Navigator>
  );
}

function StatisticsStackScreen() {
  const StatisticsStack =
    createNativeStackNavigator<StatisticsStackParamList>();

  return (
    <StatisticsStack.Navigator>
      <StatisticsStack.Screen
        name="StatisticsMain"
        component={StatisticsScreen}
        options={{ headerShown: false }}
      />
      <StatisticsStack.Screen
        name="PlayerScreen"
        component={PlayerScreen}
        options={{ headerShown: false }}
      />
      <ScheduleStack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={{ headerShown: false }}
      />
    </StatisticsStack.Navigator>
  );
}

export default function AppTabs() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        {/* <Tab.Navigator initialRouteName="News"> 
        <Tab.Navigator
          initialRouteName="News"
          screenOptions={{
            tabBarStyle: {
              backgroundColor: "#67cf78", // ✅ your custom color
            },
            headerShown: false, // optional, hides top header
          }}
        >
          <Tab.Screen
            name="ScheduleStack"
            component={ScheduleStackScreen}
            options={{ headerShown: false, title: "Schedule" }}
          />
          <Tab.Screen
            name="StandingsStack"
            component={StandingsStackScreen}
            options={{ headerShown: false, title: "Standings" }}
          />
          <Tab.Screen
            name="News"
            component={HomeStackScreen}
            options={{ headerShown: false, title: "News" }}
          />
          <Tab.Screen
            name="StatisticsStack"
            component={StatisticsStackScreen}
            options={{ headerShown: false, title: "Statistics" }}
          />
        </Tab.Navigator>*/}
        <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName = '';

      switch (route.name) {
        case 'Schedule':
          iconName = 'calendar-outline';
          break;
        case 'Standings':
          iconName = 'trophy-outline';
          break;
        case 'News':
          iconName = 'newspaper-outline';
          break;
        case 'Statistics':
          iconName = 'stats-chart-outline';
          break;
      }

      return <Icon name={iconName} size={24} color={color} />;
    },
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#000',
    tabBarStyle: {
      backgroundColor: '#67cf78',
      paddingBottom: 5,
      height: 60,
    },
    tabBarLabelStyle: {
      fontSize: 12,
    },
    headerShown: false,
  })}
>
  <Tab.Screen name="Schedule" component={ScheduleScreen} />
  <Tab.Screen name="Standings" component={StandingsStackScreen} />
  <Tab.Screen name="News" component={HomeStackScreen} />
  <Tab.Screen name="Statistics" component={StatisticsStackScreen} />
</Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
