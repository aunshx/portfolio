import React from "react";
import Helmet from "react-helmet";

const MetaTags = ({
  defaultTitle,
  title,
  link,
  description,
  themeColor,
  ogTitle,
  ogUrl,
  ogType,
  ogLocale,
  ogImage,
  ogImageType,
  msAppTileImage,
  twitterCard,
  twitterImageAlt,
  twitterTitle,
  twitterDescription,
  twitterImage,
  keywords,
}) => {
  return (
    <Helmet defaultTitle={defaultTitle || "Aunsh - Full Stack Developer"}>
      <meta charSet='utf-8' />
      {title ? (
        title
      ) : (
        <title>Aunsh &middot; Full Stack Developer | JS Node SQL Mongo</title>
      )}
      <link rel='canonical' href={link || "https://aunsh.com/"} />
      <meta
        name='description'
        content={
          description ||
          "Hi, I'm Aunsh, an engineer, teacher and a self-taught web developer. I dabble in JS, React, Node, Postgres, Mongo and SQL to make interesting projects."
        }
      />
      <meta
        name='keywords'
        content={
          keywords ||
          "Aunsh, Bandivadekar, Full, Stack, Developer, Javascript, Mongo DB, Great"
        }
      />
      <meta name='theme-color' content={themeColor || "rgb(0, 145, 255)"} />
      <meta
        property='og:title'
        content={ogTitle || "Aunsh - Full Stack Developer"}
      />
      <meta property='og:url' content={ogUrl || "https://aunsh.com/"} />
      <meta property='og:type' content={ogType || "website"} />
      <meta property='og:locale' content={ogLocale || "en_GB"} />
      <meta
        property='og:image'
        content={ogImage || "https://i.postimg.cc/VsVfZQtZ/aunsh-Logo.png"}
      />
      {/* <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" /> */}
      <meta property='og:image:type' content={ogImageType || "image/png"} />
      <meta
        name='msapplication-TileImage'
        content={
          msAppTileImage || "https://i.postimg.cc/VsVfZQtZ/aunsh-Logo.png"
        }
      />
      <meta name='twitter:card' content={twitterCard || "summary"} />
      <meta
        name='twitter:image:alt'
        content={twitterImageAlt || "Bodinga - Digital Medical Platform"}
      />
      <meta
        name='twitter:title'
        content={twitterTitle || "Aunsh - Full Stack Developer - aunsh.com"}
      />
      <meta name='twitter:site' content='@aunshx' />
      <meta
        name='twitter:description'
        content={
          twitterDescription ||
          "Hi, I'm Aunsh, an engineer, teacher and a self-taught web developer. I dabble in JS, React, Node, Postgres, Mongo and SQL to make interesting projects."
        }
      />
      <meta
        name='twitter:image'
        content={twitterImage || "https://i.postimg.cc/VsVfZQtZ/aunsh-Logo.png"}
      />
    </Helmet>
  );
};

export default MetaTags;
