import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';


export default function App() {
  const [valor, setValor] = useState<number>();
  return (
    <View style={styles.container}>
      <Text>{valor}</Text>
     <Slider
     style={{width:200, height:40}}
     minimumValue={0}
     step={5}
     maximumValue={100}
     minimumTrackTintColor="#000"
     maximumTrackTintColor="#3333ff"
     thumbImage={{uri:('https://i.pinimg.com/originals/d9/d7/79/d9d7796f0b3834832ffd44c177fb4370.png')}}
     onValueChange={(val)=> setValor(val)}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
