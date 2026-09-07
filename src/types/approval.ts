export interface ApprovalData {
  customerId: string;
  customerName: string;
  amount: number;
  biometricVerified: boolean;
  signature: string | null;
  approvedAt: string | null;
}