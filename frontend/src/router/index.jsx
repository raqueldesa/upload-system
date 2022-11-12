import UploadPage from "../pages/Upload";
import ViewPage from "../pages/View";
import PoliticPage from "../pages/Politica";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <UploadPage></UploadPage>
      </Route>
      <Route path="/view">
        <ViewPage></ViewPage>
      </Route>
      <Route component={PoliticPage} path="/politic" />
    </Switch>
  );
};

export default Routes;
