import { useState } from "react"
import NewPasswordForm from '../../components/auth/NewPasswordForm';
import NewPasswordToken from "@/components/auth/NewPasswordToken";
import { ConfirmToken } from "@/types/index";

const NewPasswordView = () => {
  const [token, setToken] = useState<ConfirmToken['token']>('')
  const [isValidToken, setIsValidToken] = useState(false)

  return (
    <>
      <h1 className="text-5xl font-black text-white">Reestablecer password</h1>
      <p className="text-2xl font-light text-white mt-5">
        Ingrese el código que recibiste {''}
        <span className=" text-fuchsia-500 font-bold"> por email</span>
      </p>

      {isValidToken ? (
        <NewPasswordForm token={token} />
      ): (
        <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken}/>
      )}
    </>
  )
}

export default NewPasswordView