import React, { useEffect } from 'react'
import { dropByCacheKey, history, useLocation } from 'umi'

const Books: React.FC = props => {

    const location = useLocation();

    const handleBack = () => {
        history.go(-1);
        dropByCacheKey(location.pathname)

        // 此时只有keepAliveViewMap[‘/books/:id’], 没有keepAliveViewMap[‘books/1234’]
    }

    return (
        <div>
            pathname: { location.pathname } 
            <br />
            <div onClick={handleBack}>
                点击后退，并清除缓存
            </div>
        </div>
    )
}

export default Books;