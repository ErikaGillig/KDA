const NovedadItem = (props) => {
    const { tittle, subtitle, imagen, body } = props;

    return(
        <div className='novedades'>
            
            <h1 className='noticias'> {tittle}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />

        </div>
    );
}

export default NovedadItem;