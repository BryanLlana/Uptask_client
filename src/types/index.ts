import { z } from 'zod'

//* Tasks
export const TaskStatusSchema = z.enum(['pending', 'onHold', 'inProgress', 'underReview', 'completed'])

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