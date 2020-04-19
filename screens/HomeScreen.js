import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.img} source={require('../img/home.png')} />
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Find What You</Text>
        <Text style={styles.heading}>Need Service Covid 19</Text>
        <Text style={styles.content}>Find out everything there is to know about covid 19. Lorem, ipsum dolor sit</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('LinksScreen');
          }}
        >
          <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Get Started</Text>
          <Image source={require('../img/next.png')} style={{ width: 20, height: 20, marginLeft: 150 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0379FC',
    padding: 20,
  },
  button: {
    backgroundColor: '#fff',
    height: 52,
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    marginTop: 'auto',
    marginLeft: 40,
    marginRight: 20,
    width: 300,
    flexDirection: 'row',
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    marginTop: 20,
    fontSize: 15,
    color: '#CBD5E0',
    textAlign: 'center',
    marginBottom: 90,
  },
  img: {
    marginRight: 20,
    marginLeft: 10,
    marginTop: 50,
    marginBottom: 35,
  },
});
