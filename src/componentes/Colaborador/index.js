import './Colaborador.css'

const Colaborador = ({ nick, imagem, posicao, corDeFundo }) =>{
    return(<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src= {imagem} alt={nick}/>
        </div>
        <div className='rodape'>
            <h4>{nick}</h4>
            <h5>{posicao}</h5>
        </div>
    </div>)
}

export default Colaborador