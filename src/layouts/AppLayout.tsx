import { Link, Outlet, Navigate } from 'react-router-dom'
import Logo from '@/components/Logo'
import NavMenu from '@/components/NavMenu'
import { useAuth } from '@/hooks/useAuth'
import Spinner from '@/components/Spinner'

const AppLayout = () => {
  const { data, isError, isLoading } = useAuth()

  if (isLoading) return <Spinner />
  if (isError) return <Navigate to='/auth/login' />

  return (
    <>
      <header className='bg-gray-800 py-5'>
        <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
          <div className='w-64'>
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          <NavMenu user={data!} />
        </div>
      </header>

      <section className='max-w-screen-xl mx-auto mt-10 p-5'>
        <Outlet />
      </section>

      <footer className='py-5'>
        <p className='text-center'>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default AppLayout