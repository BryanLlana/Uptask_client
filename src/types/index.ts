import { z } from 'zod'

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