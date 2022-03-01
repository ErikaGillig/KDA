
const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
  
    return (
      <div className="novedades">
        <div className="cajita">
        <h1 className="titulo"> {title}</h1>
        <h2 className="subtitulo">{subtitle}</h2>
        <img classname="photo" alt="alt" src={imagen} />
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <hr />
        </div>
      </div>
    );
  };
  
  export default NovedadItem;