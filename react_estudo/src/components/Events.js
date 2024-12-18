const Events = () =>{
    const handleMyEvent = (e) => {
        console.log(e);

        console.log("ativado")
    }

    const render_sometrhing = (x) =>
{
        if(x){
            return <h3>estamos usando funcao</h3>
        }else{
            return <h3>aqui é o else da funcao</h3>
        }
}    
return(
        <div>
            <div>
                <button onClick={handleMyEvent}>clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clickado")}>aqui é um teste</button>
            </div>
            <div>
                {render_sometrhing(true)}
                {render_sometrhing(false)}
            </div>
        </div>
    )
}

export default Events;