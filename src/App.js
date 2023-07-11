import logo from './logo.svg';
import './App.css';

import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row} from './styles';
import {useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleAppNumber = (number => {
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)
  })

  const handleOnClear = () => {
    setCurrentNumber('0')
  };

  return (
    <Container>
      <Content>

        <Input value={currentNumber}/>

        <Row>
          <Button label="x"/>
          <Button label="/"/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="X"/>
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAppNumber('7')}/>
          <Button label="8" onClick={() => handleAppNumber('8')}/>
          <Button label="9" onClick={() => handleAppNumber('9')}/>
          <Button label="-" onClick={() => handleAppNumber('-')}/>
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAppNumber('4')}/>
          <Button label="5" onClick={() => handleAppNumber('5')}/>
          <Button label="6" onClick={() => handleAppNumber('6')}/>
          <Button label="+" onClick={() => handleAppNumber('+')}/>
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAppNumber('1')}/>
          <Button label="2" onClick={() => handleAppNumber('2')}/>
          <Button label="3" onClick={() => handleAppNumber('3')}/>
          <Button label="=" onClick={() => handleAppNumber('=')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
