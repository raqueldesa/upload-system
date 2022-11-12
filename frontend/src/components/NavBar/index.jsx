import { Nav } from "./style";
import { useHistory } from "react-router-dom";

import { MdAssignment } from "react-icons/md";
import { MdUploadFile } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";

const NavBar = () => {
  const history = useHistory();
  return (
    <>
      <Nav>
        <div className="mod">
          <h3>Módulo do Sistema</h3>
        </div>
        <ul>
          <li onClick={() => history.push("/")}>
            <MdUploadFile size={20}></MdUploadFile>Upload de Arquivo
          </li>
          <li onClick={() => history.push("/relatorios")}>
            <MdAssignment size={20}></MdAssignment>Relatorios
          </li>
          <li onClick={() => history.push("/politicas")}>
            <MdOutlineSecurity size={20}></MdOutlineSecurity>
            Politicas
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default NavBar;
