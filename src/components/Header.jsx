import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Logout failed", error);
        }
    };


    return (
        <>
            <div className='fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-gray-800 text-white p-4 shadow-md'>
                <div>
                    <Link to='/' className='text-2xl font-bold hover:text-lime-600'>
                        Dev blog
                    </Link>

                    <button className='ml-10' onClick={toggleTheme}>
                        {theme === 'light' ? '🌞' : '🌙'}
                    </button>

                </div>


                <div>
                    <ul className='flex space-in-between items-center'>
                        <li>
                            <NavLink to='/'
                                className={({ isActive }) => ` hover:text-lime-600 px-4 py-2
                                ${isActive ? 'text-orange-600' : 'text-white'} `
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/write'
                                className={({ isActive }) => ` hover:text-lime-600 px-4 py-2
                                ${isActive ? '  text-orange-600' : 'text-white'}`
                                }>
                                Write
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile'
                                className={({ isActive }) => ` hover:text-lime-600 px-4 py-2
                                ${isActive ? '  text-orange-600' : 'text-white'}`
                                }>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'
                                className={({ isActive }) => ` hover:text-lime-600 px-4 py-2
                                ${isActive ? '  text-orange-600' : 'text-white'} `
                                }>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/signup'
                                className={({ isActive }) => ` hover:text-lime-600 px-4 py-2
                                ${isActive ? '  text-orange-600' : 'text-white'} `
                                }>
                                Sign Up
                            </NavLink>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="text-white hover:text-lime-600  px-4 py-2 transition duration-200 font-medium"
                            >
                                Logout
                            </button>
                        </li>

                    </ul>

                </div>



            </div>

        </>


    )
}

export default Header
