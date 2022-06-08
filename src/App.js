import './App.css';


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

            <div class="padding-top-left-right-20">
              <input type="text" className="input-text " placeholder="Add New Item here (Eg. Implement Dark Mode)" />
              <button class="add-todo-button" type="button" >Add Todo</button>
            </div>


            <div mode="dark" className='margin-20'>
              <div className='welcome-block'>
                Welcome to your StickyList.<br />
                <br />
                You have no items on the list. Add some items to your sticky list and stay focussed.<br />
              </div>
              <div className='text-align-center'>
                <img className='workdesk-img' src='	https://stickylist.app/img/workdesk-dark.png'></img>
              </div>
            </div>

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
