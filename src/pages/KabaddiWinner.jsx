import React from 'react';
import '../pages/KabaddiWinner.css';

const data = [
  { name: 'Divyanshu', branch: 'B.Tech CS', position: '1st', certificate: true },
  { name: 'Shubhra Singh', branch: 'CS-DS 2B', position: '1st', certificate: true },
  { name: 'Varnima Gupta', branch: 'CS-AIML-2C', position: '1st', certificate: true },
  { name: 'Vishal Singh', branch: 'CS AIML 2B', position: '1st', certificate: true },
  { name: 'Rajjwal Singh', branch: 'CS-AIML 2-B', position: '1st', certificate: true },
  { name: 'Ajay Singh', branch: 'MBA 1E', position: 'Participated', certificate: true },
  { name: 'Ahmed Mohd Hakim', branch: 'CS DS-1', position: 'Participated', certificate: true },
];

const KabaddiWinner = () => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>Position</th>
            <th>Academic Year</th>
            <th>Download Certificate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.branch}</td>
              <td>{item.position}</td>
              <td>{item.year}</td>
              <td>
                {item.certificate ? (
                  <a href="#" className="pdf-link">
                    <img
                      src="pdf-icon.png"
                      alt="Download"
                      className="pdf-icon"
                    />
                  </a>
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KabaddiWinner;
