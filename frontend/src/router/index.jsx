import UploadPage from "../pages/UploadPage";
import ViewPage from    "../pages/ViewPage";
import PoliticPage from "../pages/PoliticPage";
import { Route } from "react-router-dom";
import {Switch} from 'react-router-dom'

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <UploadPage></UploadPage>
            </Route>
            <Route path = "/view">
                <ViewPage></ViewPage>
            </Route>
            <Route component = { PoliticPage }  path="/politic" />
        </Switch>
    )
 }
 
 export default Routes;
 