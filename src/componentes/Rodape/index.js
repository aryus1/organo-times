//src/componentes/Rodape/index.js

import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.instagram.com/marcelogo.guima/" target="_blank">
                        <img src="/imagens/ig.png" alt="Logo Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo Organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Marcelo Guimarães.
            </p>
        </section>
    </footer>)
}

export default Rodape