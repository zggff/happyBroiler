import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./App.scss";
import { Navbar } from "./components/Navbar.components";
import { HomePage } from "./pages/Home.page";
import { ContactPage } from "./pages/Contact.page";
import { GoodsPage } from "./pages/Goods.page";
import { StandartsPage } from "./pages/Standarts.page";
import { CommentsPage } from "./pages/Comments.page";
import { Footer } from "./components/Footer.components";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        <div className="content">
          <div className="main">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/contact" exact component={ContactPage} />
              <Route path="/goods" exact component={GoodsPage} />
              <Route path="/standarts" exact component={StandartsPage} />
              <Route path="/comments" exact component={CommentsPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withStyles(s)(App);
