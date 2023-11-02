import React from 'react'
import CategoryItem from './CategoryItem'

export default function Category() {
  return (
    <div className='Category'>
      <h3 className='Cheading'>Category</h3>
      <div className="CategoryList">
        <CategoryItem imgUrl="./dairy.png" title="Dairy"></CategoryItem>
        <CategoryItem imgUrl="./fruit.png" title="Fruit"></CategoryItem>
        <CategoryItem imgUrl="./household.png" title="Household"></CategoryItem>
        <CategoryItem imgUrl="./snack.png" title="Snacks"></CategoryItem>
        <CategoryItem imgUrl="./vegetable.png" title="Vegetable"></CategoryItem>
      </div>
      <p className='CategoryView'>View All</p>
    </div>
  )
}
