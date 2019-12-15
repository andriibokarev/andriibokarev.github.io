import React from 'react';
import {Route} from 'react-router-dom'

import '../common/style/reset.css'
import '../common/style/base.css'

import HeaderPages from './Header/HeaderPages'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <Route path="/" exact render={()=>(
          <Header/>
      )}/>
      <Route path="/about" exact render={()=>(
          <HeaderPages/>
      )}/>
      <Route path="/blog" exact render={()=>(
          <HeaderPages/>
      )}/>
      <Route path="/photos" exact render={()=>(
          <HeaderPages/>
      )}/>
      <Route path="/videos" exact render={()=>(
          <HeaderPages/>
      )}/>
      <Route path="/stories" exact render={()=>(
          <HeaderPages/>
      )}/>
      <Route path="/blog/:postId" exact render={()=>(
          <HeaderPages/>
      )}/>
			<Main/>
			<Footer/>
    </div>
  )
}

export default App;
