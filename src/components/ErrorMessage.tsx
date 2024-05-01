const ErrorMessage = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="text-red-500 font-bold">
      {children}
    </div>
  )
}

export default ErrorMessage