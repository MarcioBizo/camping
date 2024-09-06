import React from "react";
import image1 from '../../assets/packages/camp1.jpg';
import arraypackages1 from "../arrayPackages/arraypackages1";
import arraypackages3 from "../arrayPackages/arraypackages3";
import arraytrilhas from "../arrayPackages/arraytrilhas";
import EmailCabana from "./emailCabana";
import { Footer } from "../../Footer";
import InscrevaSe from "./Inscreva_se";
const Packages = ()=>{
    return(
        <><main>
            <section className="module parallax parallax-2">
                <div className="titulo_pacotes">
                    <p>NOSSOS PACOTES</p>
                </div>
                <div className="nossos_pacotes">
                    <a href="/packages">AGENDE AGORA</a>
                </div>
            </section>
        </main>
        <div className="packages2_box">
            {arraypackages1.map(packages1=>(
            <div className="model_packages2">
                <div className='model_box_packages2'>
                    <div className="model_box_image">
                   <img src={packages1.image}/>
                    </div>
                    <div className="model_box_desc">
                    <div className="titulo_package2">
                    <p>{packages1.titulo}</p>
                    </div>
                    <div className="descr_package2">
                        <p>{packages1.descricao}</p>
                    </div>
                    <div className="btn_packages1">
                        <a href="/packages">SELECIONAR PACOTE</a>
                    </div>
                    </div>
                </div>
            </div>
            ))}
            </div>
           
            <div className="packages3_box">
                {arraypackages3.map(packages3=>(
              <div className="model_box_packages3">
                <div className="model_package3_princ">
                <div className="model_box_image3">
                    <img src={packages3.imagem}/>
                    </div>
                    <div className="model_box_descr3">
                    <div className="model_package3_title">
                        <p>{packages3.titulo}</p>
                    </div>
                    <div className="count_day">
                        <p>{packages3.days}</p>
                    </div>
                    <div className="model_package3_descr">
                        <p>{packages3.descricao}</p>
                    <div className="btn_package3_agende">
                        <a href="/packages">AGENDE AGORA</a>
                    </div>
                    </div>
                    </div>
                </div>
              </div>
                ))}
            </div>
            <div className="poder_natureza">
            <main>
            <section className="module3 parallax3 parallax-3">
                <div className="titulo_pacotes">
                    <p>LIBERE O PODER DA NATUREZA</p>
                </div>
                <div className="descr_nature">
                    <p>Não é nenhuma surpresa que a cada ano as taxas de ansiedade e depressão aumentem à medida que o estresse diário da vida e do trabalho parece completamente abrangente.
                    <br/> No Pine Oak Camp, oferecemos alívio da agitação da vida cotidiana. <br/>Oferecemos uma oportunidade para você se desconectar e se reconectar com a natureza, oferecendo uma variedade de atividades para mantê-lo envolvido todos os dias da sua estadia conosco. <br/> Obrigado por considerar o Pine Oak Camp, estamos ansiosos para atendê-lo.</p>
                </div>
            </section>
        </main>
            </div>
            <div className="lindas_trilhas">
                {arraytrilhas.map(trilhas=>(
                <><div className="model_phot_trilhas">
                        <img src={trilhas.imagem} />
                    </div><div className="model_drescr_trilhas">
                            <div className="mode_descr_title">
                                <h1>{trilhas.titulo}</h1>
                            </div>
                            <div className="model_descr_info">
                                <p>{trilhas.descrição1}</p>
                                <p>{trilhas.descrição2}</p>
                            </div>
                            <div className="btn_trilha">
                                <a href="/about">SABER MAIS</a>
                            </div>
                        </div>
                        </>
                ))}
            </div>
         <InscrevaSe/>
         <Footer/>
            </>
    )
}
export default Packages;