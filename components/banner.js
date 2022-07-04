export const BannerPartner = ({ status, title, logo }) => {
    return (
        <div className="relative select-none">
            <div className="relative">
                <img src={'/images/button/banner-' + (status ? 'on' : 'off') + '.png'} className="mx-auto w-full" />
            </div>
            <div className="absolute text-center w-full bottom-7 text-white">
                {title}
            </div>
            <div className="absolute text-center top-0 w-full p-10">
                <img src={logo} />
            </div>
        </div>
    )
}

export const BannerFormula = ({ status, title, logo }) => {
    return (
        <div className="relative select-none">
            <div className="relative">
                <img className="w-full mx-auto" src={'/images/button/big-button-' + (status ? 'on' : 'off') + '.png'} />
            </div>
            <div className="absolute text-center top-0 w-full p-10">
                <img src={logo} />
            </div>
        </div>
    )
}