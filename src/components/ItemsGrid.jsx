import React from 'react'
import { Grid } from '@mui/material'
import ItemCard from './ItemCard'
import useItemStore from '../stores/useItemStore'

function ItemsGrid() {

    const { searchQuery, checkedValues } = useItemStore()

    const items = [
        { image: '/item1.png', title: 'MJ Développement', description: 'Real Estate website' },
        { image: '/item2.png', title: 'Enn Mari Poul', description: 'Informational Website' },
        { image: '/item3.png', title: 'TURBINE', description: 'Project Website' },
        { image: '/item4.png', title: 'Adeona Mobility', description: 'Corporate Website' },
        { image: '/item5.png', title: 'Responsible Business Summit', description: 'Corporate Website' },
        { image: '/item6.png', title: 'IBL Energy', description: 'Corporate Website' },
    ]

    const activeCategories = Object.keys(checkedValues).filter((key) => checkedValues[key])
    const filteredItems = items.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesCategory =
            activeCategories.length === 0 ||
            activeCategories.some((cat) => item.description.toLowerCase().includes(cat.toLowerCase()))

        return matchesSearch && matchesCategory
    })

    return (
        <Grid container spacing={3} pl={5} width={'100%'}>
            {filteredItems.map((item, index) => (
                <Grid size={4} key={index}>
                    <ItemCard image={item?.image} title={item?.title} description={item?.description} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ItemsGrid