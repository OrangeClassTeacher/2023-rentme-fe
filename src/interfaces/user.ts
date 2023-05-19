export interface IUserRole {
  _id: string;
  role: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  IUser: string;
  _id: string;
  firstName: string;
  lastName: string;
  Username: string;
  birthDate: string;
  email: string;
  phoneNumber: string;
  address?: string;
  role: string;
  favItems: string[];
  gender: string;
  profilePic: string;
  password: string;
  following: string[];
  followers: string[];
}
