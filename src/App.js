// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to ITC 
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


function AlertDismissibleExample() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Below code is to install bootstrap with create-react-app
        </Alert.Heading>
        {/* eslint-disable-next-line  */}
        <p>
        npm install react-bootstrap bootstrap@5.1.3</p>
        <p>import 'bootstrap/dist/css/bootstrap.min.css';</p>
        <p>import Button from 'react-bootstrap/Button';</p>

        {/* or less ideally */}
        <p>{`import { Button } from 'react-bootstrap';`}
        </p>
      </Alert>
    );
  }
  return (
    <Button variant="info" onClick={() => setShow(true)}>
      Open code snippet
    </Button>
  );
}

const App = () => (
  <Container className="p-3">
    <Container className="pb-1 p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome to React-ITC</h1>
      <h2 className="header">Learn and Earn using this platform</h2>
      <AlertDismissibleExample />
      <hr />
      <p>
        Next Topic: 
        <a
          href="https://globalverified.github.io/react-itc/"
          target="_blank"
          rel="noopener noreferrer"
        >
                      Accordians
        </a>
        .
      </p>
    </Container>
  </Container>
);

export default App;

