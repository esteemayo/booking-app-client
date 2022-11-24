import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './header.scss';

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => ({ ...prev, [name]: operation === 'inc' ? options[name]++ : options[name]-- }));
  };

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__list'>
          <div className='header__list--item active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='header__list--item'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className='header__list--item'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='header__list--item'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className='header__list--item'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className='header__title'>A lifetime of discounts? It's Genius.</h1>
        <p className='header__desc'>Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Bookingapp account
        </p>
        <button className='header__btn'>Sign in / Register</button>
        <div className='header__search'>
          <div className='header__searchItem'>
            <FontAwesomeIcon icon={faBed} className='header__icon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='header__searchInput'
            />
          </div>
          <div className='header__searchItem'>
            <FontAwesomeIcon icon={faCalendar} className='header__searchItem--icon' />
            <span onClick={() => setOpenDate(!openDate)} className='header__searchText'>{`${format(
              date[0].startDate, 'MM/dd/yyyy')} to 
              ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
              />
            )}
          </div>
          <div className='header__searchItem'>
            <FontAwesomeIcon icon={faPerson} className='header__searchItem--icon' />
            <span className='header__searchText'>{`${options.adults} adults . ${options.children} children . ${options.room} room`}</span>
            <div className='options'>
              <div className='options__item'>
                <span className='options__text'>Adult</span>
                <div className='options__counter'>
                  <button
                    disabled={options.adults <= 1}
                    className='options__counter--btn'
                    onClick={() => handleOption('adults', 'dec')}
                  >
                    -
                  </button>
                  <span className='options__counter--number'>{options.adults}</span>
                  <button
                    className='options__counter--btn'
                    onClick={() => handleOption('adults', 'inc')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='options__item'>
                <span className='options__text'>Children</span>
                <div className='options__counter'>
                  <button
                    disabled={options.children <= 0}
                    className='options__counter--btn'
                    onClick={() => handleOption('children', 'dec')}
                  >
                    -
                  </button>
                  <span className='options__counter--number'>{options.children}</span>
                  <button
                    className='options__counter--btn'
                    onClick={() => handleOption('children', 'inc')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='options__item'>
                <span className='options__text'>Room</span>
                <div className='options__counter'>
                  <button
                    disabled={options.room <= 1}
                    className='options__counter--btn'
                    onClick={() => handleOption('room', 'dec')}
                  >
                    -
                  </button>
                  <span className='options__counter--number'>{options.room}</span>
                  <button
                    className='options__counter--btn'
                    onClick={() => handleOption('room', 'inc')}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='header__searchItem'>
            <button className='header__btn'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
