import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { Project, TaskFormData } from "../types";

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