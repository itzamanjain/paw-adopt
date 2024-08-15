import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const PetListItem = ({ pets }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pets?.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pets?.name}</Text>
        <Text style={styles.ageGender}>{`Age: ${pets?.age} | ${pets?.gender}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginTop: 20,
    marginRight: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    alignItems: 'center',
    width: 150,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginBottom: 5,
  },
  ageGender: {
    fontSize: 14,
    color: Colors.GRAY,
  },
});

export default PetListItem;
