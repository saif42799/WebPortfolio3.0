
function Navbar() {

    return (
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#home" class="nav-link">
                        <img src="./src/assets/images/homeLogo.png" class="navImgTransition"></img>
                        <span class="link-text -rotate-45">Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link">
                        <img src="./src/assets/images/aboutLogo.png" class="navImgTransition"></img>
                        <span class="link-text">About</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#projects" class="nav-link">
                        <img src="./src/assets/images/projectLogo.png" class="navImgTransition"></img>
                        <span class="link-text">Projects</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">
                        <img src="./src/assets/images/contactLogo.png" class="navImgTransition"></img>
                        <span class="link-text">Contact</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <img src="./src/assets/images/darkLogo.png" id="darkLightModeToggle" class="navImgTransition"></img>
                        <span class="link-text" id="dlTextSwitch">Dark Mode</span>
                    </a>
                </li>
            </ul>

        </nav>


    );
}

export default Navbar
