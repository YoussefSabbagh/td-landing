import ProjectsTimeline from './ProjectsTimeline';

import {
    ProjectsContainer,
    ProjectsTitle,

} from './Timeline.Styles';

const Projects = ({ id, title, classes, bgClr = "#ff00ff" }) => {

    return (
    
        <ProjectsContainer id={id} bgClr={bgClr}>
            <ProjectsTitle>
                Algunos de nuestros projectos
            </ProjectsTitle>
            <ProjectsTimeline />
        </ProjectsContainer>
    )
}

export default Projects