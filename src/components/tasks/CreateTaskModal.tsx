import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TaskForm from './TaskForm';
import { useForm } from 'react-hook-form';
import { TaskFormData } from '@/types/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '@/services/taskApi';
import { toast } from 'react-toastify';

const CreateTaskModal = () => {
  const navigate = useNavigate()

  //* Leer si modal existe
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const existsNewTask = queryParams.get('newTask')
  const show = existsNewTask ? true : false

  //* Obtener project id
  const { id } = useParams()

  const initialValues: TaskFormData = {
    name: '',
    description: ''
  }
  const { register, handleSubmit, reset, formState: { errors }} = useForm({ defaultValues: initialValues })

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: createTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey: ['editProject', id]}),
      toast.success(data.message)
      reset()
      navigate(location.pathname, { replace: true })
    }
  })

  const handleCreateTask = handleSubmit((formData: TaskFormData) => {
    const data = {
      projectId: id!,
      formData    
    } 
    mutate(data)
  })

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname, {
          replace: true
        })}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                  <Dialog.Title
                    as="h3"
                    className="font-black text-4xl  my-5"
                  >
                    Nueva Tarea
                  </Dialog.Title>

                  <p className="text-xl font-bold">Llena el formulario y crea  {''}
                    <span className="text-fuchsia-600">una tarea</span>
                  </p>

                  <form onSubmit={handleCreateTask} className='mt-10 space-y-3' noValidate>
                    <TaskForm register={register} errors={errors}/>
                    <input
                      type="submit"
                      value='Crear tarea'
                      className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white font-bold cursor-pointer transition-colors"
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CreateTaskModal