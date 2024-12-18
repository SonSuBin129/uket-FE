import { FormSchemaType } from "@/hooks/useStackForm";

import { GOOGLE_REDIRECT_URI, KAKAO_REDIRECT_URI } from "@/constants/auth_url";

import { LoginRequestParams } from "@/types/authType";

import { getAccessToken } from "@/utils/handleToken";
import { getRefreshToken } from "@/utils/handleCookie";

import { instance } from "./instance";

export const login = async ({ code, provider }: LoginRequestParams) => {
  const redirect_uri =
    provider === "google" ? GOOGLE_REDIRECT_URI : KAKAO_REDIRECT_URI;

  const { data } = await instance.post(`/auth/login/${provider}`, {
    code,
    redirectUri: redirect_uri,
  });

  return data;
};

export const signup = async ({
  userName,
  userPhone,
}: Partial<FormSchemaType>) => {
  const baseBody = {
    depositorName: userName,
    phoneNumber: userPhone,
  };

  const { data } = await instance.post("/users/register", baseBody);

  return data;
};

export const reissue = async () => {
  const refreshToken = getRefreshToken("refreshToken");
  const accessToken = getAccessToken();

  const { data } = await instance.post("/auth/reissue", {
    accessToken,
    refreshToken,
  });

  const { accessToken: newAccessToken } = data;

  return newAccessToken;
};
