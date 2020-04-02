import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SignatureGenerator from './SignatureGenerator';

export default {
  title: 'Signature Generator',
  component: SignatureGenerator,
  decorators: [withKnobs],
};

export const ToStorybook = () => {
  const name = text('Your Name', 'Herick Oliveira');
  const email = text('Your email address', 'herick.oliveira@sharktower.com');
  const phone = text('Your phone number', '+55 62 981256973');
  return (
    <SignatureGenerator name={name} email={email} phone={phone} />
  );
};

ToStorybook.story = {
  name: 'Generate',
};
