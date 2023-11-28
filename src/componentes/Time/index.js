import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria  }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nick}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nick={colaborador.nick} posicao={colaborador.posicao} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time