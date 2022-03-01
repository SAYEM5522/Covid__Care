import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing} from 'react-native-reanimated'
import { MotiView } from 'moti';

const BottomTab = ({state,descriptors,navigation,open}) => {

  return (
    <Animated.View style={[{flexDirection:'row'}]}>
       {
       state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
          
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={state.routes[index].key}
          >          
          {   
            
            <MotiView
            style={styles.MainTab}
            >
             {
               options.tabBarIcon({color:isFocused?'white':'#222',size:24})
             }
             <MotiView
                  from={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1.5, }}
                    transition={{
                   type: 'timing',
                  duration: 350,
                  easing: Easing.bezier(0.4, 0, 0.2, 0.9)
                }}
             style={[{backgroundColor:isFocused?'black':null},styles.TabStyle]}
             />
             </MotiView>
             
          }             
          </Pressable>
        );
      })
      }
      
         
      
    </Animated.View>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  TabStyle:{
    height:40,
    width:40,
    position:'absolute',
    borderRadius:40,
    top:-6,
    zIndex:-1000
  },
  MainTab:{
    zIndex:1000,
    alignItems:'center',
    justifyContent:'center',
  }
})