import React from 'react'
import Card from '../Card/Card'
import './list.scss'

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat Long Sleeve",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/3035875/pexels-photo-3035875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "",
            title: "Blouse Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "",
            title: "Summer Fit Shirt",
            isNew: false,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2250526/pexels-photo-2250526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "",
            title: "Date Night Outfit",
            isNew: false,
            oldPrice: 19,
            price: 12
        }
    ]


  return (
    <div className="list">
        {data.map(item => (
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List