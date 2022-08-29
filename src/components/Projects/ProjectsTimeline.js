import data from './data';
import TimelineItem from './TimelineItem';

import { TimelineContainer } from './Timeline.Styles';

const ProjectsTimeline = () => {
    return (
        <>
        { data.length > 0 && (
                <TimelineContainer>
                    {data.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                        ))}
                </TimelineContainer>
            )
        }
        </>
    ) 
}

export default ProjectsTimeline
