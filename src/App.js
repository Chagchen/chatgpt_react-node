import './index.css';


const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button >+ New Chat</button>
        <ul className="history">
          <li>Test</li>
        </ul>
        <nav>
          <p>Made by Bo</p>
        </nav>
      </section>
      
      <section className="main">
        <h2>Bo's GPT</h2>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➣</div>
          </div>
          <p className="info">
            Chat GPT 4 version. Free Research preview. Out goal is to make AI systems more natural and safe
            to interact with. Yout feeback will help us improve.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
