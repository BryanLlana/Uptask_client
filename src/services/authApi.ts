import { isAxiosError } from 'axios';
import { UserRegistrationForm } from '../types/index';
import api from '@/lib/axios';

export const createAccount = async (formData: UserRegistrationForm) => {
  try {
    const { data } = await api.post('/auth/create-account', formData)
    return data
  } catch (error) {
    console.log(error);
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}