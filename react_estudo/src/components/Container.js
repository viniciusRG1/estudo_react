const Container = ({children, my_value}) => {
    return(
        <div>
            <h2>
                este é um titulo dentro de um container
                {children}
                <p>{my_value}</p>
            </h2>
        </div>
    )
}

export default Container;