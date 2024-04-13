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


Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired, 
};
