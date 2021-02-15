import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import yelp from "../api/yelp";
import { Linking } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  console.log(result);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <Text>{result.location.display_address}</Text>
      <Text>{result.phone}</Text>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL(`${result.url}`)}
      >
        Yelp
      </Text>

      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
