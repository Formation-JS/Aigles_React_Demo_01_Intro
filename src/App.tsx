import { Person } from './@types/person';
import './App.css'
import PersonTable from './components/PersonTable/PersonTable';
import Welcome from './components/Welcome/Welcome';
import Header from './containers/Header/Header';
import people from './data/people.json';

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Demo 01</h1>
        <Welcome firstname='Della' lastname='Duck' />

        <h2>Liste des personnes</h2>
        <PersonTable people={people as Person[]} />
      </main>
    </>
  )
}

export default App
