import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Link = styled(RouterLink)`
  color: green;
  text-decoration: ${({ as }) => (as === 'a' ? 'underline' : 'none')};
`;

export const ExternalLink = ({ href, ...props }) => (
  <Link
    as="a"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    {...props}
  />
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Link;
