import './App.css'
import Welcome from './components/Welcome/Welcome';
import Header from './containers/Header/Header';

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Demo 01</h1>
        <Welcome firstname='Della' lastname='Duck' />
      </main>
    </>
  )
}

export default App
