import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import CustomImg from '../CustomImage';
import Label from '../Label';

const MultipleImagesGrid = ({ images, onImagePress }) => {
  if (!images || images.length === 0) return null;

  const getGridLayout = () => {
    switch (images.length) {
      case 1:
        return renderSingleImage();
      case 2:
        return renderTwoImages();
      case 3:
        return renderThreeImages();
      case 4:
        return renderFourImages();
      default:
        return renderMultipleImages();
    }
  };

  const renderSingleImage = () => (
    <TouchableOpacity
      onPress={() => onImagePress(images, 0)}
      activeOpacity={0.9}
    >
      <CustomImg source={images[0]} style={styles.singleImage} />
    </TouchableOpacity>
  );

  const renderTwoImages = () => (
    <View style={styles.twoImagesContainer}>
      <TouchableOpacity
        style={styles.twoImageLeft}
        onPress={() => onImagePress(images, 0)}
        activeOpacity={0.9}
      >
        <CustomImg source={images[0]} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.twoImageRight}
        onPress={() => onImagePress(images, 1)}
        activeOpacity={0.9}
      >
        <CustomImg source={images[1]} style={styles.image} />
      </TouchableOpacity>
    </View>
  );

  const renderThreeImages = () => (
    <View style={styles.threeImagesContainer}>
      <TouchableOpacity
        style={styles.threeImageLeft}
        onPress={() => onImagePress(images, 0)}
        activeOpacity={0.9}
      >
        <CustomImg source={images[0]} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.threeImagesRight}>
        <TouchableOpacity
          style={styles.threeImageTop}
          onPress={() => onImagePress(images, 1)}
          activeOpacity={0.9}
        >
          <CustomImg source={images[1]} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.threeImageBottom}
          onPress={() => onImagePress(images, 2)}
          activeOpacity={0.9}
        >
          <CustomImg source={images[2]} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderFourImages = () => (
    <View style={styles.fourImagesContainer}>
      <View style={styles.fourImagesRow}>
        <TouchableOpacity
          style={styles.fourImage}
          onPress={() => onImagePress(images, 0)}
          activeOpacity={0.9}
        >
          <CustomImg source={images[0]} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fourImage}
          onPress={() => onImagePress(images, 1)}
          activeOpacity={0.9}
        >
          <CustomImg source={images[1]} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.fourImagesRow}>
        <TouchableOpacity
          style={styles.fourImage}
          onPress={() => onImagePress(images, 2)}
          activeOpacity={0.9}
        >
          <CustomImg source={images[2]} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fourImage}
          onPress={() => onImagePress(images, 3)}
          activeOpacity={0.9}
        >
          <CustomImg source={images[3]} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderMultipleImages = () => (
    <View style={styles.multipleImagesContainer}>
      <View style={styles.multipleImagesRow}>
        {images.slice(0, 2).map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.multipleImage}
            onPress={() => onImagePress(images, index)}
            activeOpacity={0.9}
          >
            <CustomImg source={image} style={styles.image} />
            {index === 1 && images.length > 3 && (
              <View style={styles.remainingOverlay}>
                <Label
                  labelContent={`+${images.length - 3}`}
                  size={20}
                  color="white"
                  family="bold"
                />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
      {images.length > 2 && (
        <TouchableOpacity
          style={styles.multipleImageBottom}
          onPress={() => onImagePress(images, 2)}
          activeOpacity={0.9}
        >
          <CustomImg source={images[2]} style={styles.image} />
          {images.length > 3 && (
            <View style={styles.remainingOverlay}>
              <Label
                labelContent={`+${images.length - 3}`}
                size={20}
                color="white"
                family="bold"
              />
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {getGridLayout()}

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
  singleImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5,
  },
  // Two Images Layout
  twoImagesContainer: {
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.4,
  },
  twoImageLeft: {
    flex: 1,
    marginRight: 1,
  },
  twoImageRight: {
    flex: 1,
    marginLeft: 1,
  },
  // Three Images Layout
  threeImagesContainer: {
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.4,
  },
  threeImageLeft: {
    flex: 1,
    marginRight: 1,
  },
  threeImagesRight: {
    flex: 1,
  },
  threeImageTop: {
    flex: 1,
    marginBottom: 1,
  },
  threeImageBottom: {
    flex: 1,
    marginTop: 1,
  },
  // Four Images Layout
  fourImagesContainer: {
    height: Dimensions.get('window').height * 0.4,
  },
  fourImagesRow: {
    flexDirection: 'row',
    flex: 1,
  },
  fourImage: {
    flex: 1,
    margin: 0.5,
  },
  // Multiple Images Layout (5+)
  multipleImagesContainer: {
    height: Dimensions.get('window').height * 0.4,
  },
  multipleImagesRow: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 1,
  },
  multipleImage: {
    flex: 1,
    marginHorizontal: 0.5,
  },
  multipleImageBottom: {
    flex: 1,
    marginTop: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  remainingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
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

export default MultipleImagesGrid;
