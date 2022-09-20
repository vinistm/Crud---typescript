export interface IUserRequest {
      name: string;
      email: string;
      password: string;
      telephone: number;
  }

  export interface IUserLogin {
    name: string;
    password: string;
  }


  export interface IUserInfo {
   name: string;
   email:string;
   telephone: number;
  }
  export interface IUserUpdate {
    id: string;
    name: string;
    email: string;
    password: string;
    telephone: number;
  }