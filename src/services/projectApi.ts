import api from "@/lib/axios"
import { ProjectFormData } from "../types"

export const createProject = async (formData: ProjectFormData) => {
  try {
    await api.post('/project', formData)
  } catch (error) {
    console.log(error)
  }
}