import React from 'react';

 function ErrorScreen({error}) {
  
   return (<div>
            <h2>There is a problem </h2>
            <p>Error : {error?.message}</p>
            <p>sometimes refreshing helps</p>
</div>)
};

export default ErrorScreen;