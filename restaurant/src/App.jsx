import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./component/main/Main";
import Nfoods from "./component/nfoods/nfoods";
import Ffoods from "./component/ffoods/ffods";
export class App extends Component {
  render() {
    return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/nationalfoods" element={<Nfoods/>}/>
      <Route path="/fastfoods" element={<Ffoods/>}/>
    </Routes>
    )
  }
}

export default App
