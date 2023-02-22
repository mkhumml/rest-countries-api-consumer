import React from 'react'
//import styles from './Header.module.css'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'


type Props = {}

const Header = (props: Props) => {
    return (
        <div className="dark:bg-elementsDark shadow-md">
            <div className='flex justify-between items-center mx-auto xl:px-4 p-6' style={{ maxWidth: "1440px" }}>
                <h1 className='hover:cursor-pointer' onClick={() => window.location.reload()}>Where in the world?</h1>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Header