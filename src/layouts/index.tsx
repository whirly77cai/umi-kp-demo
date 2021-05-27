import React, { useEffect } from 'react';
import { withRouter, KeepAliveLayout, useLocation, dropByCacheKey } from 'umi'

const BasicLayout: React.FC<any> = props => {

    const location = useLocation();

    return (
        <KeepAliveLayout {...props}>
            <div key={location.pathname}>
                { props.children }
            </div>
        </KeepAliveLayout>
    )
}

export default withRouter(BasicLayout)

