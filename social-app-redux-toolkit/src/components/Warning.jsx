import styled from "styled-components";
import { useSelector } from "react-redux";

const WarningCon = styled.div`
  padding: 10px;
  background-color: rgb(238, 238, 190);
  border-radius: 10px;
  font-size: 13px;
`
export default function Warning() {

  const name = useSelector((state) => state.user.name);

  return (
    <div className="warning">
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.
    </div>
  );
}