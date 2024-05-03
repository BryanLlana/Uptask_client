import { Navigate, useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { getProject } from "@/services/projectApi"
import Spinner from "@/components/Spinner"
import ProjectEditForm from "@/components/projects/ProjectEditForm"

const EditProjectView = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['project', id],
    queryFn: () => getProject(id!),
    retry: false
  })
  
  if (isLoading) return <Spinner />
  if (isError) return <Navigate to='/404' />
  if (data) return <ProjectEditForm data={data} id={id!} />
}

export default EditProjectView