import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import ProjectsView from '@/views/ProjectsView'
import CreateProjectView from './views/projects/CreateProjectView'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<ProjectsView />} index />
          <Route path='/projects/create' element={<CreateProjectView />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router