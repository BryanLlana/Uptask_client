import { z } from 'zod'

//* Auth & user
const AuthSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  password2: z.string(),
  token: z.string()
})

export type Auth = z.infer<typeof AuthSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password'>
export type UserRegistrationForm = Pick<Auth, 'name' | 'email' | 'password' | 'password2'>
export type ConfirmToken = Pick<Auth, 'token'>
export type RequestConfirmationCodeForm = Pick<Auth, 'email'>
export type ForgotPasswordForm = Pick<Auth, 'email'>
export type NewPasswordForm = Pick<Auth, 'password' | 'password2'>

//* Tasks
export const TaskStatusSchema = z.enum(['pending', 'onHold', 'inProgress', 'underReview', 'completed'])
export type TaskStatus = z.infer<typeof TaskStatusSchema>

export const TaskSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  project: z.string(),
  status: TaskStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string()
})

export type Task = z.infer<typeof TaskSchema>
export type TaskFormData = Pick<Task, 'name' | 'description'>

//* Projects
export const ProjectSchema = z.object({
  _id: z.string(),
  name: z.string(),
  customer: z.string(),
  description: z.string()
})

export const ProjectsSchema = z.array(
  ProjectSchema.pick({
    _id: true,
    name: true,
    customer: true,
    description: true
  })
)

export type Project = z.infer<typeof ProjectSchema>
export type ProjectFormData = Pick<Project, 'name' | 'customer' | 'description'>