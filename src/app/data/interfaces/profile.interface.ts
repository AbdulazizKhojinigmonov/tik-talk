export interface Profile {
  avatarUrl: any;
  id: number,
  name: string,
  description:string,
  username: string | null,
  subscritionAmount: number,
  firstName: string,
  lastName: string,
  isActive: boolean,
  stack: string[],
  city: string;
}
