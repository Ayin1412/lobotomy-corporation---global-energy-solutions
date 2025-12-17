export interface NavItem {
  label: string;
  href: string;
}

export interface Department {
  id: string;
  name: string;
  sephirah: string;
  description: string;
  color: string;
  textColor: string;
  icon: string;
  imageUrl: string;
}

export interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  summary: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Abnormality {
  id: string;
  code: string;
  name: string;
  riskLevel: 'ZAYIN' | 'TETH' | 'HE' | 'WAW' | 'ALEPH';
  description: string;
  imageUrl: string;
}