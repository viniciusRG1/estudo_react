const TemplateExpressions = () => {
    const name = "Cazé"

    const data = {
        idade: 23,
        job: "programador",
    }

    return(
        <div>
            <h1>Olá {name} como você está</h1>
            <p>tu é {data.job} e tem {data.idade} anos</p>
        </div>
    )
}

export default TemplateExpressions;