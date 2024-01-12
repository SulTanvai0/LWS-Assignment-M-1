import HeroSection from './components/HeroSection';
import StudentTable from './components/StudentTable';
import Layout from './layout/Layout';

const App = () => {
  return (
    <Layout >
      <HeroSection />
      <StudentTable />
    </Layout>
  );
};

export default App;