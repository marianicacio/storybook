export default function Header({logo, perfil, ancora1, ancora2, ancora3}) {
    return (
        <header>
            <img src={logo} alt="" />
            <nav>
                <a href="">{ancora1}</a>
                <a href="">{ancora2}</a>
                <a href="">{ancora3}</a>
            </nav>
            <img src={perfil} alt="" />
        </header>
    )
}