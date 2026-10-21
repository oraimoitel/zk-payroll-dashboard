export interface TreasuryReserveConfig {
  /** Minimum treasury balance that must remain after a payroll run, in USD. */
  reserveThreshold: number;
  updatedAt: string | null;
  updatedBy: string | null;
}

export type TreasuryReserveStatus = "funded" | "low-buffer" | "insufficient";

export interface TreasuryReserveEvaluation {
  threshold: number;
  balance: number;
  payrollTotal: number;
  projectedRemaining: number;
  status: TreasuryReserveStatus;
  /** Human-readable warning for payroll readiness checks, or null when funded. */
  message: string | null;
}
