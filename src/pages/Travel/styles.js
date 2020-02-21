import styled from 'styled-components';

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
  position: relative;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.ImageBackground`  
  height: 90%;
  width: 40%;
`;

export const PageTitle = styled.Text`
  position: absolute;
  width: 100%;
  font-family: 'FiraCode-Light';
  text-align: center;
  font-size: 32px;
  color: white;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const PageDetails = styled.View`
  left: 5%;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 80px;
  padding: 20px;
`;

export const PageDetailsText = styled.View`
  color: rgba(0, 0, 0, 0.2);
  font-size: 36px;
  text-align: center;
`;

export const Icon = styled.Image`
  height: 48px;
  width: 48px;
`;

export const Post = styled.View`
  height: 280px;
  width: 100%;
`;

export const PostImage = styled.Image`
  margin-top: 20px;
  height: 200px;
  width: 100%;
`;

export const PostDescription = styled.Text`
  padding: 10px;
  text-align: justify;
  font-size: 16px;
`;
