import { Link } from 'react-router'
import logoImg from '../../assets/logo.svg'
import { Container } from '../../components/container'
import { Input } from '../../components/input'

export function Login() {
    return (
        <Container>
            <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>
                <Link className='mb-6 max-w-sm w-full' to="/">
                    <img className='w-full' src={logoImg} alt="Logo" />
                </Link>

                <form className='bg-white max-w-xl w-full rounded-lg'>
                    <Input
                        type="email"
                        placeholder="ex: user@gmail.com..."
                        name="email"
                    />
                </form>
            </div>
        </Container>
    )
}