import React from 'react';

import SubNavigation from '../Naviagtion/SubNavigation';

const Page = props => {
    return (
        <div className="page">
            <SubNavigation />
            {props.children}
        </div>
    );
};

export default Page;