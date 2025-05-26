
function Navbar() {

    return (
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#home" class="nav-link">
                        <img src="/images/homeLogo.png" class="navImgTransition"></img>
                        <span class="link-text -rotate-45">Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link">
                        <img src="/images/aboutLogo.png" class="navImgTransition"></img>
                        <span class="link-text">About</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#skills" class="nav-link">
                        <img src="/images/Group46.png" class="navImgTransition"></img>
                        <span class="link-text">Skills</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#projects" class="nav-link">
                        <img src="/images/projectLogo.png" class="navImgTransition"></img>
                        <span class="link-text">Projects</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">
                        <img src="/images/contactLogo.png" class="navImgTransition"></img>
                        <span class="link-text">Contact</span>
                    </a>
                </li>
            </ul>

        </nav>


    );
}

export default Navbar
