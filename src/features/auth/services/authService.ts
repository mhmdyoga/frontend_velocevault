import baseApi from "@/lib/baseApi"

interface userType{
    email?:string
    username?:string
    password?:string
    confPassword?:string
}

export const LoginService = async(credential:userType) => {
  const response = await baseApi.post("/auth/login", credential);
  return response.data
}

export const RegisterService = async(credential:userType) => {
  const response = await baseApi.post("/users", credential);
  return response.data;
}

export const LogoutService = async() => {
  const response = await baseApi.post("/auth/logout");
  return response.data;
}
