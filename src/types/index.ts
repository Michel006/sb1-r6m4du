export interface User {
  id: string;
  name: string;
  title: string;
  company?: string;
  location: string;
  skills: string[];
  sector: string;
  avatar?: string;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  joinedDate: Date;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: 'job' | 'partnership' | 'project';
  sector: string;
  location: string;
  postedBy: string;
  createdAt: Date;
  budget?: {
    amount: number;
    currency: string;
  };
  skills: string[];
  status: 'open' | 'in-progress' | 'completed';
}

export interface Notification {
  id: string;
  type: 'message' | 'opportunity' | 'payment' | 'system';
  title: string;
  message: string;
  createdAt: Date;
  read: boolean;
  link?: string;
}

export interface PaymentMethod {
  id: string;
  type: 'mobile_money' | 'card' | 'wallet';
  provider: string;
  lastFour?: string;
  expiryDate?: string;
  isDefault: boolean;
}

export type Language = 'en' | 'fr' | 'es' | 'pt';