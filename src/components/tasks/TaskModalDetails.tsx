import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTaskById } from '@/services/taskApi';
import { formatDate } from '@/helpers/formatDate';
import Spinner from '../Spinner';
import { toast } from 'react-toastify';

const statusTranslations: {[key: string]: string} = {
  pending: 'Pendiente',
  onHold: 'En espera',
  inProgress: 'En progreso',
  underReview: 'En revisión',
  completed: 'Completado'
}

export default function TaskModalDetails() {
  const location = useLocation()
  const search = new URLSearchParams(location.search)
  const taskId = search.get('viewTask')
  const existsViewTask = taskId ? true : false

  const { id } = useParams()

  const navigate = useNavigate()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['task', taskId],
    queryFn: () => getTaskById(taskId!, id!),
    enabled: existsViewTask,
    retry: false
  })

  if (isError) {
    toast.error(error.message, { toastId: 'error '})
    return <Navigate to={`/projects/${id}`}/>
  }

  if (isLoading) return <Spinner />
  if (data) return (
    <>
      <Transition appear show={existsViewTask} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname, { replace: true })}>
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
                  <p className='text-sm text-slate-400'>Agregada el: {formatDate(data.createdAt)}</p>
                  <p className='text-sm text-slate-400'>Última actualización: {formatDate(data.updatedAt)}</p>
                  <Dialog.Title
                    as="h3"
                    className="font-black text-4xl text-slate-600 my-5"
                  >{data.name}
                  </Dialog.Title>
                  <p className='text-lg text-slate-500 mb-2'>Descripción: {data.description}</p>
                  <div className='my-5 space-y-3'>
                    <label className='font-bold'>Estado Actual: {statusTranslations[data.status]}</label>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}