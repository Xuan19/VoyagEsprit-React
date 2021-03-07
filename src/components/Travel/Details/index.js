import React from 'react';
import './details.scss';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
import PropTypes from 'prop-types';
import 'react-tabs/style/react-tabs.scss';

const Details = ({
  program,
  baseline,
  comments,
  priceDetails,
}) => (

  <main className="main-zone-secondary-div">
    <div className="cpt-product-information">
      <Tabs className="tabs">
        <TabList className="tablist">
          <Tab>Voir le programme par jour</Tab>
          <Tab>Détail du prix</Tab>
          <Tab>Avis clients</Tab>
        </TabList>

        <TabPanel className="tabpanel">
          <h2>Description</h2>
          <p>{baseline}</p>
          <h2>Programme</h2>
          <p>{program}</p>
        </TabPanel>

        <TabPanel className="tabpanel">
          <h2 className="title">CE PRIX COMPREND</h2>
          <p className="description">
            {priceDetails}
          </p>
          <h2 className="title">LES PRIX NE COMPRENNENT PAS</h2>
          <p className="description">
            {priceDetails}
          </p>

        </TabPanel>
        <TabPanel className="tabpanel">
          {comments}
        </TabPanel>
      </Tabs>

    </div>
  </main>
);

Details.propTypes = {
  program: PropTypes.string,
  priceDetails: PropTypes.string,
  baseline: PropTypes.string,
  comments: PropTypes.array,
};

Details.defaultProps = {
  program: 'non renseigné',
  priceDetails: 'non renseigné',
  baseline: 'non renseigné',
  comments: 'non renseigné',
};

export default Details;
