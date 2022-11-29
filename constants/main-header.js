import {View, Text, Pressable} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {GlobalStyles} from './constColors';
import {scale} from 'react-native-size-matters';
import Svg, {Path, G} from 'react-native-svg';
import {normalizeText} from '../responsive-text';
export default function MainHeader({navigation, title, onPress}) {
  return (
    <View
      style={{
        height: scale(64),
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        elevation: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
      }}>
      <View style={{flex:1}}>
        <Svg
          width={scale(24)}
          height={scale(24)}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <G>
            <Path
              d="M10 4.5H3"
              stroke="#1A1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M10 9.5H3"
              stroke="#1A1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M21 14.5H3"
              stroke="#1A1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M21 19.5H3"
              stroke="#1A1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M14.5 8.43V5.57C14.5 4.45 14.95 4 16.08 4H18.93C20.05 4 20.5 4.45 20.5 5.57V8.42C20.5 9.55 20.05 10 18.93 10H16.08C14.95 10 14.5 9.55 14.5 8.43Z"
              fill="#F9B400"
              stroke="#F9B400"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </G>
        </Svg>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: normalizeText(16),
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          DDO Dashboard
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Pressable onPress={onPress}>
          <Svg
            width={scale(24)}
            height={scale(24)}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <G>
              <Path
                d="M10.9849 24C12.796 24 14.311 22.7089 14.6589 21H7.31085C7.65894 22.7089 9.17395 24 10.9849 24V24Z"
                fill="#1A1A1A"
              />
              <Path
                d="M17.9969 11.9991C17.9929 11.9991 17.9888 12 17.9848 12C14.1259 12 10.9849 8.85992 10.9849 5.00006C10.9849 3.93896 11.229 2.93591 11.6539 2.03394C11.4339 2.01306 11.2108 2.00006 10.9849 2.00006C7.11897 2.00006 3.98494 5.13391 3.98494 9V11.788C3.98494 13.767 3.11793 15.635 1.59688 16.921C1.08986 17.354 0.864819 18.0439 1.04683 18.717C1.25886 19.5 2.03285 20.0001 2.84492 20.0001H19.1199C19.9719 20.0001 20.775 19.448 20.9478 18.613C21.0819 17.967 20.8519 17.322 20.3509 16.901C18.8969 15.6821 18.0559 13.8909 17.9969 11.9991V11.9991Z"
                fill="#1A1A1A"
              />
              <Path
                d="M22.9849 5.00006C22.9849 7.76147 20.7464 9.99994 17.9848 9.99994C15.2234 9.99994 12.9849 7.76147 12.9849 5.00006C12.9849 2.23865 15.2234 0 17.9848 0C20.7464 0 22.9849 2.23865 22.9849 5.00006Z"
                fill="#F9B400"
              />
            </G>
          </Svg>
        </Pressable>
      </View>
    </View>
  );
}
