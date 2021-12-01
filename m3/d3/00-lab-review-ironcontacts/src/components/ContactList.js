import { useState } from "react";
import contactsJSON from "./../contacts.json";
import ContactCard from "./ContactCard";

const firstFive = contactsJSON.slice(0, 5);
const restOfContacts = contactsJSON.slice(5, contactsJSON.length);

function ContactList() {
  // One that is being rendered as a list
  const [contacts, setContacts] = useState(firstFive);

  // Master (with the remaining contancts)
  const [remainingContacts, setRemainingContacts] = useState(restOfContacts);

  function randomCeleb() {
    const updatedRemainingContacts = [...remainingContacts];

    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    let randomCel = updatedRemainingContacts.splice(randomNum, 1)[0];

    const updatedContacts = [...contacts, randomCel];

    setRemainingContacts(updatedRemainingContacts);
    setContacts(updatedContacts);
  }

  function sortAlpha() {
    const newArr = [...contacts];
    newArr.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setContacts([...newArr]);
  }

  function sortPopularity() {
    const newSortedArr = [...contacts];
    newSortedArr.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setContacts([...newSortedArr]);
  }

  function deleteCeleb(celebId) {
    const newArr = [...contacts];

    const filteredArr = newArr.filter((celeb) => {
      return celeb.id !== celebId;
    });
    setContacts([...filteredArr]);
  }

  console.log("contacts", contacts);

  return (
    <>
      <h1>Iron Contacts</h1>
      <div className="buttons">
        <button onClick={randomCeleb}>Add Random Contact</button>
        <button onClick={sortAlpha}>Sort by Name</button>
        <button onClick={sortPopularity}>Sort by Popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((celebrity) => {
            // const popularityRounded = celebrity.popularity.toFixed(2);

            return (
              <ContactCard
                key={celebrity.id}
                celebrityObj={celebrity}
                deleteCeleb={deleteCeleb}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ContactList;
