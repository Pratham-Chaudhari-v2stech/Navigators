import React, {useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {SafeAreaView} from 'react-native-safe-area-context';

import OfflineBanner from '../components/OfflineBanner';
import {
  deleteDemoFile,
  readDemoFile,
  writeDemoFile,
} from '../utils/fileSystem';
import {
  getAppVersion,
  getBuildNumber,
  getDeviceModel,
  getOSVersion,
} from '../utils/deviceInfo';
import {requestCameraPermission} from '../utils/permissions';

const DeviceUtilitiesScreen = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [networkType, setNetworkType] = useState('unknown');

  const [fileContent, setFileContent] = useState('');
  const [permissionStatus, setPermissionStatus] = useState('Not requested');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
      setNetworkType(state.type);
    });

    return unsubscribe;
  }, []);

  const handleWriteFile = async () => {
    try {
      await writeDemoFile();
      Alert.alert('Success', 'File written successfully.');
    } catch (error) {
      Alert.alert('Error', 'Failed to write file.');
      console.error('Write file error:', error);
    }
  };

  const handleReadFile = async () => {
    try {
      const content = await readDemoFile();

      setFileContent(content);

      Alert.alert('Success', 'File read successfully.');
    } catch (error) {
      Alert.alert('Error', 'Failed to read file.');
      console.error('Read file error:', error);
    }
  };

  const handleDeleteFile = async () => {
    try {
      await deleteDemoFile();

      setFileContent('');

      Alert.alert('Success', 'File deleted successfully.');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete file.');
      console.error('Delete file error:', error);
    }
  };

  const handleCameraPermission = async () => {
    try {
      const status = await requestCameraPermission();

      setPermissionStatus(status);
    } catch (error) {
      console.error('Permission error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {!isConnected && <OfflineBanner />}

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Device Utilities</Text>

        {/* Device Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Device Information</Text>

          <Text style={styles.infoText}>
            Model: {getDeviceModel()}
          </Text>

          <Text style={styles.infoText}>
            OS: {getOSVersion()}
          </Text>

          <Text style={styles.infoText}>
            App Version: {getAppVersion()}
          </Text>

          <Text style={styles.infoText}>
            Build Number: {getBuildNumber()}
          </Text>
        </View>

        {/* Network */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Network</Text>

          <Text style={styles.infoText}>
            Status: {isConnected ? 'Online' : 'Offline'}
          </Text>

          <Text style={styles.infoText}>
            Connection Type: {networkType}
          </Text>
        </View>

        {/* File System */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>File System</Text>

          <Pressable style={styles.button} onPress={handleWriteFile}>
            <Text style={styles.buttonText}>Write File</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={handleReadFile}>
            <Text style={styles.buttonText}>Read File</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={handleDeleteFile}>
            <Text style={styles.buttonText}>Delete File</Text>
          </Pressable>

          {fileContent ? (
            <View style={styles.fileContent}>
              <Text style={styles.fileContentLabel}>File Content:</Text>

              <Text style={styles.fileContentText}>{fileContent}</Text>
            </View>
          ) : null}
        </View>

        {/* Permissions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Permissions</Text>

          <Text style={styles.infoText}>
            Camera Permission: {permissionStatus}
          </Text>

          <Pressable
            style={styles.button}
            onPress={handleCameraPermission}>
            <Text style={styles.buttonText}>
              Request Camera Permission
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 15,
    marginBottom: 8,
  },
  button: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  fileContent: {
    marginTop: 16,
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#F2F2F2',
  },
  fileContentLabel: {
    fontWeight: '600',
    marginBottom: 6,
  },
  fileContentText: {
    fontSize: 14,
  },
});

export default DeviceUtilitiesScreen;