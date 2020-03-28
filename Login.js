import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Styles from './Styles'

export default Login = ({navigation}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    handleLogin = async() => {
        navigation.navigate('Home')

        // await fetch('', {
        //     method: 'POST',
        //     body: {
        //         email: email,
        //         password: password,
        //     }
        // }).catch((res) => {
        // })
    }
    
    return(
        <View>
            <View style={{width: '75%', display: 'flex', justifyContent: 'center'}}>
                <View>
                    <TextInput placeholder="Email" 
                        onChangeText={(text) => setEmail(text)}
                        style={{borderBottomWidth: 1, borderBottomColor: 'black'}}/>
                </View>
                <View>
                    <TextInput placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        style={{borderBottomWidth: 1, borderBottomColor: 'black'}}/>
                </View>
                <View>
                    <Button
                        onPress={handleLogin}
                        title="Login"
                    />
                </View>
            </View>
        </View>
    )
}