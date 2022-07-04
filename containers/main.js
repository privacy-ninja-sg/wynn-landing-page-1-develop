const MainContainer = ({ children }) => {
    return (
        <div className="sm:container md:container lg:container xl:container mx-auto">
            {children}
        </div>
    )
}

export default MainContainer