import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TeamCard, TeamSocial, TeamCardText } from './About.Styles';

const Team = ({ teamData }) => {
  return (
    <TeamCard>
      <img src={teamData.imageURL} alt="team1" />
      <TeamCardText>
        <div className="team__card-name">{teamData.name}</div>
        <div className="team__card-title">{teamData.job}</div>
      </TeamCardText>
      <TeamSocial>
        <li>
          <a
            className="social__link"
            target="_blank"
            rel="noreferrer"
            href={teamData.twitter}
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            className="social__link"
            target="_blank"
            rel="noreferrer"
            href={teamData.github}
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="social__link"
            target="_blank"
            rel="noreferrer"
            href={teamData.linkedin}
          >
            <FaLinkedin />
          </a>
        </li>
      </TeamSocial>
    </TeamCard>
  );
};

export default Team;
