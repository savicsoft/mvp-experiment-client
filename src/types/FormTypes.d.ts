export type InputsType = {
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  email: string;
  validatePassword: string;
};

export type forgotPassType = {
  email: string;
};

export type resetPassType = {
  password: string;
  validatePassword: string;
};
