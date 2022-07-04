import { useTranslation } from 'next-i18next'
import { useState } from 'react'

function NavLink({ to, children }) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }) {
    const { t } = useTranslation('common')

    return (
        <div className={`absolute top-0 left-0 z-50 h-screen w-screen bg-zinc-900 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md bg-cover bg-center`} style={{ backgroundImage: "url(/images/background/bg.png)" }}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-cover-center h-20"> {/*logo container*/}
                <a href="#">
                    <img src="/icons/logo.png" className="max-h-12 mx-auto my-1" alt="Wynnclub888" />
                </a>
            </div>
            <div className="flex flex-col ml-4 z-50 text-white">
                <a className="text-xl font-medium my-4" href="/#" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    {t('nav-home')}

                </a>
                <a className="text-xl font-normal my-4" href="#partner" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    {t('nav-partner')}
                </a>
                <a className="text-xl font-normal my-4" href="#technic" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    {t('nav-formula')}
                </a>
                <a className="text-xl font-normal my-4" href="#play" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    {t('nav-play')}
                </a>
            </div>
        </div>
    )
}

const Navbar = () => {
    const { t } = useTranslation('common')
    const memberUrl = process.env.NEXT_PUBLIC_MEMBER_HOST
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className='bg-center bg-cover sticky top-0 z-50' style={{ backgroundImage: "url(/images/background/menu_tab.png)" }}>
                <nav className="flex filter drop-shadow-md px-4 py-4 h-20 items-center bg-zinc-900 w-full">
                    <MobileNav open={open} setOpen={setOpen} />
                    <div className="flex container mx-auto">
                        <div className="w-1/6 flex items-center">
                            <a href="#">
                                <img src="/icons/logo.png" className="h-12 mx-auto my-1" alt="Wynnclub888" />
                            </a>
                        </div>
                        <div className="w-5/6 flex justify-end items-center">

                            <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                                setOpen(!open)
                            }}>
                                {/* hamburger button */}
                                <span className={`h-1 w-full bg-gray-300 rounded-lg transform transition-all duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                                <span className={`h-1 w-full bg-gray-300 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                                <span className={`h-1 w-full bg-gray-300 rounded-lg transform transition-all duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                            </div>

                            <div className="hidden md:flex">
                                <ul className="flex flex-nowrap justify-between scroll-smooth text-gray-300">
                                    <li className="mr-3 block text-2xl">
                                        <a href="#" className="inline-block cursor-pointer align-middle h-full f-prompt py-3 ease-in-out duration-200 hover:text-slate-600">
                                            {t('nav-home')}
                                        </a>
                                    </li>
                                    <li className="mr-3 block text-2xl">
                                        <a href="#partner" className="inline-block cursor-pointer align-middle h-full f-prompt py-3 ease-in-out duration-200 hover:text-slate-600">
                                            {t('nav-partner')}
                                        </a>
                                    </li>
                                    <li className="mr-3 block text-2xl">
                                        <a href="#technic" className="inline-block cursor-pointer align-middle h-full f-prompt py-3 ease-in-out duration-200 hover:text-slate-600">
                                            {t('nav-formula')}
                                        </a>
                                    </li>
                                    <li className="mr-3 block text-2xl">
                                        <a href={memberUrl + "/register-page"} target="_blank" className="inline-block cursor-pointer align-middle h-full f-prompt py-3 ease-in-out duration-200 hover:text-slate-600">
                                            {t('nav-play')}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar