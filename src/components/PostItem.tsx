import React from 'react';
import {View, Text} from 'react-native';
import {Post} from '../types/post';
import {styles} from '../styles/Homestyle';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({post}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.body}>{post.body}</Text>

      <View style={styles.tagContainer}>
        {post.tags.map(tag => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.userId}>User ID: {post.userId}</Text>
    </View>
  );
};

export default PostItem;