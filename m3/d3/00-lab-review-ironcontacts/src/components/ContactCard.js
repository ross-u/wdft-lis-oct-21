function ContactCard({ celebrityObj, deleteCeleb }) {
  return (
    <tr className="celebCard">
      <td>
        <img
          src={celebrityObj.pictureUrl}
          height="200px"
          alt="contact-profile"
        />
      </td>
      <td>{celebrityObj.name}</td>
      <td>{celebrityObj.popularity.toFixed(2)}</td>
      {celebrityObj.wonOscar && <td>🏆</td>}
      {!celebrityObj.wonOscar && <td></td>}
      {celebrityObj.wonEmmy && <td>🏆</td>}
      {!celebrityObj.wonEmmy && <td></td>}
      <td>
        <button onClick={() => deleteCeleb(celebrityObj.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default ContactCard;
