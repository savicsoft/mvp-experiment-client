export type SingInUpType = {
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  email: string;
  validatePassword: string;
  privacyPolicy: Boolean;
};

export type forgotPassType = {
  email: string;
};

export type resetPassType = {
  password: string;
  validatePassword: string;
};
