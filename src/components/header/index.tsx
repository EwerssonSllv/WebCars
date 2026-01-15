import { Link } from 'react-router'
import logoimg from '../../assets/logo.svg'
import { FiLogIn, FiUser } from 'react-icons/fi'

export function Header() {
    const signed = false
    const loadingAuth = false

    return (
        <div className='w-full flex items-center justify-center h-16 bg-white drop-shadow-2xl mb-4'>
            <header className='flex w-full items-center justify-between max-w-7xl px-4 mx-auto'>
                <Link to="/">
                    <img src={logoimg} alt="Logo" />

                </Link>

                {!loadingAuth && signed && (
                    <Link to="/dashboard">
                        <div className='border-2 rounded-full p-1 border-gray-900'>
                            <FiUser size={24} color='black' />
                        </div>
                    </Link>
                )}

                {!loadingAuth && !signed && (
                    <Link to="/login">
                        <FiLogIn size={24} color='black' />
                    </Link>
                )}

            </header>
        </div>
    )
}