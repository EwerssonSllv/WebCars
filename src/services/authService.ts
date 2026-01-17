import { account, ID } from "./connection";

export async function logoutUser() {
  await account.deleteSessions();
}

export async function register(
  email: string,
  password: string,
  name: string
) {
  await account.create(
    ID.unique(),
    email,
    password,
    name
  );

  return login(email, password);
}

export async function login(
  email: string,
  password: string
) {
  await account.createEmailPasswordSession(
    email,
    password
  );

  return account.get();
}