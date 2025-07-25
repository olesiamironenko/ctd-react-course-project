//useState with an array
import { useState } from 'react';

function TacoBuilder() {
  const [main, setMain] = useState(null); // Tracks selected main
  const [tacoOptions, setTacoOptions] = useState(['corn tortilla']);

  function selectMain(option) {
    if (!main) {
      setMain(option);
      setTacoOptions([...tacoOptions, option]);
    }
  }

  function addOption(option) {
    if (!tacoOptions.includes(option)) {
      setTacoOptions([...tacoOptions, option]);
    }
  }

  function resetTaco() {
    setMain(null);
    setTacoOptions(['corn tortilla']);
  }

  function showSelections() {
    const base = 'corn tortilla';
    const rest = tacoOptions.filter((item) => item !== base && item !== main);
    const all = [base, main, ...rest].filter(Boolean); // Remove nulls

    return all.reduce((acc, curr, index) => {
      if (index === 0) return curr;
      if (index === all.length - 1) return `${acc}, and ${curr}`;
      return `${acc}, ${curr}`;
    }, '');
  }

  return (
    <>
      <div className="mains">
        <h3>Choose your main (only one):</h3>
        <button
          type="button"
          onClick={() => selectMain('chicken')}
          disabled={!!main}
        >
          Chicken
        </button>
        <button
          type="button"
          onClick={() => selectMain('beef')}
          disabled={!!main}
        >
          Beef
        </button>
        <button
          type="button"
          onClick={() => selectMain('vegetarian')}
          disabled={!!main}
        >
          Vegetarian
        </button>
      </div>

      <div className="cheeses">
        <h3>Add cheese:</h3>
        <button type="button" onClick={() => addOption('cheddar')}>
          Add Cheddar
        </button>
        <button type="button" onClick={() => addOption('queso fresco')}>
          Add Queso Fresco
        </button>
      </div>

      <div className="extras">
        <h3>Add extras:</h3>
        <button type="button" onClick={() => addOption('sour cream')}>
          Add Sour Cream
        </button>
        <button type="button" onClick={() => addOption('salsa')}>
          Add Salsa
        </button>
      </div>

      <div>
        <p>Your taco includes: {showSelections()}</p>
        <button type="button" onClick={resetTaco}>
          Reset Taco
        </button>
      </div>
    </>
  );
}

export default TacoBuilder;
