import { UseFormRegister, FieldErrors } from 'react-hook-form'
import ErrorMessage from "@/components/ErrorMessage";

type Props = {
  register: UseFormRegister<{
    name: string,
    customer: string,
    description: string
  }>,
  errors: FieldErrors<{
    name: string;
    customer: string;
    description: string;
}>
}

export default function ProjectForm({ register, errors}: Props) {
  return (
    <>
      <div className="mb-5 space-y-3">
        <label htmlFor="name" className="text-sm uppercase font-bold">
          Nombre del Proyecto
        </label>
        <input
          id="name"
          className="w-full p-3 border border-gray-200"
          type="text"
          placeholder="Nombre del Proyecto"
          {...register("name", {
            required: "El Titulo del Proyecto es obligatorio",
          })}
        />

        {errors.name && (
          <ErrorMessage>{errors.name.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="customer" className="text-sm uppercase font-bold">
          Nombre Cliente
        </label>
        <input
          id="customer"
          className="w-full p-3  border border-gray-200"
          type="text"
          placeholder="Nombre del Cliente"
          {...register("customer", {
            required: "El Nombre del Cliente es obligatorio",
          })}
        />

        {errors.customer && (
          <ErrorMessage>{errors.customer.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="description" className="text-sm uppercase font-bold">
          Descripción
        </label>
        <textarea
          id="description"
          className="w-full p-3  border border-gray-200"
          placeholder="Descripción del Proyecto"
          {...register("description", {
            required: "Una descripción del proyecto es obligatoria"
          })}
        />

        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
    </>
  )
}