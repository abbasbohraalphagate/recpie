import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
// make sure to install: npm install react-native-vector-icons

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    if (open) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setOpen(false));
    } else {
      setOpen(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const menuStyle = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Share icon button */}
      <Ionicons
        onPress={toggleMenu}
        name="shield-half"
        size={26}
        color="#444"
      />

      {/* Floating vertical menu */}
      {open && (
        <Animated.View style={[styles.menuContainer, menuStyle]}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="add-outline" size={22} color="#444" />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="arrow-redo-outline" size={22} color="#444" />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="flag-outline" size={22} color="#444" />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },
  menuContainer: {
    position: 'absolute',
    bottom: 50,
    right: -10,
    backgroundColor: '#ffffffdd',
    borderRadius: 16,
    paddingVertical: 6,
    elevation: 5,
    alignItems: 'center',
    width: 50,
  },
  menuItem: {
    padding: 8,
  },
  separator: {
    height: 1,
    width: '70%',
    backgroundColor: '#ddd',
  },
});

export default FloatingMenu;
