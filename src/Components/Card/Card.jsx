import './Card.css'

export default function Card(props) {
    return(
        <div className="main">
            <main>
                <div className="viewContainer">
                    {props.imgArte}
                    <div className="cor"></div>
                </div>
            </main>

            <div className="descricao">
                <h2>{props.titulo}</h2>              
                <p>{props.descricao}</p>
            </div>

            <div className="infos">
                <span className="cripto">{props.imgCristal} {props.valor}</span>
                <span>{props.imgClock} {props.diasRestantes}</span>
                
            </div>

            <footer className="footer">
                <div className="container">
                    {props.imgCriadordaArte}
                    <span className="span">creation of <span className="spanNome">{props.nome}</span> </span>              
                </div>
            </footer>
            
        </div>
    )
}