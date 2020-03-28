import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'

const CameraPresence = () => {
    return(
        <View>
            <RNCamera
                ref={ref => {
                    this.camera = ref;  
                  }}
                  type={RNCamera.Constants.Type.back}
                  flashMode={RNCamera.Constants.FlashMode.on}
                  androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                  }}
                  androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                  }}
                  onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                  }}
            />
            <View>
                <TouchableOpacity onPress={this.takePicture()}>
                    <Text>
                        Snap!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CameraPresence

takePicture = async() => {
    return new Promise((res, rej) => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    });
}