import PropTypes from 'prop-types'; 
import css from './Filter.module.css'; 

// Definicja komponentu Filter
export const Filter = ({ filterValue, handleFilterChange }) => {
  // Renderowanie formularza 
  return (
    <>
      <label className={css.text}>
        Find contacts by name
        <br />
        {/* Pole tekstowe */}
        <input
          className={css.newContacts}
          onChange={handleFilterChange}
          value={filterValue}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

// Określenie wymaganych typów dla propsów komponentu Filter
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired, // Wartość filtra musi być stringiem i jest wymagana
  handleFilterChange: PropTypes.func.isRequired, // Funkcja obsługująca zmianę filtra musi być funkcją i jest wymagana
};
