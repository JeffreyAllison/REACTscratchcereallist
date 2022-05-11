import { client, checkError } from './client';

export async function getCereals(from = 0, to = 30) {
  const response = await client.from('cereals').select().range(from, to);

  return checkError(response);
}

export async function getACereal(id) {
  const response = await client.from('cereals').select().match({ id }).single();

  return checkError(response);
}
