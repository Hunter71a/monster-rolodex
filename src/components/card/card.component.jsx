import './card.styles.css';

const Card = ({ monster: { id, name, email } }) => (
  <div key={id} className='card-container'>
    <img
      alt={`cat ${name}`}
      src={`https://robohash.org/${id}?set=set4&size=180x180`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
