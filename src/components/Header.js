import React from "react";

// export default () => {
//   return (
//     <div>
//       <h1>Contact Manager</h1>
//     </div>
//   );
// };

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

export default Header;
