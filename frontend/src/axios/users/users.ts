import { User } from "@/types/user/user";
import axios, { AxiosResponse } from "axios";

async function getUsers() {
  try {
    const res: AxiosResponse<User[]> = await axios.get(
      "https://65cd2654dd519126b8402f85.mockapi.io/users"
    );
    return res.data;
    // return res.data as User[];
  } catch (error) {
    console.error(error);
  }
}

async function getUser(id: number) {
  try {
    const res: AxiosResponse<User> = await axios.get(
      `https://65cd2654dd519126b8402f85.mockapi.io/users/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function createUser(user: Omit<User, "id">) {
  try {
    const res: AxiosResponse<User> = await axios.post(
      "https://65cd2654dd519126b8402f85.mockapi.io/users",
      user
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export const userServices = {
  getUsers,
  getUser,
  createUser,
};
