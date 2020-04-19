import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function Requirements(props) {
    return (
        <View style={{ marginLeft: 0, height: 60, width: 10, marginRight: 90 }}>
            <View>
                <Image source={props.imgUri} style={{
                    height: 70, width: 70,
                      borderRadius: 7
                }}/>

                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 4, marginTop: 105 }}>{props.name}</Text>

                 
            </View>
        </View>
    );
}
