import './App.css';
import TodoListContainer from './TodoListContainer';



function App() {


  return (

    <div className="App">

      <div className="App-margin">
        <div className='App-context'>
          <div className='App-headline'>
            <a className='App-heading' href='/'>
              <div className='App-logo-context'>
                <img src='https://stickylist.app/img/logo.svg' width='32' alt='StickyList brand'></img>
                <h1 className='App-title'> StickyList </h1>
              </div>
            </a>
          </div>

          <div className='App-box rounded'>

            <TodoListContainer />



          </div>

          <div className='git-link'>
            Git
          </div>
        </div>

      </div>

    </div>


  );
}

export default App;
