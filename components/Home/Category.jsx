import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Category = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('cat');

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = async () => {
        const snapShot = await getDocs(collection(db, 'Category'));
        const categories = [];
        snapShot.forEach(doc => {
            categories.push(doc.data());
        });
        setCategoryList(categories);
    };

    return (
        <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
                Categories
            </Text>
            <FlatList
                data={categoryList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center', marginRight: 16 }}>
                        <TouchableOpacity
                            onPress={() => setSelectedCategory(item.name)}
                            style={[
                                {
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: selectedCategory === item.name ? '#ff6347' : '#f0f0f0',
                                    shadowColor: '#000',
                                    shadowOpacity: 0.2,
                                    shadowRadius: 8,
                                    shadowOffset: { width: 0, height: 2 },
                                },
                            ]}
                        >
                            <Image
                                source={{ uri: item?.imageUrl }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 8, fontSize: 14, color: '#333' }}>
                            {item?.name}
                        </Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Category;
