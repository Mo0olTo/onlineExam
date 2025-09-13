export interface Iauth {
     message: string;
  token: string;
  user: User;
  oldPassword: string;
  password: string;
  rePassword: string;
  resetCode: string;
  newPassword: string;
  info: string;
  email: string;
  status:string;

}

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
}


