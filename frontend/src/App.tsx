// 원본
// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       StarryNight
//       <div>FrontEnd</div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
// import Header from './Presentational/Common/Layout/Header/Header';
import Footer from './Presentational/Common/Layout/Footer/Footer';
import MyHeader from './Presentational/Layout/MyLayout/MyHeader';

// import MyProfile from './Presentational/Layout/MyProfile';

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Footer />
    </div>
  );
}

export default App;
