import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Category from './Category';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import PetListItem from './PetListItem';

const PetListByCategory = () => {
  const [petList, setPetList] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    // Initialize with a default category if needed, or wait for category selection
    getPetList('Cat'); // Example: Fetch pets for the 'Dog' category on component mount
  }, []);

  const getPetList = async (category) => {
    try {
      setLoader(true);
      console.log("Selected Category: ", category);
      setPetList([]);
      
      const q = query(collection(db, 'Pets'), where('Category', '==', category));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No pets found for this category");
      } else {
        const pets = querySnapshot.docs.map(doc => doc.data());
        setPetList(pets);
      }
    } catch (error) {
      console.error("Error fetching pet list: ", error);
    }finally{
      setLoader(false);
    }
  };

  return (
    <View>
      <Category category={(value) => getPetList(value)} />
      
      <FlatList 
        data={petList}
        horizontal={true}
        refreshing={loader}
        onRefresh={() => getPetList('Cat')} // Example: Refresh the list for the 'Cat' category
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PetListItem pets={item} key={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default PetListByCategory;
