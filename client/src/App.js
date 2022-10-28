import React from 'react';
import './index.css';
import Home from './routes/Home';
import MyParty from './routes/MyParty';
import Signup from './routes/Signup';
import Login from './routes/Login';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Theme from './routes/Theme';
import { setContext } from '@apollo/client/link/context';
import { Route, Routes } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myparty' element={<MyParty />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/theme' element={<Theme />} />
      </Routes>
    </>
    </ApolloProvider>
  );
}

export default App;
