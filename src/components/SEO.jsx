// components/SEO.js
import React from "react";
import { Helmet } from "react-helmet";


const SEO = ({ title, description, keywords, author, canonical }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    {canonical && <link rel="canonical" href={canonical} />}
  </Helmet>
);

export default SEO;
