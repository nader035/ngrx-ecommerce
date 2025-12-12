export interface Iuser {
  id: string;
  name: string;
  email: string;
  password: string;
  imageURL: string;
}
export interface SignUpParams {
  name: string;
  email: string;
  password: string;
  checkout?: boolean;
  dialogId: string;
}
export type SignInParams = Omit<SignUpParams, 'name'>;
