import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/header/Header";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error/ErrorBoundary";

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/shop/Shop'));
const SignInSignUpPage = lazy(() => import('./pages/signin-signup/SignInSignUp'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

    return (
      <div>
        <GlobalStyles />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={Checkout} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInSignUpPage />
                  )
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
