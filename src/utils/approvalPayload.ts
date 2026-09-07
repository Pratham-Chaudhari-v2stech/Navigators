import { ApprovalData } from '../types/approval';

interface CreateApprovalPayloadParams {
  customerId: string;
  customerName: string;
  amount: number;
  biometricVerified: boolean;
  signature: string;
}

export const createApprovalPayload = ({
  customerId,
  customerName,
  amount,
  biometricVerified,
  signature,
}: CreateApprovalPayloadParams): ApprovalData => {
  return {
    customerId,
    customerName,
    amount,
    biometricVerified,
    signature,
    approvedAt: new Date().toISOString(),
  };
};