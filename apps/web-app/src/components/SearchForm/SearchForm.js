import './SearchForm.css';

import React from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

export default function SearchForm() {
  return (
    <form className="search">
      <fieldset>
        <Input label="From" />
        <Input label="To" />
      </fieldset>
      <fieldset>
        <Input label="Adults" />
        <Input label="Children" />
      </fieldset>
      <Button type="submit">Send</Button>
    </form>
  );
}
