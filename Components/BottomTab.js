import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomTab = ({state,descriptors,navigation}) => {
  return (
    <View style={{flexDirection:'row'}}>
       {state.routes.map((route, index) => {
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
          
              <Text style={{ color: isFocused ? 'red' : '#222' }}>
              {label}
            </Text>
           
            
          </Pressable>
        );
      })}
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({})