import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import logo from '../../files/logo-87.png'
const Metadata = ({ websiteMeta }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const titleText = websiteMeta.title.text;
  const websiteDescription = websiteMeta.description.text;
  const linkShareImage = websiteMeta.meta_link_share_image?websiteMeta.meta_link_share_image.url:logo;
  console.log(" ilnk share", linkShareImage);
  const metaDescription = websiteDescription || data.site.siteMetadata.description
  return (
    <Helmet>
    <meta charSet="utf-8" />
    <link href='https://css.gg/all.css' rel='stylesheet'/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta property="og:type" content="website" />
      <title>{`${titleText}`}</title>
      <meta property="og:title" content={titleText} />
      <meta property="og:image" content={linkShareImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="200" />
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}

export default Metadata