  // import React, {useEffect, useState} from 'react';


export const fetchInitialDeals = async ()=>
  {
    // const [isLoading, setIsLoading] = useState(true);
     try {
      const response = await fetch('https://bakesaleforgood.com/api/deals');
      const json = await response.json();
      return json
      } catch (error) {
      console.error(error);
    } 
    // finally {
      // setIsLoading(false);
    // }
  };

// export default fetchInitialDeals;
