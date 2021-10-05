import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
            
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to OneD Shop',
    description: 'Find the best products',
    keywords: 'cheap products, cheapest products'
}

export default Meta
