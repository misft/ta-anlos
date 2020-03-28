import React from 'react'
import {View, Text, Button} from 'react-native'

export default Presence = ({navigation}) => {
    activateCamera = () => {
        navigation.navigate("CameraPresence")
    }

    return(
        <View>
            <Text>Presence</Text>
            <Button title="Presensi" onPress={this.activateCamera}/>
        </View>
    )
}
