import api from "./api";

export default interface User {
  id: number;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  html_url: string;
  repos: Repo[];
}

export const get = async (username: string) => {
  const path = `/users/${username}`;

  try {
    const response = await api.get(path);

    const user = response.data as User;

    return { user, error: null };
  } catch (error: any) {
    return { user: null, error };
  }
};

export interface Repo {
  name: string;
  html_url: string;
  disabled: boolean;
  private: boolean;
}

export const getRepos = async (username: string) => {
  const path = `/users/${username}/repos`;

  try {
    const response = await api.get(path);

    const repos = response.data as Repo[];

    return { repos, error: null };
  } catch (error: any) {
    return { repos: null, error };
  }
};
