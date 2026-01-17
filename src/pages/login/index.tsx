import { Link, useNavigate } from 'react-router'
import logoImg from '../../assets/logo.svg'
import { Container } from '../../components/container'
import { Input } from '../../components/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { login as loginUser, logoutUser } from '../../services/authService'
import { useEffect } from 'react'

const schema = z.object({
    email: z.email("Invalid email address").nonempty("Email is required."),
    password: z.string().nonempty("Password is required.")
})

type FormData = z.infer<typeof schema>

export function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

     useEffect(() => {
            async function handleLogOut(){
                await logoutUser()
            }
            handleLogOut()
        }, [])

    async function onSubmit(data: FormData) {
        try {
            await loginUser(data.email, data.password);
            navigate("/dashboard", { replace: true })
        } catch (error) {
            console.error("Erro ao registrar", error);
        }
    }


    return (
        <Container>
            <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>
                <Link className='mb-6 max-w-sm w-full' to="/">
                    <img className='w-full' src={logoImg} alt="Logo" />
                </Link>

                <form onSubmit={handleSubmit(onSubmit)}
                    className='bg-zinc-50 max-w-xl w-full rounded-lg p-4'>
                    <div className='mb-3'>
                        <Input
                            type="email"
                            placeholder="ex: user@gmail.com"
                            name="email"
                            error={errors.email?.message}
                            register={register}
                        />

                    </div>

                    <div className='mb-3'>
                        <Input
                            type="password"
                            placeholder="********"
                            name="password"
                            error={errors.password?.message}
                            register={register}
                        />
                    </div>

                    <button type='submit' className='bg-zinc-900 w-full rounded-md text-white h-10 font-medium'>Access</button>
                </form>
                <Link to="/register">
                    Don't have an account? Register
                </Link>
            </div>
        </Container>
    )
}