// darkmode icon
import { FaMoon } from 'react-icons/fa';
type Props = {}

const ThemeSwitcher = (props: Props) => {
    const handleCheck = () => {
        (document.documentElement.classList.value === '') ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }

    return (
        <div className="flex items-center">
            <FaMoon className='mr-2 hover:cursor-pointer' />
            <label htmlFor="theme-switch" className='hover:cursor-pointer'>Dark Mode</label>
            <input className='hidden' type="checkbox" onClick={() => handleCheck()} id="theme-switch" />
        </div>
    )
}

export default ThemeSwitcher