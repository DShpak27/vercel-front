import styled from '@emotion/styled';
import { useState } from 'react';
import axios from 'axios';

const Button1 = styled.button`
  background-color: red;
  color: white;

  &:hover {
    background-color: #d94c4c;
  }
`;
const Button2 = styled.button`
  background-color: blue;
  color: white;
  &:hover {
    background-color: #5151ad;
  }
`;

const Box = styled.div`
  width: 200px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Info = styled.div`
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
`;

function App() {
  const [info, setInfo] = useState('');

  return (
    <Container>
      <Box>
        <Button1
          onClick={() => {
            axios
              .get('https://vercel-back-two.vercel.app/set-cookie', {
                withCredentials: true,
              })
              .then(response => {
                setInfo(response.data);
              });
          }}
        >
          set cookies
        </Button1>
        <Button2
          onClick={() => {
            axios
              .get('https://vercel-back-two.vercel.app/get-cookie', {
                withCredentials: true,
              })
              .then(response => {
                setInfo(response.data);
              });
          }}
        >
          get cookies
        </Button2>
      </Box>
      <Info>{info}</Info>
    </Container>
  );
}

export default App;
