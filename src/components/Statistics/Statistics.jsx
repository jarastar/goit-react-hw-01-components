import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';


function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


const Statistics = ({ title, stats }) => {

  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={css.stat__list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
  PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
