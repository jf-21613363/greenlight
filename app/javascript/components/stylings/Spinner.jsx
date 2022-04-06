import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

export default function Spinner(props) {
  return (
    <BootstrapSpinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
      {...props}
    />
  );
}