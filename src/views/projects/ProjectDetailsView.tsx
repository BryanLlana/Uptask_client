import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { getProject } from "@/services/projectApi"
import Spinner from "@/components/Spinner"
import CreateTaskModal from "@/components/tasks/CreateTaskModal"
import TaskList from "@/components/tasks/TaskList"
import EditTaskData from "@/components/tasks/EditTaskData"
import TaskModalDetails from "@/components/tasks/TaskModalDetails"

const ProjectDetailsView = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['project', id],
    queryFn: () => getProject(id!),
    retry: false
  })

  if (isLoading) return <Spinner />
  if (isError) return <Navigate to='/404' />
  if (data) return (
    <>
      <h1 className="text-5xl font-black">{ data.name }</h1>
      <p className="text-xl font-light text-gray-500 mt-5">{ data.description }</p>

      <nav className="my-5 flex gap-3">
        <button
          type="button"
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          onClick={() => navigate('?newTask=true')}
        >Agregar tarea
        </button>
      </nav>

      <TaskList tasks={data.tasks} />
      <CreateTaskModal />
      <EditTaskData />
      <TaskModalDetails />
    </>
  )
}

export default ProjectDetailsView