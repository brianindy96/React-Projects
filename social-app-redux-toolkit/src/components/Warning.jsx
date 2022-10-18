import styled from "styled-components";

const WarningCon = styled.div`
  padding: 10px;
  background-color: rgb(238, 238, 190);
  border-radius: 10px;
  font-size: 13px;

`
export default function Warning() {
  return (
    <div className="warning">
      Deleting account cannot be undone <b>John</b>! You should confirm your
      password to delete your account.
    </div>
  );
}