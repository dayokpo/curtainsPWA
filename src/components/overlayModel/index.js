import React from 'react'
import PropTypes from 'prop-types'
import facebook_white from '../../icons/facebook_white.png'
import linkedin_white from '../../icons/linkedin_white.png'
import insta_white from '../../icons/insta_white.png'
import whatsapp_white from '../../icons/whatsapp_white.png'
function OverlayModel({
  removeOverlay,
  insta,
  fb,
  wp,
  email,
  socialURLs,
  commContent,
  socialLogoUrls,
  //shareLogoUrls
}) {
  const {
    facebook_url,
    instagram_url,
    linkedin_url,
    whatsapp_url,
    mail_url,
  } = socialURLs
  const { linkedin } = socialLogoUrls

  const fburl = facebook_url.url
  const instaUrl = instagram_url.url
  const linkedUrl = linkedin_url.url
  const wu = whatsapp_url.url
  const murl = mail_url.url
  const whatsappUrl = wu.substring(wu.indexOf('whatsapp'), wu.length)
 //const { linkedin_icon, whatsapp_icon } = shareLogoUrls;
  const {
    phone_number,
    email_address,
    website_url,
    map_url,
    phone_icon,
    email_icon,
    webiste_icon,
    location_icon,
  } = commContent
  const [open, setOpen] = React.useState(false)
  const [shareOpen, setShareOpen] = React.useState(false)
  const [contactOpen, setContactOpen] = React.useState(false)
  const phoneNumber = phone_number.text

  return (
    <div className="overlay">
      <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      />
      <nav>
        <ul>
          <li>
            <a
              onClick={() => {
                setOpen(false)
                setShareOpen(false)
                setContactOpen(!contactOpen)
              }}
            >
              Contact
            </a>
            {contactOpen && (
              <ul className="socialUL">
                <li>
                  <img
                    src={phone_icon.url}
                    alt="wp"
                    className="contact-img"
                    onClick={() => {
                      window.location = 'tel:' + phoneNumber
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={email_icon.url}
                    alt="wp"
                    className="contact-img"
                    onClick={() => {
                      window.location = 'mailto:' + email_address.text
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={webiste_icon.url}
                    alt="wp"
                    className="contact-img"
                    onClick={() => {
                      window.open("https://"+website_url.text, '_blank')
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={location_icon.url}
                    alt="wp"
                    className="contact-img"
                    onClick={() => {
                      window.open(map_url.text, '_blank')
                    }}
                  />
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              onClick={() => {
                setOpen(false)
                setContactOpen(false)
                setShareOpen(!shareOpen)
              }}
            >
              Share
            </a>
            {shareOpen && (
              <ul className="socialUL">
                <li className="grid-column">
                  <img src={whatsapp_white} alt="wp"  onClick={() => {
                      window.location = whatsappUrl
                    }}/> 
                </li>
                <li className="grid-column">
                  <img  src={email_icon.url} alt="email" onClick={() => {
                      window.location = murl
                    }}/> 
                </li>
                <li className="grid-column">
                  <img src={linkedin_white} alt="linked"  onClick={() => {
                      window.location = linkedUrl
                    }}/>
                </li>
              </ul>
            )}
          </li>
          <li className="social">
            <a
              onClick={() => {
                setShareOpen(false)
                setContactOpen(false)
                setOpen(!open)
              }}
            >
              Social
            </a>
            {open && (
              <ul className="socialUL">
                <li className="grid-column">
                  <img
                    src={insta_white}
                    alt="insta"
                    onClick={() => {
                      window.location = instaUrl
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={linkedin_white}
                    alt="linked"
                    onClick={() => {
                      window.location = linkedUrl
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={facebook_white}
                    alt="facebook"
                    onClick={() => {
                      window.location = fburl
                    }}
                  />
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

OverlayModel.defaultProps = {
  removeOverlay: false,
  insta: '',
  linked: '',
  fb: '',
  wp: '',
  email: '',
}

OverlayModel.propTypes = {
  removeOverlay: PropTypes.func,
  insta: PropTypes.string,
  linked: PropTypes.string,
  fb: PropTypes.string,
  wp: PropTypes.string,
  email: PropTypes.string,
}
export default OverlayModel
