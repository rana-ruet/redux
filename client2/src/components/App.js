import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  StreamCreate,
  StreamShow,
  StreamDelete,
  StreamEdit,
  StreamList,
} from './streams';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show" component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
