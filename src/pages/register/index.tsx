import { Link } from 'react-router'
import logoImg from '../../assets/logo.svg'
import { Container } from '../../components/container'
import { Input } from '../../components/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'

const schema = z.object({
    name: z.string().nonempty("Name is required!"),
    email: z.email("Invalid email address").nonempty("Email is required!"),
    password: z.string().min(5, "The password must be longer than 5 digits!").nonempty("Password is required!")
})

type FormData = z.infer<typeof schema>

export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    function onSubmit(data: FormData) {
        toast.success("Registered successfully!")
        console.log(data)
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
                            type="text"
                            placeholder="ex: Ewersson..."
                            name="name"
                            error={errors.name?.message}
                            register={register}
                        />

                    </div>
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

                <Link to="/login">
                    Already have an account? Log In
                </Link>
            </div>
        </Container>
    )
}