import { useMutation } from "@tanstack/react-query";

import { signup } from "@/api/auth";

import { FormSchemaType } from "@/hooks/useStackForm";

import { AuthResponse } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";
import { setRefreshToken } from "@/utils/handleCookie";


export const useMutationSignup = () => {
  const mutation = useMutation({
    mutationFn: ({
      userType,
      userName,
      userPhone,
      userUniv,
      userId,
      userMajor,
      userEmail,
    }: Partial<FormSchemaType>) =>
      signup({
        userType,
        userName,
        userPhone,
        userUniv,
        userId,
        userMajor,
        userEmail,
      }),
    onSuccess: ({ accessToken, refreshToken }: AuthResponse) => {
      setAccessToken(accessToken);
      setRefreshToken("refreshToken", refreshToken);
    },
  });

  return mutation;
};
