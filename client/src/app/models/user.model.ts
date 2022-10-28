interface UserModel {
  id?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  role: { name: string };
  customer: { name: string };
}

interface NewUserModel {
  id?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  roleId: number;
  customerId: number;
}

interface UpdateUserModel {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
}

enum ROLE {
  SUPERADMIN = 'Super Admin',
  ADMIN = 'Admin',
  SUBSCRIBER = 'Subscriber',
}

export { ROLE, UserModel, NewUserModel, UpdateUserModel };
