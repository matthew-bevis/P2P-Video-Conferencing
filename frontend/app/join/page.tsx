import React from 'react';
import KeyInput from '../_components/keyInput'; // Adjust the import path as necessary

const Home: React.FC = () => {
  const handleKeySubmit = (key: string) => {
    console.log("Submitted Key:", key);
    // Handle the key submission here
  };

  return (
    <div>
      <p> Join page</p>
      <KeyInput onSubmitKey={handleKeySubmit} />
    </div>
  );
};

export default Home;
