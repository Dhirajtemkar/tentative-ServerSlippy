import React from 'react';
import Svg,{Path} from 'react-native-svg'

const Add=(props)=>{
    return(
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.022 14.739c-.645 1.711-3.422 3.002-6.78 3.002-.452 0-.871-.032-1.29-.064v1.55c.419.032.838.064 1.29.064 3.842 0 6.942-1.711 6.942-3.777 0-.29-.065-.55-.162-.775zm-8.878-.71c0-2.099-3.1-3.778-6.909-3.778-3.842 0-6.941 1.68-6.941 3.778 0 .226.032.452.097.645.58 1.776 3.422 3.132 6.844 3.132 3.39 0 6.231-1.356 6.812-3.132a2.08 2.08 0 00.097-.645zm-.097 4.649c-.549 1.775-3.39 3.131-6.812 3.131S.972 20.453.391 18.678c-.13.452-.13.936.064 1.42.646 1.711 3.422 3.003 6.78 3.003 3.325 0 6.134-1.292 6.78-3.003.161-.484.194-.968.032-1.42zm0-2.712c-.549 1.808-3.39 3.164-6.812 3.164-3.454 0-6.296-1.356-6.844-3.164-.13.452-.13.904.032 1.356.613 1.743 3.422 3.067 6.812 3.067 3.358 0 6.199-1.324 6.812-3.067.13-.452.162-.904 0-1.356zm2.195-7.813c3.423 0 6.264-1.356 6.813-3.132.096-.194.129-.42.129-.646 0-2.098-3.1-3.777-6.942-3.777-3.841 0-6.94 1.679-6.94 3.777 0 .226.032.452.128.646.55 1.776 3.39 3.132 6.813 3.132zm0 2.905c3.39 0 6.2-1.323 6.813-3.099.161-.484.161-1-.033-1.485-.678 1.711-3.454 2.97-6.78 2.97-3.325 0-6.101-1.259-6.78-2.97a2.248 2.248 0 00-.16.807c0 .678.354 1.324.903 1.873.258.032 2.906 1.485 2.906 1.485.936.258 2.002.42 3.131.42zm0 2.712c2.97 0 5.489-1 6.49-2.421.42-.613.549-1.324.323-2.002-.582 1.744-3.39 3.1-6.813 3.1-.645 0-1.356-.162-1.904-.162.226.452.387.937.484 1.42.452.033.936.065 1.42.065zm0 2.68c3.423 0 6.264-1.356 6.813-3.132a1.959 1.959 0 000-1.356c-.614 1.744-3.423 3.067-6.813 3.067-.452 0-.871-.032-1.29-.064v1.42c.419.033.838.065 1.29.065z"
        fill="#FF264D"
      />
    </Svg>
    )
}

export default Add;