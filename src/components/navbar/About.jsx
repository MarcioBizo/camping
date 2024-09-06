import Parallaxx from "./Parallax";
import ParallaxForm from "./ParallaxForm";
import InscrevaSe from "./Inscreva_se";
import { Footer } from "../../Footer"
import JanelaModal from "./modal/Modal";



const About= ()=>{
    return(
  <><Parallaxx />
  <div className='areaAboutMap'>
    <div className="box_about_esquerda">
      <div className="box_about">      
      <div className="about_title">
        <h1>SOBRE NÓS</h1>
      </div>
      <div className="about_descr">
        <p>O que começou como um amor pela natureza se transformou em um negócio completo. Como uma empresa familiar, no Pine Oak Camp, nos orgulhamos de oferecer um belo e envolvente refúgio na natureza em Portland. Para tornar a sua experiência a melhor possível, fornecemos lenha, barracas e todos os equipamentos de atividades para sua comodidade. Não se esqueça de trazer licença de acampamento, calçado confortável, muda de roupa, protetor solar e chapéu!</p>
      <p>Para relaxar totalmente, recomendamos manter seu celular em nossos cofres de acampamento. Descontraia. Desconecte. Conecte-se com a natureza.</p>
      </div>
      </div>
    </div>
    <div className="box_about_direita">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55629.66139221736!2d-50.876435!3d-29.3745686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951932427804321f%3A0xa71c25f081e5aea6!2sGramado%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1696946312057!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
      <ParallaxForm
      name={'ENTRAR EM CONTATO'}
      />
      <InscrevaSe/>
      <Footer/>
      <JanelaModal/>
      
    </>
          )
}
export default About;