import { Image, StyleSheet, Text, View ,TouchableOpacity,Linking} from 'react-native'
import React, { Component } from 'react'


const One = ()=> {
  
    return (
      <View>
        <Image style={styles.img} source={require('../../Assets/image.png')}/>
        <Text style={styles.nametext}>Kaushal-Rathore</Text>
        <Text style={styles.mediatxt}>You can Reach my out from here</Text>
        <TouchableOpacity style={{ marginVertical: 5 }} onPress={()=>{ Linking.openURL("https://github.com/Kaushal-Rathore")}}>
   <Text style={{ alignSelf: 'center', color: '#2575FC' }}>
      Project Links
   </Text>
</TouchableOpacity>
        <TouchableOpacity style={{ marginVertical: 5 }} onPress={()=>{ Linking.openURL("https://www.linkedin.com/in/kaushal-rathore-a9408921b/")}}>
   <Text style={{ alignSelf: 'center', color: '#2575FC' }}>
      Professional Profile
   </Text>
</TouchableOpacity>
        <TouchableOpacity style={{ marginVertical: 5 }} onPress={()=>{ Linking.openURL("https://www.instagram.com/kaushalrathore.09/")}}>
   <Text style={{ alignSelf: 'center', color: '#2575FC' }}>
      Social Profile 
   </Text>
</TouchableOpacity>
      </View>
    )
  }
const styles = StyleSheet.create({
  nametext:{
    fontSize:18,
    color:'orange',
    fontWeight:'600',
    marginTop:12,
  },
  mediatxt:{
fontSize:16,
fontStyle:'italic',
fontWeight:'600',
textAlign: 'center',
marginTop:5,
  },
text:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    color:"red"
},
img:{
    height:"65%",
    width:'100%',
}
})

 export default One