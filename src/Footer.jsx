import logo_footer from '../src/assets/navbar/deer.png'
import linkedin from '../src/assets/footer/linkedin.png';
import github from '../src/assets/footer/github.png';
import instagram from '../src/assets/footer/instagram.png';
import yt from '../src/assets/footer/youtube.png';
export function Footer() {
    return (
        <div className="footer">
          <div className='footer_space'>
            <div className='primary_collum_solicials_logo'>
            <div className="logo_footer">
                <a href='/'>
                    <img src={logo_footer} alt='Logo footer' />
                </a>
            </div>
            <div className='social_media_footer'>
                <ul>
                    <li>
                        <a href=''>
                            <img src={linkedin}></img>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <img src={github}></img>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <img src={instagram}></img>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <img src={yt}></img>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
            <div className='mapa_site_footer'>
                <div className='title_mapa_site_footer'><p>MAPA DO SITE</p>
                <nav className='nav_footer1'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/sites'>Sites</a></li>
                    <li><a href='/packages'>Pacotes</a></li>
                    <li><a href='/activities'>Atividades</a></li>
                    <li><a href='/about'>Sobre</a></li>
                </ul>
                </nav>
                </div>
            </div>

        <div className='mapa_office_footer'>
            <div className='title_office_footer'><p>NOSSO ESCRITÓRIO</p>
            <nav className='nav_footer2'>
                <ul>
                    <li>200 W. Campground Ave. <br/>Portland, OR</li>
                    <br/><br/>
                    <li>Phone: 555-200-7860</li>
                    <br/><br/>
                    <li><a href='mailto:info@pineoak.com'>Email: info@pineoak.com </a></li>
                </ul>
            </nav>
            </div>
        </div>
        <div className='footer_horario_funcionamento'>
            <div className='title_horario_funcionamento'><p>HORÁRIO DE FUNCIONAMENTO</p></div>
            <div className='list_horario_funcionamento'>
                <ul>
                    <li>Mon -Fri: 8am -5pm<br/>
                        Sat-Sun: 10am-3pm <br/>
                        Closed on Christmas & New Years
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className='footer_directs'>
            <div className='text_directs'>
                <p>© 2023 All Rights Reserved | Pine Oak Camp | Powered by Cloudbeds</p>
                <p>Terms & Conditions / Policies</p>
            </div>
        </div>
        </div>
    )
}