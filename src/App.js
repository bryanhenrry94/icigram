import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo';

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategory />
    <ListOfPhotoCard />
  </div>
)