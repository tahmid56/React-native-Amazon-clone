import { View, Text, StyleSheet, StatusBar, Image, Pressable, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ReusableButton from '../components/ReusableButton';

export default function RegisterScreen({ navigation }: any) {
    const [userCred, setUserCred] = useState({ email: "", name: "",password: "", });
    const onLoginPress = () => {
        console.warn("Hello there");
    }
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <Image source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" }} style={{ width: 150, height: 100 }} />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.titleText}>
                        Create a new Account
                    </Text>
                </View>
                {/* Email Input */}
                <View style={{ marginTop: 70 }}>
                    <View style={styles.inputField}>
                        <MaterialIcons
                            name="email"
                            size={24}
                            color="gray"
                            style={styles.icon}
                        />
                        <TextInput
                            value={userCred.email}
                            onChangeText={(newValue) => setUserCred({ ...userCred, email: newValue })}
                            style={styles.inputText}
                            placeholder='Enter your email'
                        />
                    </View>
                </View>
                 {/* Name Input */}
                <View style={{ marginTop: 10 }}>
                    <View style={styles.inputField}>
                        <MaterialIcons
                            name="email"
                            size={24}
                            color="gray"
                            style={styles.icon}
                        />
                        <TextInput
                            value={userCred.name}
                            onChangeText={(newValue) => setUserCred({ ...userCred, name: newValue })}
                            style={styles.inputText}
                            placeholder='Enter your name'
                        />
                    </View>
                </View>
                {/* Password Input */}
                <View style={{ marginTop: 10 }}>
                    <View style={styles.inputField}>
                        <AntDesign
                            name="lock"
                            size={24}
                            color="black"
                            style={styles.icon}
                        />
                        <TextInput
                            value={userCred.password}
                            onChangeText={(newValue) => setUserCred({ ...userCred, password: newValue })}
                            style={styles.inputText}
                            placeholder='Enter password'
                        />
                    </View>
                </View>
                <View style={styles.mis}>
                    <Text>Keep me Logged in</Text>
                    <Text style={styles.forgotP}>Forgot Password</Text>
                </View>

                <View style={{ marginTop: 50 }} />

                <ReusableButton onButtonPress={onLoginPress} btnText="Register"/>

                <Pressable style={{ marginTop: 15 }} onPress={() => navigation.navigate("Register")}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Already have an account? Sign In</Text>
                </Pressable>
            </KeyboardAvoidingView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    titleText: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 12,
        color: "#041E42"
    },
    inputField: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#D0D0D0",
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 30
    },
    icon: {
        marginLeft: 8
    },
    inputText: {
        color: "gray",
        marginVertical: 10,
        width: 300,
    },
    mis: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    forgotP: {
        color: "#007FFF",
        fontWeight: "bold",
    },

})