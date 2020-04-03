import React, { Fragment } from 'react';

import Nightmode from '../Nightmode';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';

const Playlist = props => (
    <Fragment>
        <Nightmode />
        <PlaylistHeader/>
        <PlaylistItems/>
    </Fragment> 
);

export default Playlist;