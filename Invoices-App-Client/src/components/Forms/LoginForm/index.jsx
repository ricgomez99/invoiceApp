import { signInUser } from '../../../lib/helpers'
import { useAuth } from '../../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Button, CardBody } from '@material-tailwind/react'
import InputField from './../Input/index'
import { useForm } from 'react-hook-form'
import { password, email } from '../validations/formValidations.js'
import InputError from '../Error/InputError'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { saveTokens, saveUserRole } = useAuth()
  const goTo = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { accessToken, refreshToken, role } = await signInUser({ data })
      saveUserRole(role)
      if (accessToken && refreshToken) {
        saveTokens({ access: accessToken, refresh: refreshToken })
        goTo('/dashboard')
      }
      return null
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      }
    } finally {
      reset()
    }
  })

  return (
    <Card
      color="white"
      className="w-full p-4 max-w-md flex justify-between shadow-lg text-center"
    >
      <CardBody className="p-0">
        <h2 className="font-lato font-bold text-3xl text-gray-800">Login</h2>
        <p className="font-lato font-normal text-sm text-[#616161] py-3">
          Hello 👋, welcome back!
        </p>
        <form className="py-3" onSubmit={onSubmit}>
          <div className="mb-1 w-[100%] flex flex-col gap-4">
            <InputField
              name="email"
              placeholder="Email"
              label="email"
              title="Email"
              type="email"
              register={register}
              validation={email}
            />
            {errors.email && <InputError message={errors.email.message} />}
            <InputField
              name="password"
              placeholder="Password"
              label="Password"
              title="Password"
              type="password"
              register={register}
              validation={password}
            />
            {errors.password && (
              <InputError message={errors.password.message} />
            )}
          </div>
          <div className="flex justify-center items-center mt-5">
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
        <span className="font-lato font-normal text-sm text-[#616161] py-3">
          Don not have an account yet?{' '}
          <Link
            to="/register"
            className="text-blue-400 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-200 hover:animate-pulse"
          >
            Register here
          </Link>
        </span>
      </CardBody>
    </Card>
  )
}
