import { isAxiosError } from 'axios';
import { ConfirmToken, ForgotPasswordForm, NewPasswordForm, RequestConfirmationCodeForm, UserLoginForm, UserRegistrationForm } from '../types/index';
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

export const requestNewCode = async (formData: RequestConfirmationCodeForm) => {
  try {
    const { data } = await api.post('/auth/request-new-code', formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const forgotPassword = async (formData: ForgotPasswordForm) => {
  try {
    const { data } = await api.post('/auth/forgot-password', formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const validateToken = async (formData: ConfirmToken) => {
  try {
    const { data } = await api.post('/auth/validate-token', formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const updatePassword = async( {formData, token}: {formData: NewPasswordForm, token: ConfirmToken['token']}) => {
  try {
    const { data } = await api.post(`/auth/update-password/${token}`, formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const login = async (formData: UserLoginForm) => {
  try {
    const { data } = await api.post('/auth/login', formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}