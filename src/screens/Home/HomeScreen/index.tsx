import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import { COLORS, FONTS, genericStyles } from '../../../constant';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import FlatListComponent from '../../../Flatlist';
import CustomImg from '../../../component/CustomImage';
import Label from '../../../component/Label';
import OverlappingAvatars from '../../../component/MultiplePhoto/OverLapImages';
import RowLabel from '../../../component/Label/RowLabel';
import CommentsSection from './CommentSection';
import FloatingMenu from '../../../component/FloatingMenu';
import { Fontisto } from '@react-native-vector-icons/fontisto';

const HomeScreen: React.FC = props => {
  const { width, height } = useWindowDimensions();
  const [isLandscape, setIsLandscape] = useState(width > height);
  const [imageHeights, setImageHeights] = useState<{ [key: string]: number }>(
    {},
  );
  const [posts, setPosts] = useState<any>([]);
  const [selectInfoType, setSelectInfoType] = useState('');

  useEffect(() => {
    props?.navigation.setOptions({
      headerLeft: null,
      headerTitle: 'NewsFeed',
      headerStyle: { height: 80 },
      headerTitleStyle: { fontSize: 20, fontFamily: FONTS.PoppinsSemiBold },
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            paddingRight: 15,
          }}
        >
          <Ionicons name="camera-outline" size={35} />
          <Ionicons name="chatbox-outline" size={35} />
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      const { width, height } = window;
      setIsLandscape(width > height);
      // Recalculate all image heights when orientation changes
      recalculateAllHeights();
    });

    return () => subscription?.remove();
  }, []);

  const handleImageLoad = (imageUrl: any, index: number, event: any) => {
    const { width: imageWidth, height: imageHeight } = event.nativeEvent;
    calculateAndSetHeight(imageWidth, imageHeight, index);
  };

  const calculateAndSetHeight = (
    imageWidth: number,
    imageHeight: number,
    index: number,
  ) => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    // Calculate aspect ratio
    const aspectRatio = imageWidth / imageHeight;

    let calculatedHeight: number;

    if (isLandscape) {
      // Landscape mode - use more width
      calculatedHeight = (screenWidth * 0.9) / aspectRatio;
      // Limit maximum height in landscape
      calculatedHeight = Math.min(calculatedHeight, screenHeight * 0.6);
    } else {
      // Portrait mode - use full width
      calculatedHeight = screenWidth / aspectRatio;
      // Limit maximum height in portrait
      calculatedHeight = Math.min(calculatedHeight, screenHeight * 0.5);
    }

    // Set minimum height
    calculatedHeight = Math.max(calculatedHeight, 150);

    setImageHeights(prev => ({
      ...prev,
      [index]: calculatedHeight,
    }));
  };

  const recalculateAllHeights = () => {
    // This would need to be implemented if you want to recalculate all heights on orientation change
    // You might need to store the original image dimensions and recalculate
    console.log('Orientation changed - recalculate heights if needed');
  };

  const getImageHeight = (index: number) => {
    return imageHeights[index] || (isLandscape ? 400 : 500); // Default fallback heights
  };

  const feeds = [
    {
      name: 'Abbas',
      profile: require('../../../assets/images/profile1.jpg'),
      image_url: require('../../../assets/images/profile1.jpg'),
      info: 'Red chilli chicken with black paper and crunchi nuts',
      time: 'Min 30',
      images: [
        require('../../../assets/images/profile1.jpg'),
        require('../../../assets/images/profile2.jpg'),
        require('../../../assets/images/profile.jpg'),
      ],
      comments: [
        {
          id: 'c1',
          username: 'PeterPan',
          userAvatar: require('../../../assets/images/profile2.jpg'),
          text: 'Tried this myself and was delicious! Thanks chef Ramsey',
          time: '3d',
          replies: [
            {
              id: 'r1',
              username: 'Heston1',
              userAvatar: require('../../../assets/images/profile1.jpg'),
              text: 'Glad you liked it!',
              time: '2d',
            },
          ],
        },
        {
          id: 'c2',
          username: 'FoodLover',
          userAvatar: require('../../../assets/images/profile2.jpg'),
          text: 'delicious! Thanks chef Ramsey',
          time: '3d',
          replies: [],
        },
      ],
      Ingredients: [
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
      ],
      Instruction: {
        heading1: 'Prep Time 10 Mins',
        heading2: 'Cook Time 10 Mins',
        info: [
          {
            title: 'step 1',
            value:
              'In a medium sized bowl combine ground beef, panko, parsley, allspice, nutmeg, onion, garlic powder, pepper. salt and egg. Mix until combined.',
          },
          {
            title: 'step 2',
            value:
              'Roll into 12 large meatballs or 20 small meatballs. In a large skillet heat olive oil and 1 Tablespoon butter. Add the meatballs and cook turning continuously until brown on each side and cooked throughout. Transfer to a plate and cover with foil.',
          },
        ],
      },
      showComments: false,
    },
    {
      name: 'Abbas',
      profile: require('../../../assets/images/profile1.jpg'),
      image_url: require('../../../assets/images/profile2.jpg'),
      info: 'Red chilli chicken with black paper and crunchi nuts',
      time: 'Min 30',
      images: [
        require('../../../assets/images/profile1.jpg'),
        require('../../../assets/images/profile2.jpg'),
        require('../../../assets/images/profile.jpg'),
      ],
      comments: [
        {
          id: 'c1',
          username: 'PeterPan',
          userAvatar: require('../../../assets/images/profile2.jpg'),
          text: 'Tried this myself and was delicious! Thanks chef Ramsey',
          time: '3d',
          replies: [
            {
              id: 'r1',
              username: 'Heston1',
              userAvatar: require('../../../assets/images/profile1.jpg'),
              text: 'Glad you liked it!',
              time: '2d',
            },
          ],
        },
        {
          id: 'c2',
          username: 'FoodLover',
          userAvatar: require('../../../assets/images/profile2.jpg'),
          text: 'delicious! Thanks chef Ramsey',
          time: '3d',
          replies: [],
        },
      ],
      Ingredients: [
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
      ],
      Instruction: {
        heading1: 'Prep Time 10 Mins',
        heading2: 'Cook Time 10 Mins',
        info: [
          {
            title: 'step 1',
            value:
              'In a medium sized bowl combine ground beef, panko, parsley, allspice, nutmeg, onion, garlic powder, pepper. salt and egg. Mix until combined.',
          },
          {
            title: 'step 2',
            value:
              'Roll into 12 large meatballs or 20 small meatballs. In a large skillet heat olive oil and 1 Tablespoon butter. Add the meatballs and cook turning continuously until brown on each side and cooked throughout. Transfer to a plate and cover with foil.',
          },
        ],
      },
      showComments: false,
    },
    {
      name: 'Abbas',
      profile: require('../../../assets/images/profile1.jpg'),
      image_url: require('../../../assets/images/profile2.jpg'),
      info: 'Red chilli chicken with black paper and crunchi nuts',
      time: 'Min 30',
      images: [
        require('../../../assets/images/profile1.jpg'),
        require('../../../assets/images/profile2.jpg'),
        require('../../../assets/images/profile.jpg'),
      ],
      comments: [
        {
          id: 'c1',
          username: 'PeterPan',
          userAvatar: require('../../../assets/images/profile2.jpg'),
          text: 'Tried this myself and was delicious! Thanks chef Ramsey',
          time: '3d',
          replies: [
            {
              id: 'r1',
              username: 'Heston1',
              userAvatar: require('../../../assets/images/profile1.jpg'),
              text: 'Glad you liked it!',
              time: '2d',
            },
          ],
        },
        {
          id: 'c2',
          username: 'FoodLover',
          userAvatar: require('../../../assets/images/profile2.jpg'),
          text: 'delicious! Thanks chef Ramsey',
          time: '3d',
          replies: [],
        },
      ],
      Ingredients: [
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
        { name: 'Beef', value: '1 kilo' },
      ],
      Instruction: {
        heading1: 'Prep Time 10 Mins',
        heading2: 'Cook Time 10 Mins',
        info: [
          {
            title: 'step 1',
            value:
              'In a medium sized bowl combine ground beef, panko, parsley, allspice, nutmeg, onion, garlic powder, pepper. salt and egg. Mix until combined.',
          },
          {
            title: 'step 2',
            value:
              'Roll into 12 large meatballs or 20 small meatballs. In a large skillet heat olive oil and 1 Tablespoon butter. Add the meatballs and cook turning continuously until brown on each side and cooked throughout. Transfer to a plate and cover with foil.',
          },
        ],
      },
      showComments: false,
    },
    // ... rest of your feed items
  ];

  const handleAddComment = (postId: any, commentText: any) => {
    setPosts((prevPosts: any) =>
      prevPosts.map((post: any) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now().toString(),
                  username: 'CurrentUser', // You would use actual user data
                  userAvatar: require('../../../assets/images/profile2.jpg'),
                  text: commentText,
                  time: 'Just now',
                  replies: [],
                },
              ],
            }
          : post,
      ),
    );
  };

  const handleAddReply = (postId: any, commentId: any, replyText: any) => {
    setPosts((prevPosts: any) =>
      prevPosts.map((post: any) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment: any) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: [
                        ...comment.replies,
                        {
                          id: Date.now().toString(),
                          username: 'CurrentUser',
                          userAvatar: require('../../../assets/images/profile2.jpg'),
                          text: replyText,
                          time: 'Just now',
                        },
                      ],
                    }
                  : comment,
              ),
            }
          : post,
      ),
    );
  };

  const toggleComments = (postId: any) => {
    setPosts((prevPosts: any) =>
      prevPosts.map((post: any) =>
        post.id === postId
          ? { ...post, showComments: !post.showComments }
          : post,
      ),
    );
  };
  return (
    <View style={styles.container}>
      <FlatListComponent
        data={feeds}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginTop: 10, marginBottom: 15 }}>
              <View style={styles.mainContainer}>
                <View>
                  <CustomImg
                    style={{ width: 70, height: 70, borderRadius: 50 }}
                    source={item?.profile}
                  />
                  <Label
                    labelContent={'Follow'}
                    underLine={true}
                    align={'center'}
                    size={15}
                    color={'#EE8C0E'}
                  />
                </View>
                <View style={styles.profile}>
                  <View style={{ flex: 1 }}>
                    <Label
                      labelContent={item?.name}
                      family={FONTS.PoppinsSemiBold}
                    />
                    <Label
                      labelContent={item?.info}
                      textStyle={{}}
                      numberOfLines={2}
                    />
                  </View>
                  <Label labelContent={item?.time} size={15} />
                </View>
              </View>
              <CustomImg
                source={item?.image_url}
                style={{
                  height: getImageHeight(index),
                  width: '100%',
                  resizeMode: 'cover',
                }}
                onLoad={(event: any) =>
                  handleImageLoad(item.image_url, index, event)
                }
              />
              <View style={styles.selector}>
                <Label
                  textStyle={{
                    flex: 1,
                    borderRightWidth: 1,
                    borderRightColor: '#B8B8B8',
                  }}
                  align={'center'}
                  onPress={() => setSelectInfoType('Ingredients')}
                  labelContent={'Ingredients'}
                  size={16}
                  color={
                    selectInfoType == 'Ingredients' ? '#EF8E0F' : COLORS.black2
                  }
                  family={FONTS.PoppinsMedium}
                />
                <Label
                  textStyle={{ flex: 1 }}
                  align={'center'}
                  onPress={() => setSelectInfoType('Instruction')}
                  labelContent={'Instruction'}
                  size={16}
                  family={FONTS.PoppinsMedium}
                  color={
                    selectInfoType == 'Instruction' ? '#EF8E0F' : COLORS.black2
                  }
                />
              </View>
              {selectInfoType ? (
                selectInfoType == 'Instruction' ? (
                  <View style={{ paddingHorizontal: 22 }}>
                    <Label
                      labelContent={item?.Instruction?.heading1}
                      family={FONTS.PoppinsBold}
                      color={'#424F54'}
                      size={18}
                    />
                    <Label
                      labelContent={item?.Instruction?.heading2}
                      family={FONTS.PoppinsBold}
                      color={'#424F54'}
                      size={18}
                    />
                    <View style={{ marginTop: 20, gap: 10 }}>
                      {item?.Instruction?.info?.map(
                        (subItem: any, index: any) => {
                          return (
                            <View
                              key={index}
                              style={{
                                flexDirection: 'row',
                                marginBottom: 10,
                                gap: 10,
                              }}
                            >
                              <Ionicons name="information" size={22} />
                              <View style={{ paddingRight: 20 }}>
                                <Label
                                  labelContent={subItem?.title}
                                  size={18}
                                  family={FONTS.PoppinsSemiBold}
                                  color={'#424F54'}
                                />
                                <Label
                                  labelContent={subItem?.value}
                                  size={15}
                                  family={FONTS.PoppinsMedium}
                                />
                              </View>
                            </View>
                          );
                        },
                      )}
                    </View>
                  </View>
                ) : (
                  <View style={{ paddingHorizontal: 22 }}>
                    <Label
                      labelContent={'Serves 4'}
                      family={FONTS.PoppinsBold}
                      color={'#424F54'}
                      size={18}
                    />
                    <View style={{ marginTop: 20 }}>
                      {item?.Ingredients?.map((subItem, index) => {
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: 'row',
                              paddingBottom: 10,
                              gap: 15,
                            }}
                          >
                            <Fontisto name="info" size={18} />
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                flex: 1,
                              }}
                            >
                              <Label
                                labelContent={subItem?.name}
                                family={FONTS.PoppinsMedium}
                                color={'#424F54'}
                                size={18}
                              />
                              <Label
                                labelContent={subItem?.value}
                                family={FONTS.PoppinsMedium}
                                color={'#424F54'}
                                size={18}
                              />
                            </View>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                )
              ) : (
                <View>
                  <View style={styles.icons}>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                      <Ionicons name="shield-half" size={28} />
                      <Ionicons name="chatbox-ellipses" size={28} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                      <Ionicons name="bookmark" size={28} />
                      <FloatingMenu />
                    </View>
                  </View>
                  <View style={styles.info} />
                  <View style={styles.overLapImages}>
                    <OverlappingAvatars avatars={item?.images} />
                    <RowLabel
                      family={FONTS.PoppinsMedium}
                      family1={FONTS.PoppinsSemiBold}
                      color2={'#424F54'}
                      firstLabel={'Liked by '}
                      secondLabel={'Chey_roy '}
                    />
                    <RowLabel
                      family={FONTS.PoppinsMedium}
                      family1={FONTS.PoppinsSemiBold}
                      color2={'#424F54'}
                      firstLabel={'and  '}
                      secondLabel={'1239 '}
                    />
                    <Label
                      labelContent={'other '}
                      family={FONTS.PoppinsMedium}
                    />
                  </View>
                  <RowLabel
                    viewStye={{
                      ...genericStyles.mh(15),
                      ...genericStyles.mt(10),
                    }}
                    family={FONTS.PoppinsBold}
                    family1={FONTS.PoppinsMedium}
                    color2={'#EF8E0F'}
                    color1={'#EF8E0F'}
                    secondLabel={'Liked by '}
                    firstLabel={'Chey_roy '}
                    firstLabelSize={16}
                    secondLabelSize={16}
                  />
                  <Label
                    labelContent={'View all 252 comment'}
                    family={FONTS.PoppinsLight}
                    mh={15}
                    mt={20}
                  />
                  {item?.showcomment && item.comments?.length > 0 && (
                    <CommentsSection
                      comments={item.comments}
                      onAddComment={comment =>
                        handleAddComment(post.id, comment)
                      }
                      onAddReply={(commentId, reply) =>
                        handleAddReply(post.id, commentId, reply)
                      }
                    />
                  )}
                </View>
              )}
              <View style={styles.divider} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  selector: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 2.5,
    shadowRadius: 2.5,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    bottom: 10,
    marginTop: -10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingHorizontal: 15,
  },
  info: {
    width: '90%',
    backgroundColor: COLORS.gray,
    height: 2,
    alignSelf: 'center',
    marginTop: 20,
  },
  overLapImages: {
    paddingHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: '90%',
    backgroundColor: COLORS.gray,
    height: 2,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
