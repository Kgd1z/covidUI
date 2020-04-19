import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ImageBackground } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Symptom from '../components/symptom';
import Requirements from '../components/requirements';
export default function LinksScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../img/group.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 330 }}>
          <Image source={require('../img/bell.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="ios-search" style={styles.searchIcon} size={20} color="#A0AEC0" />
        <TextInput placeholder="Type Something" style={styles.input}></TextInput>
      </View>

      <View>
        <ScrollView scrollEventThrottle={16} style={{ marginBottom: 30 }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Symptoms</Text>
          </View>

          <View style={{ height: 130, marginTop: 20, marginLeft: 0 }}>
            <ScrollView style={{ marginLeft: 0 }} horizontal={true} showsHorizontalScrollIndicator={false}>
              <Symptom imgUri={require('../img/cough.png')} name={'Cough'} />
              <Symptom imgUri={require('../img/head.jpg')} name={'Headache'} />
              <Symptom imgUri={require('../img/fever.jpg')} name={'Fever'} />
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      <ImageBackground style={{ height: 200, width: 380, marginBottom: 30 }} source={require('../img/cover.png')}>
        <TouchableOpacity
          style={{
            width: 120,
            height: 40,
            marginTop: 140,
            marginLeft: 130,
            backgroundColor: '#0379FC',
            justifyContent: 'center',
            paddingLeft: 25,
          }}
        >
          <Text style={{ color: '#fafafa' }}>Learn More</Text>
        </TouchableOpacity>
      </ImageBackground>

      <View style={{ marginTop: 'auto' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Requirements</Text>
        <ScrollView scrollEventThrottle={16} style={{ marginBottom: 30 }}>
          <View style={{ height: 80, marginTop: 20 }}>
            <ScrollView style={{ marginLeft: 0 }} horizontal={true} showsHorizontalScrollIndicator={false}>
              <Requirements imgUri={require('../img/nosemask.png')} />
              <Requirements imgUri={require('../img/glove.png')} />
              <Requirements imgUri={require('../img/sanitizer.png')} />
              <Requirements imgUri={require('../img/water.png')} />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },

  input: {
    backgroundColor: '#ffffff',
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingLeft: 40,
    borderRadius: 5,
    fontSize: 16,
  },

  inputContainer: {
    position: 'relative',
    marginTop: 20,
  },

  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 15,
    left: 15,
  },
});
