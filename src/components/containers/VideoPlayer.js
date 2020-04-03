import React, {Fragment} from 'react';

import Video from '../Video';
import Playlist from './Playlist';

const VideoPlayer = props => {
    return (
        <Fragment>
            <Video />
            <Playlist />
        </Fragment>
    );
}

export default VideoPlayer;