/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Feature from '../components/cards/feature';
/**
import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';
 */
const data = [
  {
    id: 1,
    icon: '/images/services/1.png',
    title: 'Multi-Wallet Tracking',
    description: `Monitor multiple wallet addresses simultaneously for real-time updates.`,
  },
  {
    id: 2,
    icon: '/images/services/2.png',
    title: 'Customizable Dashboards',
    description: `Allow users to create personalized views for tracking their token and NFT assets. `,
  },
  {
    id: 3,
    icon: '/images/services/3.png',
    title: 'Real-time Alerts',
    description: `Set alerts for wallet activity like incoming tokens, changes in balances, or NFT transfers.`,
  },
  {
    id: 4,
    icon: '/images/services/4.png',
    title: 'Mobile App Support:',
    description: `Provide an accessible mobile app for on-the-go asset tracking and updates.`,
  },
  {
    id: 5,
    icon: '/images/services/5.png',
    title: 'Token Price Tracking',
    description: `Integrate real-time token pricing to calculate the value of held assets.`,
  },
  {
    id: 6,
    icon: '/images/services/6.png',
    title: 'Portfolio Summarization',
    description: `Automatically categorize and summarize wallet assets by type, value, and chain`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Product features"
          title="Ultimate features that works"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#c4d4f2',
    pt: [8, null, null, null, 10, 14],
    pb: [8, null, null, null, 15, 16, 19],
    position: 'relative',
  },
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [35, null, null, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, null, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
