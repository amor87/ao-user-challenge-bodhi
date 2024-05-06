"use client";
import { AxiosInstance } from "@/lib/axios-instance";
import { UserProps } from "@/lib/types";
import { AxiosResponse } from "axios";
import useSWR, { SWRResponse } from "swr";

type GetUserProps = {
  id?: string;
};

type UserDataResponse<InputT extends GetUserProps> = InputT["id"] extends string
  ? UserProps
  : UserProps[];

type Response<InputT extends GetUserProps> = SWRResponse<
  AxiosResponse<UserDataResponse<InputT>>
>;

export function useGetUsers<InputT extends GetUserProps>({
  id,
}: InputT): Response<InputT> {
  const query = id ? `/${id}` : "";
  const response = useSWR<AxiosResponse<UserDataResponse<InputT>>>(
    `/users${query}`,
    AxiosInstance.get
  );

  return response;
}
