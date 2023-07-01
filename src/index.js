import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {RecipeContext, RecipeProvider} from "./context/RecipeContext";

import App from './App';

export {RecipeContext};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </Router>
  </React.StrictMode>
);


