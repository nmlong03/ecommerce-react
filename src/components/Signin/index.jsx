import { useForm } from "react-hook-form";
import { signin } from "../../services/user";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    signin(data).then(({ data }) => {
      localStorage.setItem('userId', data.user._id

      )
      navigate('/')
      window.location.reload()

    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Đăng nhập</h1>
          <input
            type="text"
            id="email" {...register('email', {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              }
            })}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Email" />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          <input
            type="password"
            id="password" {...register('password', {
              required: "required",
              minLength: {
                value: 6,
                message: "min length is 6"
              }
            })}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Password" />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-purple-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >Đăng nhập</button>
          <div className="text-grey-dark mt-6">
            Nếu chưa đã có tài khoản,
            <a href="/signup" className="no-underline text-purple-600 border-b border-blue text-blue">
              Đăng ký tại đây!
            </a>.
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignIn