import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
  padding: 7px;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 100px;
  object-fit: contain;
  height: 50px;
  margin-left: 10px;
  padding: 10px;
`;
