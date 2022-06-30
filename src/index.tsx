import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'destyle.css';
import './index.scss';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
);
