import { Dimensions, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import Svg, { Circle, G } from 'react-native-svg'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  Easing,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { selectCount } from '../../features/InTrackerSlice';
const BACKGROUND_COLOR = 'black';
const BACKGROUND_STROKE_COLOR = '#49887B';
const STROKE_COLOR = '#fff';
const { width, height } = Dimensions.get('window');
const CIRCLE_LENGTH = 500; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);
const HALF_WIDTH = R + 15;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 80,
    width: width * 0.7,
    height: 60,
    backgroundColor: BACKGROUND_STROKE_COLOR,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    letterSpacing: 2.0,
  },
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',

  },
  TextAnimation:{
    fontSize: R / 3,
    fontWeight: "500",
    textAlign: "center",
    textShadowColor: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    elevation: 3,
    color:"white",
    ...StyleSheet.absoluteFill
  }

})
const clamp = (x ,min, max) => {
  "worklet";
  if (x < min) return min;
  if (x > max) return max;
  return x;
};
const InfectionRate = () => {
  const progress = useSharedValue(0);
  const t=useSelector(selectCount)
  const inputRef = React.useRef();
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const convert=()=>{
    'worklet';
   const result=(t/10)*1/0.6
    return{
          result
    }
  }
  useEffect(()=>{
    progress.value=withTiming(convert().result,{duration:1000,easing:Easing.linear})
  },[])
  const animatedInputProps = useAnimatedProps(() => {
    const percentComplete = clamp(progress.value, 0, 1);

    return {
      text: `${Math.round(100 * percentComplete)}%`,     
    };
  });
  return (
    <Animated.View style={[styles.container,]}>
        <Svg
         width={R * 2}
         height={R * 2}
        viewBox={`${-HALF_WIDTH} ${-HALF_WIDTH} ${2 * HALF_WIDTH} ${
          2 * HALF_WIDTH
        }`}
        >
         <G rotation={"-90"} >
        <Circle
          cx={0}
          cy={0}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={15}
        />
      
        <AnimatedCircle
          cx={0}
          cy={0}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
          fill="transparent"
        />
        </G>
      </Svg>
      <AnimatedTextInput
          editable={false}
          defaultValue="0%"
          style={styles.TextAnimation}
          animatedProps={animatedInputProps}
        />
    </Animated.View>
  )
}

export default InfectionRate
