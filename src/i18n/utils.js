import React from 'react';
import { FormattedMessage } from 'react-intl';

const getMsg = (id, defaultMessage = '') => (
  <FormattedMessage
    defaultMessage={defaultMessage}
    id={id}
  />
);

export default getMsg;
