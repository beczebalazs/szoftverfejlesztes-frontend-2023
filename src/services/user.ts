import { httpClient } from ".";
import { User } from "../types/User";

export const getCurrentUser = async () => (await httpClient.get<User>(`/current-user`)).data;
