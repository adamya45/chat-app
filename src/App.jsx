import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/home/index";
import PublicRoute from "./components/PublicRoute";
import { ProfileProvider } from "./context/profile.context";

//const SignIn = lazy(() => import('./pages/SignIn'))

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider> 
  );
}

export default App;





/*import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";
import { ProfileProvider } from "./context/profile.context";

//const SignIn = lazy(() => import('./pages/SignIn'))

function App() {
  return (
    <ProfileProvider>

    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
    </ProfileProvider> 
  );
}

export default App;
*/