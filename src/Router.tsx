import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import ProjectsView from '@/views/ProjectsView'
import CreateProjectView from './views/projects/CreateProjectView'
import EditProjectView from './views/projects/EditProjectView'
import ProjectDetailsView from './views/projects/ProjectDetailsView'
import AuthLayout from './layouts/AuthLayout'
import LoginView from './views/auth/LoginView'
import RegisterView from './views/auth/RegisterView'
import ConfirmAccountView from './views/auth/ConfirmAccountView'
import RequestNewCodeview from './views/auth/RequestNewCodeView'
import ForgotPasswordView from './views/auth/ForgotPasswordView'
import NewPasswordView from './views/auth/NewPasswordView'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<ProjectsView />} index />
          <Route path='/projects/create' element={<CreateProjectView />}/>
          <Route path='/projects/:id' element={<ProjectDetailsView />}/>
          <Route path='/projects/edit/:id' element={<EditProjectView />}/>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='/auth/login' element={<LoginView />} />
          <Route path='/auth/register' element={<RegisterView />} />
          <Route path='/auth/confirm-account' element={<ConfirmAccountView />} />
          <Route path='/auth/request-new-code' element={<RequestNewCodeview />} />
          <Route path='/auth/forgot-password' element={<ForgotPasswordView />} />
          <Route path='/auth/new-password' element={<NewPasswordView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router