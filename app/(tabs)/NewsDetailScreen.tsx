import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type NewsDetailScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

interface Props {
  route: NewsDetailScreenRouteProp;
}

const NewsDetailScreen: React.FC<Props> = ({ route }) => {
  const { title, content, imageURL } = route.params;
console.log("object", route.params);
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: imageURL }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7fbf2',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
  },
});

export default NewsDetailScreen;
