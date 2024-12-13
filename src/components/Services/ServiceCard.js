function ServiceCard(props) {
  return (
    <div className="service">
      <div className="icon">
        <ion-icon name={props.icon} size="large"></ion-icon>
      </div>
      <h5>{props.title}</h5>
      <p>
        {props.description}
      </p>
    </div>
  );
}

export default ServiceCard;
