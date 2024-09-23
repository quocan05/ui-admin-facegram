import { EEmailStatus, ERecordStatus, EUserType } from 'src/variables/enum-variables';

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar: string;
  bio: string;
  phone: string;
  email: string;
  userName: string;
  createdAt: string;
}

export interface IUserLogin {
  userName: string;
  password: string;
}
