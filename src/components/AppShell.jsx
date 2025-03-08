'use client';

import PropTypes from 'prop-types';

// This is a custom app shell component that works with React Server Components
// It has the 'use client' directive at the top which is required for interactive components
function AppShell({ children }) {
  return children;
}

AppShell.propTypes = {
  children: PropTypes.node,
};

export default AppShell;
