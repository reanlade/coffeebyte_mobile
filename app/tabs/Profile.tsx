import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;