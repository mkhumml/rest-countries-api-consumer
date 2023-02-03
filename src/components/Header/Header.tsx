import React from 'react'
//import styles from './Header.module.css'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'


type Props = {}

const Header = (props: Props) => {
    return (
        <div className="dark:bg-elementsDark">
            <div className='flex justify-between items-center mx-auto py-6' style={{ maxWidth: "1440px" }}>
                <h1>Where in the world?</h1>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Header