import React from 'react'
import {SearchIcon} from '@heroicons/react/outline'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
function Widgets() {
  return (
    <div>
        <div>
            <SearchIcon className='h-5 w-5'/>
            <input></input>
        </div>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="saurabhnemade"
            options={{height: 400}}
            />
    </div>
  )
}

export default Widgets