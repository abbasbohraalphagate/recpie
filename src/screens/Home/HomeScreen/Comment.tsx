import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import CustomImg from '../../../component/CustomImage';
import Label from '../../../component/Label';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { FONTS } from '../../../constant';
import RowLabel from '../../../component/Label/RowLabel';

const Comment = ({ comment, onReply, onLike }) => {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.commentHeader}>
        <CustomImg source={comment.userAvatar} style={styles.avatar} />
        <View style={styles.commentContent}>
          <View style={styles.commentTextContainer}>
            <View style={{ width: '95%' }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#424F54',
                  fontFamily: FONTS.PoppinsBold,
                }}
              >
                {comment.username}{' '}
                <Text
                  style={{
                    fontSize: 14,
                    color: '#586368',
                    fontFamily: FONTS.PoppinsMedium,
                  }}
                >
                  {' '}
                  {comment.text}
                </Text>
              </Text>
            </View>
            <Ionicons style={{ flex: 1 }} name="logo-capacitor" size={20} />
          </View>
          <View style={styles.commentMeta}>
            <Label labelContent={comment.time} size={12} color="#666" />
            <Label labelContent={'.'} mh={15} mb={10} size={22} color="#666" />
            <Label labelContent={50} size={12} color="#666" />
            <Label labelContent={'.'} mh={15} mb={10} size={22} color="#666" />
            <Label labelContent={'Reply'} size={12} color="#666" />
            {/* <TouchableOpacity onPress={onLike}>
              <Label
                labelContent="Like"
                size={12}
                color="#666"
                style={styles.metaButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onReply(comment)}>
              <Label
                labelContent="Reply"
                size={12}
                color="#666"
                style={styles.metaButton}
              />
            </TouchableOpacity> */}
          </View>
          <Label labelContent={'...View 6 comments'} size={12} color="#666" />

          {/* Replies */}
          {/* {comment?.replies && comment?.replies?.length > 0 && (
            <View style={styles.repliesContainer}>
              {comment?.replies.map((reply, index) => (
                <View key={index} style={styles.replyContainer}>
                  <View style={styles.replyContent}>
                    <Label
                      labelContent={reply.username}
                      family={FONTS.PoppinsSemiBold}
                      size={14}
                    />
                    <Label
                      labelContent={` ${reply.text}`}
                      size={14}
                      style={styles.commentText}
                    />
                  </View>
                  <View style={styles.commentMeta}>
                    <Label labelContent={reply.time} size={12} color="#666" />
                    <TouchableOpacity onPress={() => onLike(reply)}>
                      <Label
                        labelContent="Like"
                        size={12}
                        color="#666"
                        style={styles.metaButton}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          )} */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  commentHeader: {
    flexDirection: 'row',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentTextContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    justifyContent: 'space-between',
  },
  commentText: {
    flex: 1,
    flexWrap: 'wrap',
  },
  commentMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaButton: {
    marginLeft: 15,
  },
  repliesContainer: {
    marginTop: 8,
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#e0e0e0',
  },
  replyContainer: {
    marginTop: 6,
  },
  replyContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 2,
  },
});

export default Comment;
