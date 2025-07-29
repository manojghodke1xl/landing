import { Helmet } from "react-helmet-async";

const Seo = ({
  title = "",
  description = "",
  keywords = "",
  canonical = "",
  og = {},
  twitter = {},
  robots = "index, follow",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={og.title || ""} />
      <meta property="og:description" content={og.description || ""} />
      <meta property="og:url" content={og.url || ""} />

      {/* Twitter */}
      <meta name="twitter:title" content={twitter.title || ""} />
      <meta name="twitter:description" content={twitter.description || ""} />
      <meta name="twitter:url" content={twitter.url || ""} />
    </Helmet>
  );
};

export default Seo;
