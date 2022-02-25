import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import Svg, { Circle } from 'react-native-svg'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useAnimatedStyle,
  interpolate,
  Easing,
} from 'react-native-reanimated';
const BACKGROUND_COLOR = 'black';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#fff';
const { width, height } = Dimensions.get('window');
const CIRCLE_LENGTH = 1000; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);
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

})
const InfectionRate = () => {
  const progress = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:CIRCLE_LENGTH * (1 - progress.value),
  }));
  const onPress = useCallback(() => {
    'worklet'
    progress.value = withTiming(progress.value=0.7,{ duration: 250 });
  }, [])
  const AnimatedStyle=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateX:withTiming(interpolate(progress.value,[0,1],[width/2,0],{easing:Easing.linear,duration:1000}))
      }]
    }
  })

  return (
    <Animated.View style={[styles.container,]}>
        <Svg style={{ position: 'absolute' }}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
        />
      </Svg>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Check</Text>
      </Pressable>
    </Animated.View>
  )
}

export default InfectionRate
