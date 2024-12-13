
function TestimonialCard(props) {

    return (
        <div className="testimonial">
          <img src= {props.img} alt= {props.imgAlt} height="100px" />

          <p>
            <q>{props.testi}</q>
            <br />
            <span className="name">{props.name}</span>
          </p>
        </div>
    );
}

export default TestimonialCard;