import { ApiGame } from "../game/types";

type ApiSingleDataResponse<T> = {
    data: T;
}

class Core {
  static async getSingle<T>(path: string) {
    const response = await fetch(`https://go-champs-api-staging.herokuapp.com/${path}`);
    return response.json() as Promise<ApiSingleDataResponse<T>>;
  }
}

export default Core;