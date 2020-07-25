import React from 'react';
import { Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Fade } from 'react-animation-components';


function RenderLeader({ leader }) {
    return (
        <Fade in>
            <Media>
                <Media left href='#'>
                    <Media className='mr-5' object src={baseUrl + leader.image} alt={leader.name} />
                </Media>
                <Media body>
                    <Media heading>
                        <h3>{leader.name}</h3>
                    </Media>
                    <p>{leader.designation}</p>
                    {leader.description}
                </Media>
            </Media>
        </Fade>
    );
}

export default RenderLeader;