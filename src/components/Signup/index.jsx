import { useForm } from 'react-hook-form'
import { signup } from "../../services/user";
const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const onSubmit = (data) => {
        signup(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} action="" className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Đăng ký</h1>
                    <input
                        id="name" {...register('name', { required: true})}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Name" />
                    {errors.name && errors.name.type === "required" && <span className="text-red-500">This is required</span>}
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
                        className = "block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder = "Password" />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    <input
                        type="password"
                        {...register("confirmPassword",  {validate: (value) => {
                            const { password } = getValues();
                            return password === value || "Passwords should match!";
                            }})}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Confirm Password" />
                        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-purple-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Đăng ký</button>
                </div>

                <div className="text-grey-dark mt-6">
                    Nếu đã có tài khoản,
                    <a href="/signin" className="no-underline text-purple-600 border-b border-blue text-blue">
                        Đăng nhập tại đây!
                    </a>.
                </div>
            </div>
        </form>
    )
}

export default SignUp