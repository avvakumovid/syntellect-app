import React from 'react';
import styles from './Hints.module.css';
import { observer } from 'mobx-react';
import HintsViewModel from '../../store/HintsViewModel';
import Input from '../Input/Input';

interface HintsProps {
  viewModel: HintsViewModel;
}

const Hints = ({ viewModel }: HintsProps) => {
  return (
    <div className={styles.main}>
      <Input
        type='text'
        value={viewModel.value}
        onChange={e => {
          viewModel.loadHints(e.target.value);
        }}
      />
      <div className={styles.hints}>
        {viewModel.countries.map(country => (
          <div
            onClick={() => {
              viewModel.onHintClick(country.fullName);
            }}
            className={styles.hint}
          >
            <div className={styles.name}>
              <span>{country.fullName}</span>
              <span>{country.name}</span>
            </div>
            <img
              className={styles.flag}
              src={country.flag}
              alt={country.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(Hints);
