import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
}
:root {
    --bs-blue: #1761fd;
    --bs-indigo: #6610f2;
    --bs-purple: #6d81f5;
    --bs-pink: #fd3c97;
    --bs-red: #f5325c;
    --bs-orange: #ff8500;
    --bs-yellow: #ffb822;
    --bs-green: #22b783;
    --bs-teal: #03d87f;
    --bs-cyan: #12a4ed;
    --bs-white: #fff;
    --bs-beanred: #FE6B8B;
    --bs-primary: #1761fd;
    --bs-secondary: #9ba7ca;
    --bs-success: #03d87f;
    --bs-info: #12a4ed;
    --bs-warning: #ffb822;
    --bs-danger: #f5325c;
    --bs-light: #f1f5fa;
    --bs-dark: #1d2c48;
    --bs-pink: #fd3c97;
    --bs-purple: #6d81f5;
    --bs-beanred: #FE6B8B;
    --bs-orange: #ff8500;
    --bs-blue: #1761fd;
    --bs-gradient: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0));
}
`
