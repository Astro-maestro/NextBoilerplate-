// Auth Interfaces
export interface LoginRequest {
    email: string;
    password: string;
    token: string,
    message: string,
    status: number
  } 
  
  export interface RegisterRequest {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    profile_pic: BinaryType;
    token: string,
    message: string,
    status: number
  }

  
  
  