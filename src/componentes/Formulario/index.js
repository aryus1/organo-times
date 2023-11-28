import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import React, { useState } from "react"

const Formulario = (props) => {

        const [nick, setNick] = useState('')
        const [posicao, setPosicao] = useState('')
        const [imagem, setImagem] = useState('')
        const[time, setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nick,
            posicao,
            imagem,
            time
        })
        setNick('')
        setPosicao('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
<CampoTexto 
    obrigatorio={true} 
    label="Nick do Jogador" 
    placeholde="Digite seu nick de usuário"
    valor={nick}
    aoAlterado={valor => setNick(valor)}
/>
<CampoTexto 
    obrigatorio={true} 
    label="Posição" 
    placeholder="Digite sua posição"
    valor={posicao}
    aoAlterado={valor => setPosicao(valor)}
/>
<CampoTexto 
    label="Imagem" 
    placeholder="Digite o endereço da imagem"
    valor={imagem}
    aoAlterado={valor => setImagem(valor)}
/>
                <ListaSuspensa obrigatorio ={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario