import './App.css';
import Buttons from './components/Buttons/Buttons';
import Hint from './components/Hint/Hints';
import ButtonsViewModel from './store/ButtonsViewModel';
import HintViewModel from './store/HintsViewModel';

const bvm1 = new ButtonsViewModel(
  [],
  [
    {
      text: '1',
      callback: () => {
        bvm1.value = '';
      },
    },
    {
      text: '2',
      callback: () => {
        bvm1.value = 'Hello World!';
      },
    },
  ]
);
const bvm2 = new ButtonsViewModel(
  [
    {
      text: '1',
      callback: () => {
        alert(bvm2.value);
      },
    },
  ],
  [
    {
      text: '2',
      callback: () => {
        if (bvm2.value && !isNaN(+bvm2.value)) {
          alert(bvm2.value);
        }
      },
    },
  ]
);

const hint1 = new HintViewModel(3);
const hint2 = new HintViewModel(10);

function App() {
  return (
    <div className='main'>
      <Buttons viewModel={bvm1} />
      <Buttons viewModel={bvm2} />
      <div className='countries'>
        <Hint viewModel={hint1} />
        <Hint viewModel={hint2} />
      </div>
    </div>
  );
}

export default App;
