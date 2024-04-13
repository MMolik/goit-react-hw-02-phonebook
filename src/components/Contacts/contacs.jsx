import PropTypes from 'prop-types'; 
import css from './contacs.module.css'; 

// Definicja komponentu Contacts
export const Contacts = ({ contacts, deleteContact }) => {
  // Funkcja obsługująca usuwanie kontaktu
  const handleDelete = (id) => {
    deleteContact(id); // Wywołanie funkcji deleteContact z przekazanym identyfikatorem kontaktu jako argumentem
  };

  // Renderowanie listy kontaktów
  return (
    <ul className={css.contacts}>
      {/* Mapowanie kontaktów na elementy listy */}
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {/* Wyświetlenie nazwy i numeru kontaktu */}
          <span>{name}:</span>
          <span>{number}</span>
          {/* Przycisk do usuwania kontaktu */}
          <button
            className={css.btn}
            type="button"
            onClick={() => handleDelete(id)} // Obsługa kliknięcia przycisku usuwania kontaktu
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// Określenie wymaganych typów dla propsów komponentu Contacts
Contacts.propTypes = {
  deleteContact: PropTypes.func.isRequired, // Funkcja do usuwania kontaktu musi być funkcją i jest wymagana
  contacts: PropTypes.arrayOf( // Tablica kontaktów
    PropTypes.shape({ // Każdy kontakt musi być obiektem z określonymi polami
      id: PropTypes.string.isRequired, // Pole id musi być stringiem i jest wymagane
      name: PropTypes.string.isRequired, // Pole name musi być stringiem i jest wymagane
      number: PropTypes.string.isRequired, // Pole number musi być stringiem i jest wymagane
    })
  ).isRequired, // Tablica kontaktów jest wymagana
};
