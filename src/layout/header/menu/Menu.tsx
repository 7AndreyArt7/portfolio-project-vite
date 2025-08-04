import React from 'react';
import {S} from '../Header_style';

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                return <S.Link key={index}><a href={"#"}>{item}</a></S.Link>
            })}
        </ul>
    );
};

