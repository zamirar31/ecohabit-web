
export interface Challenge {
  id?: string;
  name: string;
  description?: string;
  points: number;        
  startDate: string;     
  endDate: string;       
  active: boolean;
  createdAt?: number;
  updatedAt?: number;
}

