import React from 'react';
import bigDataIcon from './icons/big_data.png';
import dataLakeIcon from './icons/data_lakes.png';
import deepLearningIcon from './icons/deep_learning.png';
import machineLearningIcon from './icons/machine_learning.png';
import chatBotIcon from './icons/chatbots.png';
import objectDetectionIcon from './icons/objectDetection.png';
import './skills.scss';

const Skills = () => (
  <div className="Skills">
    <div className="flex-center flex-col">
      <h2 className="Skills-heading">What We Do</h2>
    </div>
    <div className="flex flex-col flex-center Skills-description">
      <p>We DELIVER the benefits of data for you through cutting edge technologies</p>
      <p>and We PREPARE you for your journey to a Cloud ecosystem</p>
    </div>
    <div className="Skills-grid flex flex-wrap">

      <div className="Skills-grid__item flex flex-50">
        <div className="Skills-grid__icon">
          <img src={bigDataIcon} />
        </div>
        <div className="flex flex-col">
          <h3>Cloud Migration</h3>
          <p>We manage your journey to single cloud/ multi-cloud/ hybrid cloud environments.
              We provide devops services, cloud migration services, cloud application
              cloud native custom development and cloud infrastructure transformation services.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Skills-grid__icon">
          <img src={objectDetectionIcon} />
        </div>
        <div className="flex flex-col">
          <h3>Cloud Management</h3>
          <p>
            Once on the cloud we ensure that you achieve the desired
            outcomes with your data and applications parked there. We provision and
            maintain cloud- based architecture solutions employing micro-services,
            distributed database systems, load-balancing and caching.
          </p>
        </div>
      </div>

      <div className="Skills-grid__item flex flex-50">
        <div className="Skills-grid__icon">
          <img src={deepLearningIcon} />
        </div>
        <div className="flex flex-col">
          <h3>High Performance Computing</h3>
          <p>
                The cloud is useless if it is not equip you to do
                more with your data. We build for you quality, well-documented, ouctome
                focused, modularized software across processors, workstations and cloud

                computing devices running the latest big data tool components. Porting existing
                in-house or cloud based applications to Kubernetes to scale them and reduce the
                running and maintenance cost.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Skills-grid__icon">
          <img src={dataLakeIcon} />
        </div>
        <div className="flex flex-col">
          <h3>Data Lake Implementation</h3>
          <p>
              Don’t lose your data to want of better warehousing
              solutions. We are experts in Data Lake implementations. This modern version of
              data warehousing powered on clouds like AWS, Azure, Google Cloud will ensure
              that ALL your data is available to you for posterity.

            <span>We are ready to cater to a world that will reside on multi-cloud ecosystems. We
                  are here to make the cloud a reality for ALL businesses
            </span>
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Skills-grid__icon">
          <img src={bigDataIcon} />
        </div>
        <div className="flex flex-col">
          <h3>Big Data Analytics</h3>
          <p>
              Gain insights from your data. Uncover data, forecast future
              events and take steps based on sound statistical reasoning to maximize your
              revenue and reduce costs.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Skills-grid__icon">
          <img src={machineLearningIcon} />
        </div>
        <div className="flex flex-col">
          <h3>Machine Learning</h3>
          <p>
              Use state-of- art machine learning techniques for
              classification, regression and unsupervised learning problems. Pipelined models
              then get deployed on software stacks.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Skills-grid__icon">
          <img src={objectDetectionIcon} />
        </div>
        <div className="flex flex-col">
          <h3>Recommender Systems</h3>
          <p>
              Build scalable recommender systems combining
              collaborative filtering, content based filtering models and graph-based models to
              deliver domain specific recommendations.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-50">
        <div className="Skills-grid__icon">
          <img src={deepLearningIcon} />
        </div>
        <div className="flex flex-col">
          <h3>Natural Language Processing</h3>
          <p>
              Extract every ounce of information from textual and social media data. Deploy
              mamed entity detection, keyword annotation, dependency parsing, topic
              modeling to understand your data better.
          </p>
        </div>
      </div>
      <div className="Skills-grid__item flex flex-100">
        <div className="Skills-grid__icon">
          <img src={chatBotIcon} />
        </div>
        <div className="flex flex-col">
          <h3>Conversational Dialogue Systems</h3>
          <p>
              We build chatbots that provide deep first
              touch-points for your customers. Our bots embedded with deep understanding
              of your industry and organization focus on providing near human interface
              experience to your users.
              When we think of Machine Learning and AI we think of complexities and
              prohibitive costs. Data Peace is bent on making AI accessible to all. More so to
              small businesses who will benefit most from it.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
