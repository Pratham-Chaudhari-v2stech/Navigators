import React, { Component, ReactNode } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('Caught by Error Boundary');
    console.log(error);
    console.log(info);
  }

  reset = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Something went wrong!
          </Text>

          <Text style={styles.subtitle}>
            The app didn't crash because the Error Boundary
            caught the error.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={this.reset}>
            <Text style={styles.buttonText}>
              Try Again
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});