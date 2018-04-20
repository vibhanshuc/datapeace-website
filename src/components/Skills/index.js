import React, { Component } from 'react';
import CloudMigrationIcon from './Icons/CloudMigration.svg';
import CloudManagementIcon from './Icons/CloudManagement.svg';
import HighPerformanceComputingIcon from './Icons/HighPerformanceComputing.svg';
import DataLakeImplementationIcon from './Icons/DataLakeImplementation.svg';
import BigDataAnalyticsIcon from './Icons/BigDataAnalytics.svg';
import MachineLearningIcon from './Icons/MachineLearning.svg';
import RecommenderSystemsIcon from './Icons/RecommenderSystems.svg';
import NaturalLanguageProcessingIcon from './Icons/NaturalLanguageProcessing.svg';
import ConversationalDialogueSystemsIcon from './Icons/ConversationalDialogueSystems.svg';
import Heading from '../shared/Heading';

import './skills.scss';

const SkillItem = ({ icon, title, description }) => (
  <div className="Skills-grid__item flex flex-50">
    <div className="Item-icon">
      <img alt={title} src={icon} />
    </div>
    <div className="flex flex-col flex-center">
      <div className="Item-title">
        <Heading title={title} isLighter isSmall />
      </div>
      <p className="Item-description">{description}</p>
    </div>
  </div>
);

const CESItems = [
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
      ' Once on the cloud we ensure that you achieve the desired outcomes' +
      'with your data and applications parked there. We provision and' +
      'maintain cloud- based architecture solutions employing' +
      'micro-services, distributed database systems, load-balancing and' +
      'caching.',
  },
  {
    title: 'High Performance Computing',
    icon: HighPerformanceComputingIcon,
    description:
      'The cloud is useless if it is not equip you to do more with your' +
      '            data. We build for you quality, well-documented, ouctome focused,' +
      '            modularized software across processors, workstations and cloud' +
      '            computing devices running the latest big data tool components.' +
      '            Porting existing in-house or cloud based applications to Kubernetes' +
      '            to scale them and reduce the running and maintenance cost.',
  },
  {
    title: 'Data Lake Implementation',
    icon: DataLakeImplementationIcon,
    description:
      'Don’t lose your data to want of better warehousing solutions. We are' +
      '            experts in Data Lake implementations. This modern version of data' +
      '            warehousing powered on clouds like AWS, Azure, Google Cloud will' +
      '            ensure that ALL your data is available to you for posterity.' +
      '            We are ready to cater to a world that will reside on multi-cloud' +
      '            ecosystems. We are here to make the cloud a reality for ALL' +
      '            businesses.',
  },


];

const AIAASItems = [
  {
    title: 'Machine Learning',
    icon: MachineLearningIcon,
    description:
        'Use state-of-art machine learning techniques for classification,' +
        '            regression and unsupervised learning problems. Pipelined models then' +
        '            get deployed on software stacks.',
  },
  {
    title: 'Big Data Analytics',
    icon: BigDataAnalyticsIcon,
    description:
        'Gain insights from your data. Uncover data, forecast future events' +
        '            and take steps based on sound statistical reasoning to maximize your' +
        '            revenue and reduce costs.',
  },
  {
    title: 'Recommender Systems',
    icon: RecommenderSystemsIcon,
    description:
        'Build scalable recommender systems combining collaborative' +
        '            filtering, content based filtering models and graph-based models to' +
        '            deliver domain specific recommendations.',
  },
  {
    title: 'Natural Language Processing',
    icon: NaturalLanguageProcessingIcon,
    description:
        'Extract every ounce of information from textual and social media' +
        '            data. Deploy mamed entity detection, keyword annotation, dependency' +
        '            parsing, topic modeling to understand your data better.',
  },
  {
    title: 'Conversational Dialogue Systems',
    icon: ConversationalDialogueSystemsIcon,
    description:
        'We build chatbots that provide deep first touch-points for your' +
        '            customers. Our bots embedded with deep understanding of your' +
        '            industry and organization focus on providing near human interface' +
        '            experience to your users. When we think of Machine Learning and AI' +
        '            we think of complexities and prohibitive costs. Data Peace is bent' +
        '            on making AI accessible to all. More so to small businesses who will' +
        '            benefit most from it.',
  },
];

class SkillGroup extends Component {
    state = {
      activeIndex: 0,
    };


    handleLinkClick = (index) => {
      this.setState({
        activeIndex: index,
      });
    };

    render() {
      const { items, title } = this.props;
      const { activeIndex } = this.state;
      const activeItem = items[activeIndex];
      return (
        <div className="Skills-group flex flex-col">
          <div className="Skills-group-heading flex flex-center">
            <Heading title={title} isSmall isLighter />
          </div>
          <div className="flex">
            <div className="Skills-link-list flex-40">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`Skills-link ${index === activeIndex ? 'active' : ''}`}
                  onMouseEnter={() => this.handleLinkClick(index)}
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
            <div
              className="Skills-active flex-60"
            >
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

const Skills = () => (
  <div className="Skills">
    <div className="flex flex-center">
      <Heading title="What We Do" />
    </div>
    <div className="flex flex-col flex-center Skills-description">
      <p>We deliver the promise of the Cloud for your business.</p>
      <p>
            We ensure that you not only experience great technology but also
            remarkable business outcomes.
      </p>
    </div>
    <div className="Skills-grid flex-col" >
      <SkillGroup title="Cloud Enablement Services" items={CESItems} />
      <SkillGroup title="AI Enablement Services" items={AIAASItems} />
    </div>
  </div>
);

export default Skills;
