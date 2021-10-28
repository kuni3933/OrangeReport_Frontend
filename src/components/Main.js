import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import article_INSERT from "./article_INSERT";
import article from "./article";
import list from "./list";
import login from "./login";
import signup from "./signup";
class Main extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="main">
          <main>
            <Link>
              <Route exact path="/" component={list} />
              <Route exact path="/article_INSERT" component={article_INSERT} />
              <Route exact path="/article" component={article} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Link>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
