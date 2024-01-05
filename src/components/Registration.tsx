import React, { Component, useState, } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ToastAndroid, ImageBackground } from 'react-native'

interface UserData {
    firstname: string;
    lastname: string;
    password: string;
    email: any;
}
const Registration = ({ navigation }: any) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstnameerror, setFirstNameerror] = useState(false)
    const [lastnameerror, setLastnameerror] = useState(false)
    const [emailerror, setEmailerror] = useState(false)
    const [paasworderror, setPassworderror] = useState(false)

    const saveData = async () => {

        if (!firstname) {
            setFirstNameerror(true)
        } else {
            setFirstNameerror(false)
        }

        if (!lastname) {
            setLastnameerror(true)
        } else {
            setLastnameerror(false)
        }

        if (!email) {
            setEmailerror(true)
        } else {
            setEmailerror(false)
        }
        if (password === "" || password.length < 6) {
            setPassworderror(true)
        } else {
            setPassworderror(false)
        }
        if (!firstname || !lastname || !password || !email) {
            return false
        }
        const userDataType: UserData = {
            firstname: firstname,
            lastname: lastname,
            password: password,
            email: email,
        };
        const url = 'http://10.0.2.2:3000/user'
        // POST METHOD APPLY TO POST DATA //
        let response = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(userDataType)
        });
        let result = await response.json()
        if (result) {
            navigation.navigate('login');
            ToastAndroid.showWithGravity(
                'Signup successful',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
            );
        }

    }
    const disabledButton = email === "" || password ==="" || firstname === "" || lastname === ""

    return (
            <ImageBackground source={require('../Assets/Registration.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
            <Text style={styles.registration}>Registration</Text>
            <TextInput
                placeholder="FirstName"
                value={firstname}
                style={styles.input}
                onChangeText={(text) => setFirstname(text)}
            />
            {firstnameerror ? <Text style={styles.texterror}>Firstname is not Valid!</Text> : null}
            <TextInput
                placeholder="LastName"
                value={lastname}
                style={styles.input}
                onChangeText={(text) => setLastname(text)}
            />
            {lastnameerror ? <Text style={styles.texterror}>Lastname is not Valid!</Text> : null}
            <TextInput
                placeholder="Email"
                value={email}
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
            />
            {emailerror ? <Text style={styles.texterror} >Email is not Valid!</Text> : null}
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                style={styles.input}
                keyboardType='numeric'
                onChangeText={(text) => setPassword(text)}
            />
            {paasworderror ? <Text style={styles.texterror}>Password is not Valid!</Text> : null}
            <Button title="Register" onPress={saveData} disabled={disabledButton}  />
            <Text
                style={styles.loginText}
                onPress={() => navigation.navigate('login')}>
                Already have an account? Login here.
            </Text>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    registration: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 12,
        color:'orange'
    },
    texterror: {
        color: 'red',
        fontSize: 10,
        shadowColor: 'black',
        marginRight: 30

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    input: {
        height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
    marginBottom: 10,
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
    loginText: {
        marginTop: 20,
        color: 'blue',
        borderRadius: 10,
    }
})

export default Registration
