import arrayActivities_gray1 from "./arrayActivities_gray1";
function Slide_Activities_gray1(){
    return(
        <div className="atv_disp_gray">
            {arrayActivities_gray1.map(atv_gray=>(

            <><div className="photo_atv_gray">
                    <img src={atv_gray.imagem} />
                </div><div className='descr_atv_gray'>
                        <div className='title_atv_gray'>
                            <h1>{atv_gray.titulo}</h1>
                        </div>
                        <div className='descr_Info_gray'>
                            <p>{atv_gray.descricao}</p>
                            <p>{atv_gray.descricao}</p>
                        </div>
                        <div className='btn_descr_gray'>
                            <a href='/packages'>RESERVAR AGORA</a>
                        </div>
                    </div>
                    </>
            ))}
        </div>
    )
}
export default Slide_Activities_gray1;