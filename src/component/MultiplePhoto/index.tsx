import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import CustomImg from '../CustomImage';
import Label from '../Label';

const MultiplePhotos = ({ images, onImagePress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Main Image */}
      <TouchableOpacity onPress={onImagePress} activeOpacity={0.9}>
        <CustomImg
          source={images[currentIndex]}
          style={styles.mainImage}
          resizeMode="cover"
        />
      </TouchableOpacity>

      {/* Navigation Dots */}
      {images.length > 1 && (
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      )}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          {currentIndex > 0 && (
            <TouchableOpacity
              style={[styles.arrow, styles.leftArrow]}
              onPress={handlePrev}
            >
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
          )}
          {currentIndex < images.length - 1 && (
            <TouchableOpacity
              style={[styles.arrow, styles.rightArrow]}
              onPress={handleNext}
            >
              <Ionicons name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>
          )}
        </>
      )}

      {/* Multiple Photos Indicator */}
      {images.length > 1 && (
        <View style={styles.multipleIndicator}>
          <Ionicons name="copy-outline" size={16} color="white" />
          <Label
            labelContent={images.length.toString()}
            size={12}
            color="white"
            style={styles.indicatorText}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#0095F6',
  },
  inactiveDot: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftArrow: {
    left: 10,
  },
  rightArrow: {
    right: 10,
  },
  multipleIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  indicatorText: {
    marginLeft: 4,
    fontWeight: 'bold',
  },
});

export default MultiplePhotos;
