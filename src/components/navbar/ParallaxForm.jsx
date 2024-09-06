function ParallaxForm(props){
    return(
       <div className="parallaxFormPrinc">
       <main>
        <section className="module_about_form parallax_about_form parallax-2_about_form">
            <div className="titulo_pacotes">
                <h1>{props.name}</h1>
            </div>
                <div className="forma">
                    <ul>
                        <li>
                        <p>Nome:</p>
                <input className="teste" type="text"></input>
                        </li>
              <li>
              <p>Email:</p>
                <input className="teste" type="email"></input>
              </li>
              <li>
              <p>Telefone:</p>
                <input className="teste" type="tel"></input>
              </li>
                    </ul>
                </div>

                <div className="formMessage">
                    <ul>
                        <li>
                    <p>Mensagem:</p>
                    <textarea name="formSMS" rows="2" cols="20"></textarea>
                        </li>
                    </ul>
                </div>
                
                <div className="fatherSend">
                <div className="sendMessage">
                    <a href="/">
                        <p>Enviar Mensagem</p>
                    </a>
                </div>
                </div>
        </section>
    </main>
    </div>
    )
}
export default ParallaxForm;