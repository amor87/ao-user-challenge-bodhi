export type UserRoleE = "administrator" | "user";

type PreferencesProps = {
  receiveEmails: boolean;
};

export type UserProps = {
  createdAtDate: string;
  createdById: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  preferences: PreferencesProps;
  role: UserRoleE;
  updatedAtDate: string;
  updatedById: string;
  _id: string;
};
