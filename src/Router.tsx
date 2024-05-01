import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import ProjectsView from '@/views/ProjectsView'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<ProjectsView />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router