import { Link, Navigate, useNavigate } from "react-router-dom"
import ProjectForm from "./ProjectForm"
import { Project, ProjectFormData } from '../../types/index';
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "@/services/projectApi";
import { toast } from "react-toastify";

type Props = {
  data: ProjectFormData,
  id: Project['_id']
}

const ProjectEditForm = ({ data, id }: Props) => {
  const navigate = useNavigate()
  const initialValues: ProjectFormData = {
    name: data?.name!,
    customer: data?.customer!,
    description: data?.description!
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: updateProject,
    onError: error => {
      toast(error.message)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey: ['projects']})
      queryClient.invalidateQueries({queryKey: ['project', id]})
      toast.success(data.message)
      navigate('/')
    }
  })

  const handleForm = handleSubmit((formData: ProjectFormData) => {
    const data = {
      formData,
      id
    }
    mutation.mutate(data)
  })
  
  return (
    <>
      <h1 className="text-5xl font-black">Editar proyecto</h1>
      <p className="text-xl font-light text-gray-500 mt-5">Llena el siguiente formulario para editar el proyecto</p>

      <nav className="my-5">
        <Link
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          to='/'
        >Volver
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleForm}
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          noValidate
        >
          <ProjectForm register={register} errors={errors} />

          <input
            type="submit"
            value='Guardar cambios'
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  )
}

export default ProjectEditForm