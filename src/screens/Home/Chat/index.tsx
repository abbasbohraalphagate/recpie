import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  GiftedChat,
  Bubble,
  Send,
  InputToolbar,
  Composer,
  Actions,
} from 'react-native-gifted-chat';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { COLORS, FONTS } from '../../../constant';
import Label from '../../../component/Label';
import CustomImg from '../../../component/CustomImage';
import TouchableComponent from '../../../component/TouchableComponent';

const Chat = props => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useLayoutEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Welcome to our chat! 👋',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Support Bot',
          avatar: 'https://placeimg.com/140/140/any',
        },
        system: false,
      },
    ]);
  }, []);

  useEffect(() => {
    props?.navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="chevron-back-outline"
          onPress={() => props?.navigation?.goBack()}
          color={COLORS.black}
          size={20}
        />
      ),
      headerTitle: () => (
        <View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
          <CustomImg
            source={require('../../../assets/images/profile.jpg')}
            style={{ width: 45, height: 45, borderRadius: 50 }}
          />
          <View style={{ flexDirection: 'column', gap: 0 }}>
            <Label
              labelContent={'Gordon-Da'}
              size={16}
              family={FONTS.PoppinsBold}
            />
            <Label
              mt={0}
              labelContent={'Online'}
              size={14}
              family={FONTS.PoppinsSemiBold}
            />
          </View>
        </View>
      ),
      headerRight: () => (
        <TouchableComponent
          onPress={() => props?.navigation?.navigate('ChatSearch')}
          style={{
            backgroundColor: '#EF8E0F',
            width: 80,
            padding: 10,
            height: 50,
            left: 18,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            justifyContent: 'center',
          }}
        >
          <Ionicons name="search" color={COLORS.white} size={25} />
        </TouchableComponent>
      ),
    });
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "That's interesting! Tell me more.",
        'I understand. How can I assist you further?',
        'Thanks for sharing that with me!',
        'Let me know if you need any help!',
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const botMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: randomResponse,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Support Bot',
          avatar: 'https://placeimg.com/140/140/any',
        },
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [botMessage]),
      );
    }, 2000);
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#007AFF',
            marginVertical: 2,
          },
          left: {
            backgroundColor: '#F0F0F0',
            marginVertical: 2,
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
            fontSize: 14,
          },
          left: {
            color: '#000',
            fontSize: 14,
          },
        }}
        timeTextStyle={{
          right: {
            color: 'rgba(255,255,255,0.7)',
          },
          left: {
            color: 'gray',
          },
        }}
      />
    );
  };

  const renderSend = props => {
    return (
      <Send {...props} disabled={!props.text}>
        <View style={styles.sendButton}>
          <Ionicons
            name="send"
            size={20}
            color={props.text ? '#007AFF' : '#C4C4C4'}
          />
        </View>
      </Send>
    );
  };

  const renderInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.inputToolbar}
        primaryStyle={styles.inputPrimary}
      />
    );
  };

  const renderComposer = props => {
    return (
      <Composer
        {...props}
        placeholder="Type your message..."
        textInputStyle={styles.composer}
      />
    );
  };

  const renderTime = props => {
    const time = '4:15';

    return (
      <Label
        size={10}
        mh={5}
        mb={5}
        color={COLORS.coffeeColor}
        align={'right'}
        labelContent={time}
      />
    );
  };

  const renderMessage = props => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 5,
          marginBottom: 10,
        }}
        key={props?.currentMessage?._id}
      >
        <Bubble
          {...props}
          wrapperStyle={{
            right: styles.wrapperRight,
            left: styles.wrapperLeft,
          }}
          textStyle={{
            left: styles.textLeft,
            right: styles.textRight,
          }}
        />
        {/* {props?.currentMessage?.user?._id == userData?.id && deleteMode && (
          <CheckBox
            onPress={() => onSelectMessage(props?.currentMessage)}
            checked={isMessageSelected(props?.currentMessage?._id)}
          />
        )} */}
      </View>
    );
  };

  const renderAvatar = () => {
    return (
      <CustomImg
        source={require('../../../assets/images/profile.jpg')}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
    );
  };

  const renderFooter = () => {
    if (isTyping) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Support Bot is typing...</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        alwaysShowSend={true}
        scrollToBottom={true}
        renderAvatar={renderAvatar}
        // disableComposer={
        //   userDetail?.block_user_id == userData?.id
        //     ? true
        //     : userDetail?.block_user_id == null
        //     ? false
        //     : true
        // }
        bottomOffset={0}
        renderSend={renderSend}
        onSend={onSend}
        renderInputToolbar={renderInputToolbar}
        inverted
        chatMessage={messages}
        setMessage={setMessages}
        minInputToolbarHeight={70}
        renderMessage={renderMessage}
        renderComposer={renderComposer}
        renderTime={renderTime}
        placeholder="Write a message..."
        user={{
          _id: '2',
          name: 'Abbas',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
    paddingHorizontal: 0, // remove left/right padding
    paddingBottom: 0, // add bottom padding if needed
  },

  sendButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
  inputToolbar: {
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  inputPrimary: {
    alignItems: 'center',
  },
  composer: {
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 0,
    fontSize: 16,
    height: 80,
  },
  actionsContainer: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    // marginRight: 4,
    marginBottom: 0,
  },
  footerContainer: {
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'gray',
    fontSize: 12,
    fontStyle: 'italic',
  },
  wrapperRight: {
    backgroundColor: '#424F54',
    borderRadius: 12,
    minWidth: 100,
    marginHorizontal: 10,
    marginBottom: 5,
    borderBottomEndRadius: 0,
  },
  wrapperLeft: {
    minWidth: 100,
    borderRadius: 12,
    backgroundColor: '#E9EBF2',
    marginHorizontal: 10,
    marginBottom: 5,
    borderBottomStartRadius: 0,
  },
  textLeft: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.PoppinsMedium,
  },
  textRight: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.PoppinsMedium,
  },
});

export default Chat;
