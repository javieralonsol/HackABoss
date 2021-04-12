import { fetchF } from '../../helpers/helpers';

export const GetProfile = async (token) => {
  const profileFetchResponse = await fetchF(`http://localhost:3020/api/v1/users/profile`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return profileFetchResponse.status === 200 ? await profileFetchResponse.body : false;
};
