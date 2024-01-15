import React from 'react';
import './App.css'; // Import your CSS file
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Layout from './components/Layout';
import CustomToolbar from './components/CustomToolbar';

function App() {
  return (
    <div className="appContainer">
      <head>

      </head>
    
      <main>
        <Layout></Layout>
      </main>

      <footer>
        <p>© 2023 Advanced Business Intelligent Technology Solutions</p>
      </footer>
    </div>
  );
}

export default App;
