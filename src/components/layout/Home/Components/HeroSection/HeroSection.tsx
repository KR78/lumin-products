import React from 'react';
import Select from 'src/components/common/Select';
import categories from 'src/helpers/productCategories';
import style from './HeroSection.module.scss';

const HeroSection = () => (
  <article className={style.wrapper}>
    <section className={style.section}>
      <header>
        <h1>All Products</h1>
        <h3>A 360° look at Lumin</h3>
      </header>
      <div className={style.filterWrapper}>
        <Select
          className={style.filterByCategory}
          options={categories}
        />
      </div>
    </section>
  </article>
);

export default HeroSection;
