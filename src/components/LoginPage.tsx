import { Text, View, TextInput, SafeAreaView, Image, StyleSheet, Button, ToastAndroid } from 'react-native'
import React, { useState, useRef } from 'react';

const LoginPage = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailerror, setEmailerror] = useState(false)
    const [passworderror, setPassworderror] = useState(false)

    const handleLogin = async () => {

        setEmailerror(false);
        setPassworderror(false);

        if (!email) {
            setEmailerror(true);
        }

        if (!password) {
            setPassworderror(true);
        }

        // If there are no validation errors, attempt to log in
        // if (!emailerror && !passworderror) {
        //   const url = 'http://10.0.2.2:3000/'; // Replace with your authentication endpoint
        //   try {
        //     let response = await fetch(url, {
        //       method: 'POST',
        //       headers: { 'Content-Type': 'application/json' },
        //       body: JSON.stringify({ email, password }),
        //     });

        //     let result = await response.json();

        //     if (result.success) {
        //       navigation.navigate('Home');
        //     } else {
        //       ToastAndroid.showWithGravity(
        //         'Invalid email or password',
        //         ToastAndroid.LONG,
        //         ToastAndroid.CENTER
        //       );
        //     }
        //   } catch (error) {
        //     console.error('Error during login:', error);
        //   }
        // }
    };
    const disabledButton = email === "" || password ===""

    return (
        <View style={styles.container}>
            <Image source={require('../Assets/Picture1.jpg')} resizeMode="cover" style={styles.image} />
            <TextInput
                placeholder="Email"
                value={email}
                style={styles.input}
                returnKeyLabel="next"
                returnKeyType="next"
                onChangeText={(text) => setEmail(text)}

            />
            {emailerror ? <Text style={styles.texterror} >Email is not Valid!</Text> : null}
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                returnKeyLabel="go"
                returnKeyType="go"
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
            />
            {passworderror ? <Text style={styles.texterror} >Email is not Valid!</Text> : null}
            <Button title="Login" onPress={() => navigation.navigate('Home')} disabled={disabledButton} />
            <Text
                style={styles.registerText} onPress={() => navigation.navigate('Registration')}>
                Don't have an account? Register here.
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 12.5,
        marginBottom: 8
    },
    image: {
        height: "60%",
        width: "100%",
    },
    text: {
        fontSize: 23,
        marginBottom: 12,
        fontWeight: 'bold',
    },
    input: {
        color: 'red',
        borderColor: 'gray',
        width: 150,
        padding: 11,
        fontSize: 13,
        borderRadius: 3,
        alignItems: 'center'
    },
    registerText: {
        marginTop: 20,
        color: 'blue',
    },
    texterror: {
        color: 'red',
        fontSize: 10,
        shadowColor: 'black',
        marginRight: 30

    }
})
export default LoginPage
