/*eslint-disable*/
import React, { Component, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'

const Home = ({ navigation }: any) => {
  const [count, setCount] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=20'
        );
        const data = await response.json();
        setCount(data);
      } catch (error) {
        setError('check your Link');
      }
    };
    fetchData();
  }, []);
  return (
    <View>
      <ScrollView scrollEnabled={true}>
        <View style={styles.navigate}>
          <Button title='Segment' onPress={() => navigation.navigate("Main")}></Button>
        </View>
        <View style={styles.containermain}>
          {count.map(({ id, title, price, image }) => (
            <View key={id} style={styles.userCard}>
              <Text style={styles.userName} numberOfLines={1}>
                {title}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemDetail', { item: { id, title } })
                }>
                <Image source={{ uri: image }} style={styles.userImage} />
              </TouchableOpacity>
              <Text style={styles.userprice}>Price: ${price}</Text>
              <View style={styles.button}>
                <Text style={styles.buynow}>Buy Now</Text>
                <Text style={styles.addcart}>Add Cart</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
    // <Button title='ApiData' onPress={()=> navigation.navigate("SaveApiData")}></Button> */}
    //<Button title='Segment' onPress={()=> navigation.navigate("Main")}></Button>
  )
}
const styles = StyleSheet.create({
  navigate: {
    flex: 1,
  },
  containermain: {
    backgroundColor: '#dcdcdc',
  },
  userCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 1,
  },
  userImage: {
    height: 350,
    width: 350,
    borderRadius: 300 / 1.5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginBottom: 7,
    marginTop: 7,
  },
  buynow: {
    padding: 7,
    borderRadius: 6,
    backgroundColor: 'skyblue',
    marginRight: 13,
  },
  addcart: {
    borderRadius: 6,
    padding: 7,
    backgroundColor: 'lightgreen',
  },
  userName: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingTop: 7,
    marginTop: 7,
    marginBottom: 7,
    paddingBottom: 5,
    color: 'orange',
  },
  userprice: {
    justifyContent: 'center',
    marginTop: 4,
  },
})

export default Home
/*eslint-disable*/

