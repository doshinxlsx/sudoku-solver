import { useState } from 'react';
import GlobalStyle from './globalStyle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GlobalStyle />
      <h2>Hello</h2>
    </div>
  );
}

export default App;
