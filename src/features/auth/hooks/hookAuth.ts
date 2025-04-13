"use client";
import { useMutation } from "@tanstack/react-query";
import { LoginService, LogoutService, RegisterService } from "../services/authService";

export const useLogin = () => {
  return useMutation({
    mutationFn: LoginService
  })
};

export const useLogout = () => {
  return useMutation({
    mutationFn: LogoutService
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: RegisterService 
})
}