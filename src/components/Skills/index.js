import React from 'react';
import CloudMigrationIcon from './Icons/CloudMigration.svg';
import CloudManagementIcon from './Icons/CloudManagement.svg';
import HighPerformanceComputingIcon from './Icons/HighPerformanceComputing.svg';
import DataLakeImplementationIcon from './Icons/DataLakeImplementation.svg';
import BigDataAnalyticsIcon from './Icons/BigDataAnalytics.svg';
import MachineLearningIcon from './Icons/MachineLearning.svg';
import RecommenderSystemsIcon from './Icons/RecommenderSystems.svg';
import NaturalLanguageProcessingIcon from './Icons/NaturalLanguageProcessing.svg';
import ConversationalDialogueSystemsIcon from './Icons/ConversationalDialogueSystems.svg';
import './skills.scss';

const SkillItem = ({ icon, title, description }) => (
  <div className="Skills-grid__item flex flex-50">
    <div className="Item-icon">
      <img src={icon} />
    </div>
    <div className="flex flex-col flex-center">
      <div className="Item-title">
        <h4>{title}</h4>
      </div>
      <p className="Item-description">{description}</p>
    </div>
  </div>
);

const items = [
  {
    title: 'Cloud Migration',
    icon: CloudMigrationIcon,
    description:
      'We manage your journey to single cloud/ multi-cloud/ hybrid cloud ' +
      'environments. We provide devops services, cloud migration services, ' +
      'cloud application cloud native custom development and cloud ' +
      'infrastructure transformation services.',
  },
  {
    title: 'Cloud Management',
    icon: CloudManagementIcon,
    description:
      ' Once on the cloud we ensure that you achieve the desired outcomes\n' +
      'with your data and applications parked there. We provision and\n' +
      'maintain cloud- based architecture solutions employing\n' +
      'micro-services, distributed database systems, load-balancing and\n' +
      'caching.',
  },
  {
    title: 'High Performance Computing',
    icon: HighPerformanceComputingIcon,
    description:
      'The cloud is useless if it is not equip you to do more with your\n' +
      '            data. We build for you quality, well-documented, ouctome focused,\n' +
      '            modularized software across processors, workstations and cloud\n' +
      '            computing devices running the latest big data tool components.\n' +
      '            Porting existing in-house or cloud based applications to Kubernetes\n' +
      '            to scale them and reduce the running and maintenance cost.',
  },
  {
    title: 'Data Lake Implementation',
    icon: DataLakeImplementationIcon,
    description:
      'Don’t lose your data to want of better warehousing solutions. We are\n' +
      '            experts in Data Lake implementations. This modern version of data\n' +
      '            warehousing powered on clouds like AWS, Azure, Google Cloud will\n' +
      '            ensure that ALL your data is available to you for posterity.\n' +
      '            We are ready to cater to a world that will reside on multi-cloud\n' +
      '            ecosystems. We are here to make the cloud a reality for ALL\n' +
      '            businesses.',
  },
  {
    title: 'Big Data Analytics',
    icon: BigDataAnalyticsIcon,
    description:
      'Gain insights from your data. Uncover data, forecast future events\n' +
      '            and take steps based on sound statistical reasoning to maximize your\n' +
      '            revenue and reduce costs.',
  },
  {
    title: 'Machine Learning',
    icon: MachineLearningIcon,
    description:
      'Use state-of- art machine learning techniques for classification,\n' +
      '            regression and unsupervised learning problems. Pipelined models then\n' +
      '            get deployed on software stacks.',
  },
  {
    title: 'Recommender Systems',
    icon: RecommenderSystemsIcon,
    description:
      'Build scalable recommender systems combining collaborative\n' +
      '            filtering, content based filtering models and graph-based models to\n' +
      '            deliver domain specific recommendations.',
  },
  {
    title: 'Natural Language Processing',
    icon: NaturalLanguageProcessingIcon,
    description:
      'Extract every ounce of information from textual and social media\n' +
      '            data. Deploy mamed entity detection, keyword annotation, dependency\n' +
      '            parsing, topic modeling to understand your data better.',
  },
  {
    title: 'Conversational Dialogue Systems',
    icon: ConversationalDialogueSystemsIcon,
    description:
      'We build chatbots that provide deep first touch-points for your\n' +
      '            customers. Our bots embedded with deep understanding of your\n' +
      '            industry and organization focus on providing near human interface\n' +
      '            experience to your users. When we think of Machine Learning and AI\n' +
      '            we think of complexities and prohibitive costs. Data Peace is bent\n' +
      '            on making AI accessible to all. More so to small businesses who will\n' +
      '            benefit most from it.',
  },
];

class Skills extends React.Component {
  state = {
    activeIndex: 0,
  };

  handleLinkClick = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const activeItem = items[this.state.activeIndex];
    return (
      <div className="Skills">
        <div className="flex-center flex-col">
          <h2 className="Skills-heading">What We Do</h2>
        </div>
        <div className="flex flex-col flex-center Skills-description">
          <p>We deliver the promise of the Cloud for your business.</p>
          <p>
            We ensure that you not only experience great technology but also
            remarkable business outcomes.
          </p>
        </div>
        <div className="Skills-grid flex flex-wrap">
          <div className="Skills-link-list flex-40">
            {items.map((item, index) => (
              <div
                key={index}
                className={`Skills-link ${
                  index === this.state.activeIndex ? 'active' : ''
                }`}
                onClick={() => this.handleLinkClick(index)}
              >
                <div>{item.title}</div>
                <SkillItem
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              </div>
            ))}
          </div>
          <div className="Skills-active flex-60">
            <SkillItem
              title={activeItem.title}
              icon={activeItem.icon}
              description={activeItem.description}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
