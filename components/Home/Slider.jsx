import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

const Slider = () => {
    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        const fetchSliders = async () => {
            try {
                console.log('Fetching sliders...');
                const snapshot = await getDocs(collection(db, 'Sliders'));
                
                if (!snapshot.empty) {
                    console.log('Documents found:', snapshot.docs.length);
                    const sliders = snapshot.docs.map(doc => {
                        console.log('Document data:', doc.data());
                        return doc.data();
                    });
                    setSliderList(sliders);
                } else {
                    console.log('No documents found.');
                }
            } catch (error) {
                console.error('Error fetching sliders:', error);
            }
        };

        fetchSliders();
    }, []);

    return (
        <View>
            
            <FlatList 
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image 
                            source={{ uri: item?.imageUrl || item?.imageaUrl }}  // Handling both possible fields
                            style={styles.image}
                            resizeMode="cover"  // Adjusts how the image fits in the container
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden', // Ensures the border radius applies to the image
    },
    image: {
        width: 300, // Adjust width as needed
        height: 200, // Adjust height as needed
    }
});

export default Slider;
