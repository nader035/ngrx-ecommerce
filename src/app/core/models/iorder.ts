import { Icart } from './icart';

export interface Iorder {
  id: string;
  userId: string;
  total: number;
  items: Icart[];
  payment: 'success' | 'failure';
}
