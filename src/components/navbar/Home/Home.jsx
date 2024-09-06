import React from "react";
import arrayDadosBoxReserva from "../../arrayhome/arrayDadosBoxReserva";
import arrayCaixaNossaCabana from "../../arrayhome/arrayCaixaNossaCabana.js";
import arrayCollagePhotos from "../../arrayhome/arrayCollagePhotos";
import arraySobreOCamping from "../../arrayhome/arraySobreOCamping";
import arrayContact from "../../arrayhome/arrayContact";
import { Footer } from "../../../Footer";
function Home() {
    return (
        <><><><><><div className="imagem-fundo-principal">
            <img id="image" src="src/assets/home/foto_principal.jpg" />

            <div className="texto-imagem-princial">
                <h1 className="text-h1-home">PLANEJE SUA PRÓXIMA <br />ESCAPADA NA NATUREZA</h1>
                <p className="text-p-home">Temos algo para todos, desde pesca, camping e <br /> tiro com arco</p>
            </div>
        </div><div className="txt-promocao">
                <p className="texto-promocao">Nossas Promoções</p>
            </div><div className="area-caixa-pacotes">
                {arrayDadosBoxReserva.map(user => (

                    <div className="modelo-caixa">
                        <div className="modelo-imagem">
                            <img className="imagem" src={user.imagemURL} alt={user.alt} />
                        </div>
                        <div className="texto-caixa">
                            <h1>{user.titulo}</h1>
                            <p>{user.descricao}</p>
                            <div className="reserve-agora">
                                <a href="/packages">RESERVE AGORA</a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="area-caixa-nossaCabana1">
                {arrayCaixaNossaCabana.map(cabana => (

                    <><div className="titulo-box">CABANA 1</div><div className="box-descr-cabana">
                        <h1>{cabana.titulo}</h1>
                        <p>{cabana.descricao}</p>
                        <div className="inf-qtd">
                            <ul>
                                <li>{cabana.pessoas}</li>
                                <li>{cabana.quartos}</li>
                                <li>{cabana.banheiro}</li>
                            </ul>
                        </div>
                        <div className="inf-desc">
                            <ul>
                                <li>Pessoas</li>
                                <li>Banheiros</li>
                                <li>Quartos</li>
                            </ul>
                        </div>
                        <div className="btn-pai-reserv-cabana">
                            <div className="reserve-agora-cabana1">
                                <a href="/packages">RESERVE AGORA</a>
                            </div>
                        </div>
                    </div>
                        <div className="box-img-cabana1">
                            <img src={cabana.imagemURL} alt={cabana.alt} />
                        </div></>
                ))}
            </div>
        </><div className="collage_photos">
                {arrayCollagePhotos.map(collage => (

                    <><div className="explore_o_selvagem"><p>EXPLORE O SELVAGEM</p></div>

                        <div className="trail_1">
                            <img src={collage.imagemURL1} alt={collage.alt1} />
                        </div>

                        <div className="trail_2">
                            <img src={collage.imagemURL2} alt={collage.alt2} />
                            <div className="border"></div>
                        </div>

                        <div className="trail_3"><img src={collage.imagemURL3} alt={collage.alt3} />
                            <div className="border"></div>
                        </div>

                        <div className="descr_pai_collage">
                            <div className="descr_collage">
                                <p>{collage.descricao1}</p>
                                <p>{collage.descricao2}</p>
                                <p>{collage.descricao3}</p>
                                <p>{collage.descricao4}</p>
                                <p>{collage.descricao5}</p>
                            </div>
                            <div className="saber_mais"><a href="/">SABER MAIS</a></div>
                        </div></>

                ))}
            </div></><div className="container_princ_sobre_o_camp">
                {arraySobreOCamping.map(sobreCamping => (
                    <> <div className="img_sobre_camping">
                        <img src={sobreCamping.imagemURL} />
                        <div className="caixa_desc_camp">
                            <div className="title_sobre_camping"><h1>{sobreCamping.titulo}</h1></div>
                            <div className="text_sobre_camping">{sobreCamping.descricao1} <br /><br />{sobreCamping.descricao2} <br /><br />{sobreCamping.descricao3}</div>
                            <div className="reserve_cx_sobreCamping">
                                <a href="/packages"><p>AGENDE AGORA</p></a>
                            </div>
                        </div>

                    </div> </>))}
            </div></>


            <div className="area_localizacao">
                <div className="texto_princ_loc">SUA LOCALIZAÇÃO</div>

                {arrayContact.map(localizacao => (
                    <div className="area_desc_location">
                        <h1>{localizacao.titulo}</h1>
                        <p>{localizacao.descricao1}<br />{localizacao.descricao2}</p>
                        <br />
                        <p>{localizacao.descricao3}</p>
                        <p>{localizacao.descricao4}</p>
                        <div className="contatar"><a href=""><p>ENTRAR EM CONTATO</p></a></div>
                    </div>
                ))}
                <div className="localizacao_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55626.845906485985!2d-50.90766799539108!3d-29.379719867572724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951932427804321f%3A0xa71c25f081e5aea6!2sGramado%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1693913547269!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
                </>
            
            <div className="inscreva_se">
                <div className="texto_princ_increv">
                    <h1>INSCREVA-SE PARA EVENTOS DA VERDADEIRA NATUREZA</h1>
                     <p>Inscreva-se hoje, ofertas especiais mensais e muito mais!</p>
                    
                    <div className="sub_email_princ">
                    <form>
                    <input className="sub_email" type="text" placeholder="email@example.com"></input>
                    </form>
                    </div>
                    <div className="btn_sign_home">
                        <a href=""><p>INSCREVER-SE</p></a>
                    </div>
                </div>
                <Footer/>
                </div></>

    )
}
export default Home;