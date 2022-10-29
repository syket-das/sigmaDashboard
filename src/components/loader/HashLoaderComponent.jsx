import React from 'react'
import { HashLoader } from 'react-spinners';

const HashLoaderComponent = (loading) => {
      const override = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red',
      };
  return (
    <div>
      <HashLoader
        color={'#3f51b5'}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{ marginTop: '20%', marginLeft: '50%' }}
      />
    </div>
  );
}

export default HashLoaderComponent