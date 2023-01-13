import {Pressable, StyleSheet, View, Text, Dimensions} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { GlobalStyles } from './constColors';

function CustomButton({name,size,color,children,onpress,}) {
  return (
    <View style={{}}>
      <Pressable
      
        onPress={onpress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.button}>
        <MatIcon name={name} size={size} color={color} />
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CustomButton;
const DeviceHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  button: {
    flexDirection:'row',
    borderRadius: 6,
    padding: DeviceHeight < 720 ? 6 : 9,
    backgroundColor: GlobalStyles.colors.mainC,
    alignItems:'center',
    justifyContent:'center',
    minWidth: DeviceHeight < 720 ? 60 : 90,
    
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: DeviceHeight < 720 ? 10 : 16,
    
  },

  pressed: {
    opacity: 0.25,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});