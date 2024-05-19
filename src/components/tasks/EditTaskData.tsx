import { getTaskById } from "@/services/taskApi"
import { useQuery } from "@tanstack/react-query"
import { Navigate, useLocation, useParams } from "react-router-dom"
import Spinner from "../Spinner"
import EditTaskModal from "./EditTaskModal"

const EditTaskData = () => {
  //* Obtener id task
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const taskId = searchParams.get('editTaskId')

  //* Obtener id project
  const { id } = useParams()

  const {data, isLoading, isError } = useQuery({
    queryKey: ['task', taskId],
    queryFn: () => getTaskById(taskId!, id!),
    enabled: !!taskId,
    retry: false
  })

  if (isLoading) return <Spinner />
  if (isError) return <Navigate to='/404' />
  if (data) return <EditTaskModal task={data} />
}

export default EditTaskData