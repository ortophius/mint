import fetch from "cross-fetch";

export async function get<T>(url: string): Promise<T> {
  try {
    return (await fetch(url)).json() as T;
  } catch (e) {
    return null;
  }
}

export function createEndpoint<T>(
  pathFunc: (...params: string[]) => string
): (...params: string[]) => Promise<T> {
  return async (...params) => {
    const res = await get(`http://localhost:8001${pathFunc(...params)}`);
    return res as T;
  };
}
