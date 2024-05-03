import api from "@/lib/axios"
import { Project, ProjectFormData, ProjectsSchema } from "../types"
import { isAxiosError } from "axios"

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

export const getProject = async (id: Project['_id']): Promise<Project | undefined> => {
  try {
    const { data } = await api.get(`/project/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateProject = async ({ formData, id }: { formData: ProjectFormData, id: String }) => {
  try {
    const { data } = await api.put(`/project/${id}`, formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    }
  }
}