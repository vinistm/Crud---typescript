export interface IUserRequest {
    body: {
      name: string;
      email: string;
      password: string;
      telephone: number;
    };
  }
  
  export interface IUserReturn {
    id: number;
    name: string;

  }
  
  export interface IUserLogin {
    email: string;
    password: string;
  }
  
  export interface IUserUpdate {
    body: {
      id: string;
      name: string;
      email: string;
      password: string;
      telephone: number;
      emai: string;
    };
  }
  
  export interface IUserInfo {
    id: string;
    body: {
      telephone: number;
      emai: string;
      password: string;
      created_at: string;
      updated_at: string;
    };
  }
  