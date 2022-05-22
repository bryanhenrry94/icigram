import React, { useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
import db from "../../../api/db.json"

export const ListOfCategory = () => {
  const [categories, setCategories] = useState(db.categories)

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
      }
    </List>
  )
}
