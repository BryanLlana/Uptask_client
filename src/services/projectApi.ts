import api from "@/lib/axios"
import { Project, ProjectFormData, ProjectsSchema } from "../types"

export const createProject = async (formData: ProjectFormData) => {
  try {
    const { data } = await api.post('/project', formData)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProjects = async () : Promise<Project[] | undefined> => {
  try {
    const { data } = await api.get('/project')
    const response = ProjectsSchema.safeParse(data)
    if (response.success) return response.data
    return data
  } catch (error) {
    console.log(error)
  }
}