import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Comment from './Comment';
import Label from '../../../component/Label';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { COLORS } from '../../../constant';
import CustomImg from '../../../component/CustomImage';

const CommentsSection = ({ comments, onAddComment, onAddReply }) => {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);

  const displayedComments = showAllComments ? comments : comments.slice(0, 2);

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      if (replyingTo) {
        onAddReply(replyingTo.id, newComment);
        setReplyingTo(null);
      } else {
        onAddComment(newComment);
      }
      setNewComment('');
    }
  };

  const handleReply = comment => {
    setReplyingTo(comment);
  };

  const cancelReply = () => {
    setReplyingTo(null);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FlatList
        data={displayedComments}
        renderItem={({ item }) => (
          <Comment
            comment={item}
            onReply={handleReply}
            onLike={() => console.log('Like comment:', item.id)}
          />
        )}
        keyExtractor={(item, index) => index?.toString()}
        style={styles.commentsList}
        scrollEnabled={false}
      />

      {/* Reply Indicator */}
      {replyingTo && (
        <View style={styles.replyingToContainer}>
          <Label
            labelContent={`Replying to ${replyingTo.username}`}
            size={12}
            color="#666"
          />
          <TouchableOpacity onPress={cancelReply}>
            <Ionicons name="close" size={16} color="#666" />
          </TouchableOpacity>
        </View>
      )}

      {/* Add Comment Input */}
      <View style={styles.inputContainer}>
        <CustomImg
          source={require('../../../assets/images/profile.jpg')}
          style={styles.avatar}
        />
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={newComment}
          onChangeText={setNewComment}
          multiline
        />
        <TouchableOpacity
          style={[
            styles.postButton,
            !newComment.trim() && styles.postButtonDisabled,
          ]}
          onPress={handleSubmitComment}
          disabled={!newComment.trim()}
        >
          <Label
            labelContent="Post"
            size={14}
            color={newComment.trim() ? '#0095F6' : '#B2DFFC'}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewCommentsButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  commentsList: {
    flex: 1,
  },
  replyingToContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    borderRadius: 11,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    maxHeight: 100,
    backgroundColor: COLORS.lightGray,
  },
  postButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  postButtonDisabled: {
    opacity: 0.5,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
});

export default CommentsSection;
