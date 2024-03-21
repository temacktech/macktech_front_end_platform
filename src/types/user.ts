export interface User {
  id: string;
  drt: string;
  name: string;
  surname: string;
  dateBirth: string;
  email: string;
  password: string;
  level: number;
  experience: number;
  coin: number;
  status: boolean;
  firstAccess: boolean;
  create_at: Date;
  update_at: Date;
}
