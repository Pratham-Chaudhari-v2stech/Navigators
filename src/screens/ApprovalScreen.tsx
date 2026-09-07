import React, { useState } from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ApprovalSummary from '../components/ApprovalSummary';
import SignaturePad from '../components/SignaturePad';
import { authenticateWithBiometrics } from '../services/ biometricService';
import { createApprovalPayload } from '../utils/approvalPayload';

const ApprovalScreen = () => {
  const [biometricVerified, setBiometricVerified] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);
  const [showSignaturePad, setShowSignaturePad] = useState(false);

  const customerId = 'CUS001';
  const customerName = 'Rahul Sharma';
  const amount = 50000;

  const handleBiometricVerification = async () => {
    const success = await authenticateWithBiometrics();

    if (!success) {
      Alert.alert(
        'Authentication Failed',
        'Biometric authentication was not successful.',
      );
      return;
    }

    setBiometricVerified(true);
    setShowSignaturePad(true);

    Alert.alert(
      'Authentication Successful',
      'Please provide your signature.',
    );
  };

  const handleSignatureCaptured = (capturedSignature: string) => {
    setSignature(capturedSignature);
    setShowSignaturePad(false);
  };

  const handleApproval = () => {
    if (!biometricVerified) {
      Alert.alert(
        'Biometric Required',
        'Please complete biometric verification first.',
      );
      return;
    }

    if (!signature) {
      Alert.alert(
        'Signature Required',
        'Please provide your signature first.',
      );
      return;
    }

    const payload = createApprovalPayload({
      customerId,
      customerName,
      amount,
      biometricVerified,
      signature,
    });

    console.log('===== APPROVAL PAYLOAD =====');
    console.log(JSON.stringify(payload, null, 2));

    Alert.alert(
      'Approval Successful',
      'Customer approval has been completed.',
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Customer Approval</Text>

      <View style={styles.customerCard}>
        <Text style={styles.label}>Customer Name</Text>
        <Text style={styles.value}>{customerName}</Text>

        <Text style={styles.label}>Customer ID</Text>
        <Text style={styles.value}>{customerId}</Text>

        <Text style={styles.label}>Amount</Text>
        <Text style={styles.value}>₹{amount}</Text>
      </View>

      {!biometricVerified && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Step 1: Biometric Verification
          </Text>

          <Button
            title="Verify & Approve"
            onPress={handleBiometricVerification}
          />
        </View>
      )}

      {biometricVerified && showSignaturePad && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Step 2: Digital Signature
          </Text>

          <SignaturePad
            onSignatureCaptured={handleSignatureCaptured}
          />
        </View>
      )}

      {biometricVerified && signature && (
        <>
          <ApprovalSummary
            customerName={customerName}
            amount={amount}
            biometricVerified={biometricVerified}
            signature={signature}
          />

          <View style={styles.approveButton}>
            <Button
              title="Confirm Approval"
              onPress={handleApproval}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  customerCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    marginTop: 4,
  },

  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  approveButton: {
    marginBottom: 30,
  },
});

export default ApprovalScreen;