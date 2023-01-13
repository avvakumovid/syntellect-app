import { observer } from 'mobx-react';
import styles from './Buttons.module.css';
import ButtonsViewModel from '../../store/ButtonsViewModel';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface ButtonsProps {
  viewModel: ButtonsViewModel;
}

const Buttons = ({ viewModel }: ButtonsProps) => {
  return (
    <div className={styles.buttons}>
      {viewModel.leftButtons.map(lb => (
        <Button
          key={lb.text}
          onClick={lb.callback}
          style={{
            marginRight: 5,
          }}
        >
          {lb.text}
        </Button>
      ))}
      <Input
        type='text'
        onChange={e => {
          viewModel.setValue(e.target.value);
        }}
        value={viewModel.value}
      />
      {viewModel.rightButtons.map(lb => (
        <Button
          key={lb.text}
          onClick={lb.callback}
          style={{
            marginLeft: 5,
          }}
        >
          {lb.text}
        </Button>
      ))}
    </div>
  );
};

export default observer(Buttons);
