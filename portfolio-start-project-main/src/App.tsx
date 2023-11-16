import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/skills/Skills';
import { Works } from './layout/works/Works';
import { Testimony } from './layout/section/testimony/Testimony';
import { Contacts } from './layout/section/contacts/Contacts';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;

