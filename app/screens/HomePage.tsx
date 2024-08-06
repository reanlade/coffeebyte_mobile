import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import TabNavigator from '../tabs/TabNavigator';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const diagnoses = [
    {},
  ];

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const filteredDiagnoses = diagnoses.filter(() => true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchQuery}
          placeholderTextColor="#808080"
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recent Diagnosis</Text>
      </View>
      {filteredDiagnoses.map((_, index) => (
        <View key={index} style={styles.diagnosisItem}>
          <View style={styles.diagnosisDetails}>
            <Text style={styles.diagnosisText}>No details available</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.seeMoreButton}>
        <Text style={styles.seeMoreText}>See More</Text>
      </TouchableOpacity>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EC',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#808080',
    paddingHorizontal: 15,
    borderRadius: 50,
    height: 44,
    width: 200,
    color: '#FFFFFF',
    marginRight: 10,
  },
  iconContainer: {
    backgroundColor: '#3E735B',
    borderRadius: 50,
    padding: 10,
  },
  iconText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E735B',
  },
  diagnosisItem: {
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  diagnosisDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  diagnosisText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
  seeMoreButton: {
    backgroundColor: '#3E735B',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
    width: 160,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 50,
    padding: 8,
  },
});

export default HomePage;