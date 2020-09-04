import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D121589035896040%26id%3D109291977125746&show_text=true&width=340&height=589&appId"
            width="340"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media" ></iframe>
            
        </div>
    )
}

export default Widgets
