import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./configs";
import { lazyLoad } from "./pages";
import PageBase from "./component/layout/PageBase";

function App({ history, store }) {

  return (
    <Provider store={store}>
      <Router history={history}>
        <PageBase>
          <Switch>
            <Route exact path={routes.PRODUCT()} component={lazyLoad.Product} />
            <Route exact path={routes.DETAILSHOES()} component={lazyLoad.DetailShoes} />
            <Route exact path={routes.CART()} component={lazyLoad.Cart} />
            <Route component={lazyLoad.Error404} />
          </Switch>
        </PageBase>
      </Router>
    </Provider>
  );
}

export default App;
