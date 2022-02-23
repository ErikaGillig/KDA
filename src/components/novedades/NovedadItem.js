const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
  
    return (
      <div className="novedades">
        <h1 className="noticias"> {title}</h1>
        <h2>{subtitle}</h2>
        <img alt="alt" src={imagen} />
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <hr />
      </div>
    );
  };
  
  export default NovedadItem;