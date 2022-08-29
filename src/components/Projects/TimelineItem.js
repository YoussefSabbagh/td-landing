import {
    TimelineItem,
    TimelineItemContent,
    TimelineItemCircle,
    TimelineItemLink,
    TimelineItemTag,
    TimelineItemTime,
    TimelineItemParagraph,
    TimelineItemTitle,
 } from './Timeline.Styles';

const T = ({ data }) => {
    return (
        <TimelineItem>
            <TimelineItemContent>
                <TimelineItemTag style={{background: data.category.color}}>
                    {data.category.tag}
                </TimelineItemTag>
                <TimelineItemTime>{data.date}</TimelineItemTime>
                <TimelineItemTitle>{data.name}</TimelineItemTitle>
                <TimelineItemParagraph>{data.text}</TimelineItemParagraph>
                {data.link && (
                    <TimelineItemLink
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.text}
                    </TimelineItemLink>
                )}
                <TimelineItemCircle></TimelineItemCircle>
            </TimelineItemContent>    
        </TimelineItem>
    )
}
export default T