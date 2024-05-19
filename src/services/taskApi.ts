import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { Project, Task, TaskFormData } from "../types";

export const createTask = async ({projectId, formData}: { projectId: Project['_id'], formData: TaskFormData }) => {
  try {
    const { data } = await api.post(`/task/${projectId}`, formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const getTaskById = async (taskId: Task['_id'], projectId: Project['_id']): Promise<Task | undefined> => {
  try {
    const { data } = await api.get(`/task/${projectId}/${taskId}`)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const updateTaskById = async ({taskId, projectId, formData}: { taskId: Task['_id'], projectId: Project['_id'], formData: TaskFormData }) => {
  try {
    const { data } = await api.put(`/task/${projectId}/${taskId}`, formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}