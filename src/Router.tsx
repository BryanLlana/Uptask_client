import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import ProjectsView from '@/views/ProjectsView'
import CreateProjectView from './views/projects/CreateProjectView'
import EditProjectView from './views/projects/EditProjectView'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<ProjectsView />} index />
          <Route path='/projects/create' element={<CreateProjectView />}/>
          <Route path='/projects/edit/:id' element={<EditProjectView />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router