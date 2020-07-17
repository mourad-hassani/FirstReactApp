import React from 'react';
import { Media } from 'reactstrap';


function RenderLeader({ leader }) {
    return (
        <Media>
            <Media left href='#'>
                <Media className='mr-5' object src={leader.image} alt={leader.name} />
            </Media>
            <Media body>
                <Media heading>
                    <h3>{leader.name}</h3>
                </Media>
                <p>{leader.designation}</p>
                {leader.description}
            </Media>
        </Media>
    );
}

export default RenderLeader;