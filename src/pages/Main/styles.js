import styled from 'styled-components';

export const Container = styled.View`
  margin-top: 40px;
  height: 100%;
  width: 100%;
  background-color: ghostwhite;
`;

export const Card = styled.ImageBackground`
  height: 150px;
  position: relative;
  box-shadow: 1px 1px 1px black;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const PageTitle = styled.Text`
  color: white;
  text-shadow: 0px 1px 3px #999;
  font-family: 'FiraCode-Light';
  font-size: 42px;
  position: absolute;
  bottom: 50px;
  right: 10px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const CardDetails = styled.Text`
  color: white;
  text-shadow: 0px 1px 3px #999;
  font-family: 'FiraCode-Medium';
  font-size: 16px;
  position: absolute;
  bottom: 30px;
  right: 10px;
  letter-spacing: 2px;
`;
