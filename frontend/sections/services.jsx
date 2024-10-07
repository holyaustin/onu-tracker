/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Service from '../components/cards/service';
import { transform } from 'framer-motion';

const services = [
  {
    title: 'Real-time Token Balance Monitoring',
    price: 'Track the balance of tokens across multiple wallet addresses.'
  },
  {
    title: 'NFT Collection Tracking',
    price: ' Retrieve detailed information about NFTs held in a specified wallet.'
  },
  {
    title: 'Alerts and Notifications',
    price: 'Notify users of significant changes in wallet balances, new NFTs, or major transactions.',
  },
  {
    title: 'Historical Transaction Data:',
    price: 'Provide insights into past token transfers and NFT transactions for specific wallets.',
  },
  {
    title: 'Portfolio Analytics',
    price: 'Track assets across different blockchains and consolidate the data in one place.',
  },
  {
    title: 'Multi-chain Wallet Support',
    price: 'Track assets across different blockchains and consolidate the data in one place.',
  },

 
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Ideal solutions for you"
          title="Our Services"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 10],
    display: 'grid',
    justifyContent: 'center',
    fontSize: "40px",
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(3, 1fr)',
      'repeat(3, 300px)',
    ],
  },
};
