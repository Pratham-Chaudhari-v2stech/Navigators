import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface ApprovalSummaryProps {
  customerName: string;
  amount: number;
  biometricVerified: boolean;
  signature: string | null;
}

const ApprovalSummary = ({
  customerName,
  amount,
  biometricVerified,
  signature,
}: ApprovalSummaryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Approval Summary</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Customer:</Text>
        <Text style={styles.value}>{customerName}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>₹{amount}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Biometric:</Text>

        <Text style={styles.success}>
          {biometricVerified ? '✓ Verified' : '✗ Not Verified'}
        </Text>
      </View>

      <Text style={styles.signatureLabel}>Signature:</Text>

      {signature ? (
        <View style={styles.signatureContainer}>
          <Image
            source={{
              uri: `data:image/png;base64,${signature}`,
            }}
            style={styles.signature}
            resizeMode="contain"
          />
        </View>
      ) : (
        <Text style={styles.noSignature}>
          No signature captured
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
  },

  value: {
    fontSize: 16,
  },

  success: {
    fontSize: 16,
    fontWeight: '600',
  },

  signatureLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },

  signatureContainer: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signature: {
    width: '100%',
    height: '100%',
  },

  noSignature: {
    color: '#888',
  },
});

export default ApprovalSummary;