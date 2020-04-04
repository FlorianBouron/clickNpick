import React from 'react';
import TextField from '@material-ui/core/TextField';
import Section from '../../components/Section';
import ProductListPageCard from '../ProductListPageCard';


// styles
import './style.scss';

function ProductListPage() {
  return (
    <Section className="product-list-page">
      <TextField
        fullWidth
        placeholder="Search for product"
        className="product-list-page__input"
      />
      {[1, 2, 3].map(() => <ProductListPageCard />)}
    </Section>
  );
}

export default (ProductListPage);
