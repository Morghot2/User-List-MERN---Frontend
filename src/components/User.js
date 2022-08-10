import ActionButton from "./ActionButton";
import ModifyButton from "./ModifyButton";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const User = ({ userInfo }) => {
  return (
    <TableRow>
      <TableCell>{userInfo.firstName}</TableCell>
      <TableCell>{userInfo.lastName}</TableCell>
      <TableCell>{userInfo.email}</TableCell>
      <TableCell>{userInfo.age}</TableCell>
      <TableCell><img src={`data:image/jpeg;base64,${userInfo.photo}`} alt="Photo here" className="photo"/></TableCell>
      <TableCell>
        <ModifyButton action={"edit"} userInfo={userInfo} />
      </TableCell>
      <TableCell>
        <ActionButton action={"delete"} userInfo={userInfo}></ActionButton>
      </TableCell>
    </TableRow>
  );
};

export default User;
