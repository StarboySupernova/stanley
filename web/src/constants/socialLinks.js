import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import { IoIosMailUnread } from 'react-icons/io';
import { FcAndroidOs } from 'react-icons/fc';

// add reddit and other social media links
export const socialLinks = [
  {
    name: 'telephone',
    url: 'tel:+263785120518',
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: 'mail',
    url: 'mailto:stanleylandscapingandoutdoor@gmail.com',
    icon: <IoIosMailUnread />,
  },
  {
    name: 'whatsapp',
    url: `https://wa.me/263785120518?text=${encodeURIComponent(
      'I would like to speak to an available Stanley Outdoor & Landscaping Representative'
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/StanleyOutdoorandLandscaping/',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/stanleyoutdoorandlandscaping',
    icon: <FaTwitter />,
  },
  {
    name: 'Apple',
    url: '',
    icon: <DiApple />,
  },
  {
    name: 'Android',
    url: '',
    icon: <FcAndroidOs />,
  },
];
