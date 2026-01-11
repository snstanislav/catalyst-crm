export default interface Opportunity {
    id: string;
    clientId: string; // Foreign key
    assignedTo: string; // Foreign key
    createdAt: string;
    modifiedAt: string;

    title: string;
    stage: OpportunityStage;

    probability: number;
    status: "success" | "progress" | "failed";

    orderAcceptanceDate: string;
    expectedCompletionDate: string;
    completionDate: string;
    actualDuration: string;

    orderTotalAmount: number;
    orderTotalCurrency: string;

    prepaymentAmount: number;
    prepaymentCurrency: string;
    prepaymentProcent: number;
    prepaymentDate: string;

    surchargeAmount: number;
    surchargeCurrency: string;
    surchargeProcent: number;
    surchargeDate: string;
}

export type OpportunityStage =
    // Phase 1: Sales (The Opportunity)
    "Discovery"
    | "Proposal & Negotiation"
    | "Legal"
    // Phase 2: Commitment (The Order)
    | "Acceptance"
    | "Invoicing & Prepayment"
    | "Order processing"
    // Phase 3: Fulfillment (The Work)
    | "Production"
    | "Logistics"
    // Phase 4: Closing (The Handover) 
    | "Surcharge"
    | "Delivery"
    | "Completed"
    // Phase 5: Post-Sale (The Exceptions)
    | "Cancelled"
    | "Complaint & Return"