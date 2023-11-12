import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/skills/Skills';
import { Works } from './layout/works/Works';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
        </div>
    );
}

export default App;

