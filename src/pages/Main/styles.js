import styled from 'styled-components';

export const Container = styled.View`
  margin-top: 40px;
  height: 100%;
  width: 100%;
  background-color: ghostwhite;
  display: flex;
  align-items: center;
`;

export const Card = styled.ImageBackground`
  height: 25%;
  width: 95%;
  position: relative;
  box-shadow: 1px 1px 1px black;
  margin-bottom: 20px;
`;

export const PageTitle = styled.Text`
  color: white;
  text-shadow: 0px 1px 3px #999;
  font-family: sans-serif;
  font-size: 42px;
  position: absolute;
  bottom: 50px;
  right: 10px;
  font-weight: bold;
  letter-spacing: 5px;
`;

export const CardDetails = styled.Text`
  color: white;
  text-shadow: 0px 1px 3px #999;
  font-size: 16px;
  position: absolute;
  bottom: 30px;
  right: 10px;
  font-weight: bold;
`;
