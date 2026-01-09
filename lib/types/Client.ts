export default interface Client {
    id: string | number;
    name: string;
    industry: string;
    city: string;
    country: string;
    address: string;
    web: string;
    phone: string;
    email: string;
    type: 'company' | 'private';
    notes: string;
    modifiedAt: string;
    createdAt: string;
    progress: number;
    success: number;
    failed: number;
    sumValue: number;
}