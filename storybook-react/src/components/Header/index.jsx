import './styles.css'

export default function Header({logo, perfil, ancora1, ancora2, ancora3, ancora4, color, editGap}) {
    return (
        <header style={{backgroundColor: color}}>
            <img src={logo} alt="" />
            <nav style={{gap: editGap}}>
                <a href="">{ancora1}</a>
                <a href="">{ancora2}</a>
                <a href="">{ancora3}</a>
                <a href="">{ancora4}</a>
            </nav>
            <img src={perfil} alt="" />
        </header>
    )
}