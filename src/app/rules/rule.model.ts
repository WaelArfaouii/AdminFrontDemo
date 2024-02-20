export interface Rule {
  id?: number; // Assuming you have an 'id' property in your backend
  name: string;
  description: string;
  disabled: boolean;
  creationDate: Date;
}
