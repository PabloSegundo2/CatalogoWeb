import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';
import { Box, NativeBaseProvider, Avatar } from 'native-base';

const APIPRUEBA = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCategories = async () => {
     try {
      const response = await fetch('https://testapi.wapizima.com/api/products');
      const json = await response.json();
      setData(json.navegadores);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <NativeBaseProvider>
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Box>
              <Text style={{color: 'black'}}>Nombre: {item.name}</Text>
              <Text style={{color: 'black'}}>precio: {item.price}</Text>
              
              <Avatar size="60px" source={{uri: item.imageMobile}} />
            </Box>
          )}
        />
      )}
    </View>
    </NativeBaseProvider>
  );
};

 export default APIPRUEBA ;