export interface User{
  id: number;
  email:string;
  name:string;
  password:string;

};

export interface UserDTO extends Omit<User,'id'>{};
