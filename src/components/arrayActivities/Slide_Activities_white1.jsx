import arrayActivities_white1 from "./arrayActivities_white1";
function Slide_Activities_white1(){
    return(
        
        <div className="box_atv_disp">
        <div className="atividade_disp">
        {arrayActivities_white1.map(atv_disp=>(
    

        <><div className="descr_atividade_disp">
                <div className="title_atv_disp">
                    <p>{atv_disp.titulo}</p>
                </div>
                <div className="descr_atv_disp">
                    <p>{atv_disp.descricao}</p>
                    <p>{atv_disp.descricao}</p>
                </div>
                <div className="btn_atv_disp">
                    <a href="/about">SABER MAIS</a>
                </div>
            </div>
            <div className="photo_atv_disp">
                    <img src={atv_disp.imagem} />
                </div></>
        ))}
        </div>
        </div>
        
    )
}
export default Slide_Activities_white1;