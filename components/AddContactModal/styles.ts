import styled from "styled-components";

export const Wrapper = styled.div`
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const BackDrop = styled.div`
  background-color: lightgray;
  height: 100vh;
  opacity: 0.8;
`;

export const Content = styled.div`
  background: white;
  border-radius: 8px;
  left: 50%;
  padding: 8px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 94%;
`;

export const ContentHead = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  h2 {
    margin: 0;
  }
`;

export const ProfileImageSection = styled.div`
  width: 72px;
`;

export const ProfileInfoSection = styled.div`
  input {
    background-color: gray;
    border-radius: 8px;
    border: none;
    height: 36px;
    margin: 8px 0;
    outline: none;
    width: 100%;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  margin: 16px auto;
`;

export const ProfileImage = styled.div`
  background-color: gray;
  border-radius: 8px;
  height: 46px;
  margin-top: 8px;
  width: 46px;
`;

export const Extra = styled.div`
  margin: 8px 0;

  label {
    display: block;
  }
  input {
    background-color: gray;
    border-radius: 8px;
    border: none;
    height: 36px;
    margin: 8px 0;
    outline: none;
    width: 100%;
  }
`;
