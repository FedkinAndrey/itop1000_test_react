import React from 'react';
import Content from './pages/content/Content';
import Layout from './layout/Layout';
import './style.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
