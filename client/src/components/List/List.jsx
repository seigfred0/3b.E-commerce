import React from 'react'
import Card from '../Card/Card'
import './list.scss'
import useFetch from '../../hooks/useFetch'

const List = ({subCategory, maxPrice, sort, categId}) => {

    // const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${categId}${subCategory.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][&lte]=${maxPrice}`)
    
    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][categories][id]=${categId}${subCategory.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    )

    return (
        <div className="list">
            {loading
                ? "loading"
            : data?.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List