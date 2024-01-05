// import { Button, StyleSheet, Text, View, ToastAndroid } from 'react-native'
// import React, { Component, useEffect, useState, } from 'react'
// import { ScrollView } from 'react-native-gesture-handler';

// interface UserData {
//   firstname: string;
//   lastname: string;
//   email: string;
//   password: string;
// }

// const SaveApiData = () => {

//   const [data, setData] = useState([]);
//   const getAPIdata = async () => {
//     const url = 'http://10.0.2.2:3000/user';
//     let response = await fetch(url);
//     let result = await response.json();
//     if (result) {
//       setData(result)
//     }
//   }
//   const DeleteUser = async (id) => {
//     const url = "http://10.0.2.2:3000/user";
//     // console.warn(`${url} ${id}`)
//     let response = await fetch(`${url}/${id}`, {
//       method: "Delete"
//     });
//     let result = await response.json();
//     if (result) {
//       getAPIdata()
//       ToastAndroid.showWithGravity(
//         'Deleted Succesfully',
//         ToastAndroid.LONG,
//         ToastAndroid.CENTER,
//       );
//     }
//   }
//   useEffect(() => { getAPIdata() }, [])

//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={styles.container}>
//         {data.length ? data.map((item) =>
//           <View style={styles.dataWrapper}>
//             <Text style={styles.txt}>FIRSTNAME: {item.firstname}</Text>
//             <Text style={styles.txt}>LastName :{item.lastname}</Text>
//             <Text style={styles.txt}>Email: {item.email}</Text>
//             <Text style={styles.txt}>Password :{item.password}</Text>
//             <View style={styles.btnContainer}>
//               <View style={styles.buttonWrapper}>
//                 <Button onPress={()=> DeleteUser(item.id)} title='Delete' />
//               </View>
//               <View style={styles.buttonWrapper}>
//                 <Button title='Update' />
//               </View>
//             </View>
//           </View>) : null}
//       </View>
//     </ScrollView>
//   )
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   dataWrapper: {
//     backgroundColor: "orange",
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 10,
//   },
//   txt:{
//     color:'black',
// textAlign:'center',
// fontWeight:'800',
// fontStyle:'italic',
//   },
//   btnContainer: {
//     marginTop: 6,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 7,
//   },
//   buttonWrapper: {
//     height: 50,
//     width: 80,
//     marginRight: 5,
//   },
// })

// export default SaveApiData