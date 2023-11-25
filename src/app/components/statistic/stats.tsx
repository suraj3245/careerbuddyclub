import React from 'react';
import { FaUserGraduate, FaChartLine, FaUserTie, FaSchool } from 'react-icons/fa'; // Import icons from react-icons

// Define the props interface
interface Statistic {
  icon: JSX.Element;
  number: string;
  label: string;
}

interface StatisticsCardProps {
  statistics: Statistic[];
}

// Statistic Item component with inline styling
const StatisticItem: React.FC<Statistic> = ({ icon, number, label }) => {
  const iconStyle = {
    fontSize: '2rem',
    marginBottom: '8px',
  };

  const numberStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const labelStyle = {
    fontSize: '1rem',
    color: '#666',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={iconStyle}>{icon}</div>
      <div style={numberStyle}>{number}</div>
      <div style={labelStyle}>{label}</div>
    </div>
  );
};

// Main component with inline styling
const StatisticsCard: React.FC<StatisticsCardProps> = ({ statistics }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#F5F5F5',
      padding: '20px',
    }}>
      {statistics.map((stat, index) => (
        <StatisticItem key={index} {...stat} />
      ))}
    </div>
  );
};

// const statistics = [
//   { icon: <FaUserGraduate />, number: '1,00,000+', label: 'Students taken Test' },
//   { icon: <FaChartLine />, number: '40,00,000+', label: 'Students Counseled' },
//   { icon: <FaUserTie />, number: '1500+', label: 'Expert Counsellors' },
//   { icon: <FaSchool />, number: '1,00,000+', label: 'Admissions taken' }
// ];


// const statusApti = () => {
//   return (
//    <StatisticsCard statistics={statistics} />
//   )
// }

export default StatisticsCard;