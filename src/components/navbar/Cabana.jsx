import React from "react";
import photo_principal from '../../assets/sites/cabanas/cabana_photo_principal.jpg';
import arrayCabanasModel from '../arrayCabana/arrayCabanasModel';
import arrayPrecoItens from "../arrayCabana/arrayPrecoItens";
import arrayDescrpt from "../arrayCabana/arrayDescpt";
import { Footer } from "../../Footer";
const Cabana = () => {
    return (
        <><><div className='barra_navbar'></div><div className="imagem_principal_nossasCabanas">
            <img src={photo_principal} alt="" />
            <div className="text_principal_nossascabanas">
                <p>NOSSAS CABANAS</p>
            </div>

        </div><div className="box_cabanas">
                {arrayCabanasModel.map(cabanas => (

                    <div className="box_cabana">
                        <div className="box_imagem">
                            <img src={cabanas.fotoCabana} />
                        </div>
                        <div className="box_info">
                            <div className="titulo_cabana">
                                <h1>{cabanas.titulo}</h1>
                            </div>
                            <div className="descr_cabana">
                                <p>{cabanas.descricao}</p>
                            </div>
                            <div className="botao_cabana"><a href="/packages">RESERVAR</a></div>
                        </div>
                    </div>
                ))}

            </div></>
            <div className="pnel_precos_de_aluguel">
               {arrayPrecoItens.map(itenss =>(
                <main>
                    <section className="module parallax parallax-1">
                        <div className="titulo_preco_aluguel">
                            <p>PREÇOS DE ALUGUEL</p>
                        </div>
                       <div className="box_justTamanhoAlinhado">
                        <div className="align_itens">
                        <div className="item_esquerda">
                            <ul>
                                <div className="linha_titulo">{itenss.Item}</div>
                                <li>{itenss.Item1}</li>
                                <li>{itenss.Item2}</li>
                                <li>{itenss.Item3}</li>
                                <li>{itenss.Item4}</li>
                                <li>{itenss.Item5}</li>
                            </ul>
                        </div>
                        <div className="inclui_meio">
                            <ul>
                                <div className="linha_titulo">{itenss.Inclui}</div>
                                <li>{itenss.Inclui1}</li>
                                <li>{itenss.Inclui2}</li>
                                <li>{itenss.Inclui3}</li>
                                <li>{itenss.Inclui4}</li>
                                <li>{itenss.Inclui5}</li>
                            </ul>
                        </div>
                        <div className="preco_direita">
                            <ul>
                                <div className="linha_titulo">{itenss.Valor}</div>
                                <li>{itenss.preco1}</li>
                                <li>{itenss.preco2}</li>
                                <li>{itenss.preco3}</li>
                                <li>{itenss.preco4}</li>
                                <li>{itenss.preco5}</li>
                            </ul>
                            </div>.container 
                        </div>
                        </div>
                    </section>
                    
                    <section className="module content">
                        {arrayDescrpt.map(relaxe=>(
                        <div className="container">
                        <div className="recarregue_energia">
                        
                        <div className="recarregue_titulo">
                        <h1>{relaxe.titulo}</h1>
                        </div>
                       
                        <div className="recarregue_descrip">
                        <p>{relaxe.descricao1}</p>
                        <p>{relaxe.descricao2}</p>
                        <p>{relaxe.descricao3}</p>
                        </div>
                       
                        <div className="recarregue_reservar">
                            <a href="/packages">Reservar</a>
                        </div>
                        </div>
                        <div className="recarregue_img">
                            <img src={relaxe.imagem01}/>
                        </div>
                        </div>
                        ))}
                    </section>
                    <div className="texto_princ_increv">
                        <h1>INSCREVA-SE PARA EVENTOS DA VERDADEIRA NATUREZA</h1>
                        <p>Inscreva-se hoje, ofertas especiais mensais e muito mais!</p>
                        <div className="sub_email_princ">
                            <form>
                                <input className="sub_email" type="text" placeholder="email@example.com"/>
                            </form>
                        </div>
                        <div className="btn_sign_home">
                            <a href='/'>
                                <p>INSCREVER-SE</p>
                            </a>
                        </div>
                    </div>
                    <Footer/>
                </main>
              ))}
                </div></>
    )
}
export default Cabana;