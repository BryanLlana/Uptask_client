import { isAxiosError } from 'axios';
import { ConfirmToken, UserRegistrationForm } from '../types/index';
import api from '@/lib/axios';

export const createAccount = async (formData: UserRegistrationForm) => {
  try {
    const { data } = await api.post('/auth/create-account', formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const confirmAccount = async (formData: ConfirmToken) => {
  try {
    const { data } = await api.post('/auth/confirm-account', formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}