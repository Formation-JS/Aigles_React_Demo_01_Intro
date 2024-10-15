import { useId, useState } from 'react';
import { Operation } from '../../enums/calculator.enum';

const CalculatorForm = () => {

  // Hook pour générer des id pour l'accessibilité des formulaires
  const inputId = useId();

  // Hook d'état pour générer les données du formulaires
  const [nb1, setNb1] = useState('');
  const [op, setOp] = useState(Operation.Multi.toString());
  const [nb2, setNb2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const val1 = parseFloat(nb1);
    const val2 = parseFloat(nb2);
    let internalResult : number | undefined;
    let message : string | undefined;

    switch (parseInt(op)) {
      case Operation.Add:
        internalResult = val1 + val2;
        break;
      case Operation.Sub:
        internalResult = val1 - val2;
        break;
      case Operation.Multi:
        internalResult = val1 * val2;
        break;
      case Operation.Div:
        if(val2 === 0) {
          message = 'Division par zero';
        }
        else {
          internalResult = val1 / val2;
        }
        break;
      default:
          message = 'Opération non supporté';
        break;
    }

    if(internalResult !== undefined) {
      setResult(internalResult.toString());
    } 
    else {
      // setResult(message !== undefined ? message : 'Erreur inconnue');
      setResult(message ?? 'Erreur inconnue');
    }
    // setResult(internalResult?.toString() ?? message ??  'Erreur inconnue');
  };

  const handleNumberInput = (
    event : React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {

    const inputValue = event.target.value.replace(',', '.');
    const numberRegex = /^[0-9]*(\.[0-9]*)?$/;

    if(numberRegex.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <form onSubmit={handleCalculSubmit}>
      <div>
        <label htmlFor={inputId + 'nb1'}>Nombre 1 : </label>
        <input type="text" id={inputId + 'nb1'}
          value={nb1} onChange={(e) => handleNumberInput(e, setNb1)}
        />
      </div>
      <div>
        <label htmlFor={inputId + 'op'}>Operation : </label>
        <select id={inputId + 'op'} required
          value={op} onChange={(e) => setOp(e.target.value)}
        >
          <option value="" disabled>Veuillez selection une option</option>
          <option value={Operation.Add}>+</option>
          <option value={Operation.Sub}>-</option>
          <option value={Operation.Multi}>x</option>
          <option value={Operation.Div}>/</option>
        </select>
      </div>
      <div>
        <label htmlFor={inputId + 'nb2'}>Nombre 2 : </label>
        <input type="text" id={inputId + 'nb2'}
          value={nb2} onChange={(e) => handleNumberInput(e, setNb2)}
        />
      </div>
      <div>
        <button type="submit">Calculer</button>
      </div>
      <div>
        <label htmlFor={inputId + 'res'}>Resultat : </label>
        <input id={inputId + 'res'} type="text"
          value={result} readOnly
        />
      </div>
    </form>
  );
};

export default CalculatorForm;
