import React from "react";
import Modal from 'react-modal';
import arraytestemodal from './modal/arraytestemodal';
import arraytrilhas from "../arrayPackages/arraytrilhas";
import Slide_Activities_gray2 from "../arrayActivities/Slide_Activities_gray2";
import Slide_Activities_white1 from "../arrayActivities/Slide_Activities_white1";
import Slide_Activities_white2 from "../arrayActivities/Slide_Activities_white2";
import Slide_Activities_gray1 from "../arrayActivities/Slide_Activities_gray1";
import InscrevaSe from "./Inscreva_se";
import { Footer } from "../../Footer";
arraytrilhas

const Activities = ()=>{
    return(
        <><main>
            <section className="module4 parallax4 parallax-4">
                <div className="titulo_pacotes">
                    <p>ATIVIDADES DISPONÍVEIS</p>
                </div>
            </section>
        </main>
        <Slide_Activities_white1/>
        <Slide_Activities_gray1/>
        <Slide_Activities_white2/>
        <Slide_Activities_gray2/>
        <InscrevaSe/>
        <Footer/>

    
            </>
    )
}
export default Activities;