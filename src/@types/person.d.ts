export type Person = {
  id: number;
  firstname: string;
  lastname : string | null;
  role: 'Admin' | 'User' | 'Guest';
  isActif: boolean;
};