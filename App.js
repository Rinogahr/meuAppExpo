import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const img = { rui: './'}

export default function App() {
  return (
    <ImageBackground source={ require('./img/joao.jpg') } style={styles.img}>
        <View style={styles.container}>
          <Text style={styles.joao}>João Cagão vai aprender a programar</Text>
          <StatusBar style="auto" />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  joao:{
    color: '#fafa',
    fontSize: 55
  },
  img:{
    flex: 1,
    backgroundColor: 'red',
  }
});
