import { Button, StyleSheet, Text, View, ToastAndroid, Modal } from 'react-native'
import React, { Component, useEffect, useState, } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

interface UserData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

const SaveApiData = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(undefined)
    const getAPIdata = async () => {
        const url = 'http://10.0.2.2:3000/user';
        let response = await fetch(url);
        let result = await response.json();
        if (result) {
            setData(result)
        }
    }
    const DeleteUser = async (id:any) => {
        const url = "http://10.0.2.2:3000/user";
        // console.warn(`${url} ${id}`)
        let response = await fetch(`${url}/${id}`, {
            method: "Delete"
        });
        let result = await response.json();
        if (result) {
            getAPIdata()
            ToastAndroid.showWithGravity(
                'Deleted Succesfully',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
            );
        }
    }
    useEffect(() => { getAPIdata() }, [])

    const updateUser = (data:any)=> {
        setShowModal(true)
        setSelectedUser(data)
    }

    const UserModal = (props:any) => {
        const [firstname, setFirstname] = useState(undefined)
        const [lastname, setLastname] = useState(undefined)
        const [password, setPassword] = useState(undefined)
        const [email, setEmail] = useState(undefined)
        console.log(props.selectedUser)

        useEffect(() => {
            if (props.selectedUser) {
                setFirstname(props.selectedUser.firstname)
                setLastname(props.selectedUser.lastname)
                setPassword(props.selectedUser.password)
                setEmail(props.selectedUser.email)
            }
        }, [props.selectedUser])

        const updateUser = async () => {
            // console.warn(firstname,lastname,email,props.selectedUser.id)
            const id = props.selectedUser.id
            const url = "http://10.0.2.2:3000/user";
            const response = await fetch(`${url}/${id}`, {
                method: 'Put',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ firstname, lastname, email, password })
            })
            let result = await response.json();
            if (result) {
                console.log(result)
                props.getAPIdata()
                props.setShowModal(false)
            }

        }
        return (
            <View style={styles.centeredView}>
                <View style={styles.modalview}>
                    <TextInput style={styles.input} placeholder='Firstname' value={firstname} onChangeText={(text) => setFirstname(text)}></TextInput>
                    <TextInput style={styles.input} placeholder='Lastname' value={lastname} onChangeText={(text) => setLastname(text)}></TextInput>
                    <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                    <TextInput style={styles.input} value={password} placeholder='password' onChangeText={(text) => setPassword(text)}></TextInput>
                    <View style={{ marginBottom: 15 }}>
                        <Button title='Save' onPress={updateUser}></Button>
                    </View>
                    <Button title='close' onPress={() => props.setShowModal(false)}></Button>
                </View>
            </View>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {data.length ? data.map((item) =>
                    <View style={styles.dataWrapper}>
                        <Text style={styles.txt}>FirstName: {item.firstname}</Text>
                        <Text style={styles.txt}>LastName :{item.lastname}</Text>
                        <Text style={styles.txt}>Email: {item.email}</Text>
                        <Text style={styles.txt}>Password :{item.password}</Text>
                        <View style={styles.btnContainer}>
                            <View style={styles.buttonWrapper}>
                                <Button onPress={() => DeleteUser(item.id)} title='Delete' />
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Button title='Update' onPress={() => updateUser(item)} />
                            </View>
                        </View>
                    </View>) : null}
                <Modal visible={showModal} transparent={true}>
                    <UserModal setShowModal={setShowModal} selectedUser={selectedUser} getAPIdata={getAPIdata} />
                </Modal>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
    dataWrapper: {
        backgroundColor: '#FFD700',
        marginBottom: 12,
        padding: 20,
        borderRadius: 20,
    },
    txt: {
        color: 'black',
        textAlign: 'center',
        fontWeight: '800',
        fontStyle: 'italic',
        marginBottom: 5,
    },
    btnContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    buttonWrapper: {
        flex: 1,
        marginTop: 3,
        marginHorizontal: 9,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 23
    },
    modalview: {
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.90,
        elevation: 8,
        marginTop: 23
    },
    input: {
        borderWidth: 1,
        borderColor: 'skyblue',
        width: 170,
        marginBottom: 12
    }

})

export default SaveApiData;