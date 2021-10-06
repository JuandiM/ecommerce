import {Pagination} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import React from 'react'

const Paginate = ({ pages, page, isAdmin=false, keyword = ''}) => {




    return ( pages > 1 && (
        <Pagination >
            {[...Array(pages).keys()].map(x => (
                <LinkContainer 
                className='page'
                key= {x + 1} 
                to={!isAdmin ? keyword 
                ? `/search/${keyword}/page/${x+1}` 
                : `/page/${x+1}`: `/admin/productlist/${x+1}`}>
                    <Pagination.Item className='page'
                    active={x+1 === page}>
                        {x+1}
                    </Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>
    )
        
    )
}

export default Paginate
