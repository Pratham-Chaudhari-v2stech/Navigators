import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },

  body: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 14,
  },

  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },

  tag: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    fontSize: 12,
    color: '#1565C0',
    fontWeight: '600',
  },

  userId: {
    fontSize: 13,
    color: '#777',
    fontStyle: 'italic',
  },

  message: {
    marginTop: 16,
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
  },

  errorText: {
    fontSize: 18,
    color: '#D32F2F',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },

  retryButton: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },

  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  listContent: {
    paddingBottom: 20,
  },
});