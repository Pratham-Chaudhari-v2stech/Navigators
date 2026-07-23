import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import LoadingView from '../components/LoadingView';
import ErrorView from '../components/ErrorView';
import EmptyView from '../components/EmptyView';
import PostItem from '../components/PostItem';

import {Post} from '../types/post';
import {getPosts} from '../api/postApi';
import {styles} from '../styles/Homestyle';

const HomeScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError('');

      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <LoadingView />
      ) : error ? (
        <ErrorView message={error} onRetry={fetchPosts} />
      ) : posts.length === 0 ? (
        <EmptyView />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <PostItem post={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;