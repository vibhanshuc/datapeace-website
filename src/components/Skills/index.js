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

const Skills = () => (
  <div className="Skills">
    <div className="flex-center flex-col">
      <h2 className="Skills-heading">What We Do</h2>
    </div>
    <div className="flex flex-col flex-center Skills-description">
      <p>
        We deliver the benefits of data for you through cutting edge
        technologies
      </p>
      <p>and we prepare you for your journey to a Cloud ecosystem</p>
    </div>
    <div className="Skills-grid flex flex-wrap">
      <div className="Skills-grid__item flex flex-50">
        <div className="Item-icon">
          <img src={CloudMigrationIcon} />
        </div>
        <div className="flex flex-col flex-center">
          <div className="Item-title">
            <h4>Cloud Migration</h4>
          </div>
          <p className="Item-description">
            We manage your journey to single cloud/ multi-cloud/ hybrid cloud
            environments. We provide devops services, cloud migration services,
            cloud application cloud native custom development and cloud
            infrastructure transformation services.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Item-icon">
          <img src={CloudManagementIcon} />
        </div>
        <div className="flex flex-col flex-center">
          <div className="Item-title">
            <h4>Cloud Management</h4>
          </div>
          <p className="Item-description">
            Once on the cloud we ensure that you achieve the desired outcomes
            with your data and applications parked there. We provision and
            maintain cloud- based architecture solutions employing
            micro-services, distributed database systems, load-balancing and
            caching.
          </p>
        </div>
      </div>

      <div className="Skills-grid__item flex flex-50">
        <div className="Item-icon">
          <img src={HighPerformanceComputingIcon} />
        </div>
        <div className="flex flex-col flex-center">
          {' '}
          <div className="Item-title">
            <h4>High Performance Computing</h4>
          </div>
          <p className="Item-description">
            The cloud is useless if it is not equip you to do more with your
            data. We build for you quality, well-documented, ouctome focused,
            modularized software across processors, workstations and cloud
            computing devices running the latest big data tool components.
            Porting existing in-house or cloud based applications to Kubernetes
            to scale them and reduce the running and maintenance cost.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Item-icon">
          <img src={DataLakeImplementationIcon} />
        </div>
        <div className="flex flex-col flex-center">
          {' '}
          <div className="Item-title">
            <h4>Data Lake Implementation</h4>
          </div>
          <p className="Item-description">
            Don’t lose your data to want of better warehousing solutions. We are
            experts in Data Lake implementations. This modern version of data
            warehousing powered on clouds like AWS, Azure, Google Cloud will
            ensure that ALL your data is available to you for posterity.
            <span>
              We are ready to cater to a world that will reside on multi-cloud
              ecosystems. We are here to make the cloud a reality for ALL
              businesses
            </span>
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Item-icon">
          <img src={BigDataAnalyticsIcon} />
        </div>
        <div className="flex flex-col flex-center">
          {' '}
          <div className="Item-title">
            <h4>Big Data Analytics</h4>
          </div>
          <p className="Item-description">
            Gain insights from your data. Uncover data, forecast future events
            and take steps based on sound statistical reasoning to maximize your
            revenue and reduce costs.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Item-icon">
          <img src={MachineLearningIcon} />
        </div>
        <div className="flex flex-col flex-center">
          {' '}
          <div className="Item-title">
            <h4>Machine Learning</h4>
          </div>
          <p className="Item-description">
            Use state-of- art machine learning techniques for classification,
            regression and unsupervised learning problems. Pipelined models then
            get deployed on software stacks.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Item-icon">
          <img src={RecommenderSystemsIcon} />
        </div>
        <div className="flex flex-col flex-center">
          <div className="Item-title">
            <h4>Recommender Systems</h4>
          </div>
          <p className="Item-description">
            Build scalable recommender systems combining collaborative
            filtering, content based filtering models and graph-based models to
            deliver domain specific recommendations.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Item-icon">
          <img src={NaturalLanguageProcessingIcon} />
        </div>
        <div className="flex flex-col flex-center">
          {' '}
          <div className="Item-title">
            <h4>Natural Language Processing</h4>
          </div>
          <p className="Item-description">
            Extract every ounce of information from textual and social media
            data. Deploy mamed entity detection, keyword annotation, dependency
            parsing, topic modeling to understand your data better.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-100">
        <div className="Item-icon">
          <img src={ConversationalDialogueSystemsIcon} />
        </div>
        <div className="flex flex-col flex-center">
          {' '}
          <div className="Item-title">
            <h4>Conversational Dialogue Systems</h4>
          </div>
          <p className="Item-description">
            We build chatbots that provide deep first touch-points for your
            customers. Our bots embedded with deep understanding of your
            industry and organization focus on providing near human interface
            experience to your users. When we think of Machine Learning and AI
            we think of complexities and prohibitive costs. Data Peace is bent
            on making AI accessible to all. More so to small businesses who will
            benefit most from it.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
