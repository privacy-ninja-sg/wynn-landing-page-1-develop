const Welcome = ({ memberUrl }) => {
    return (
        <section className="min-h-screen scroll-mt-24" id="welcome">
            <div className="flex flex-col items-stretch">
                <div className="selt-center p-10 select-none">
                    <img src="/icons/logo.png" className="mx-auto" />
                </div>
                <div>
                    <div className="flex flex-wrap justify-center gap-x-10 py-10">
                        <div className="relative transition-all ease-in-out duration-200 hover:scale-105 drop-shadow">
                            <a href={memberUrl + "/register-page"} target="_blank">
                                <div className="relative">
                                    <img src="/images/button/register.png" alt="register" className="mx-auto" />
                                </div>
                                <div className="absolute text-white text-3xl text-center w-full bottom-7">
                                    {/* สมัครสมาชิก */}
                                </div>
                            </a>
                        </div>
                        <div className="relative transition-all ease-in-out duration-200 hover:scale-105 drop-shadow">
                            <a href={memberUrl + "/login-page"} target="_blank">
                                <div className="relative">
                                    <img src="/images/button/login.png" alt="register" className="mx-auto" />
                                </div>
                                <div className="absolute text-white text-3xl text-center w-full bottom-7">
                                    {/* เข้าสู่ระบบ */}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#partner">
                        <img src="/images/button/scroll.png" className="mx-auto animate-bounce" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Welcome