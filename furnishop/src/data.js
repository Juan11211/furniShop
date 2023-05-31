import Chair1 from './assets/Chair1.png'
import Table from './assets/table1.avif'
import BedImg from './assets/bed.avif'
import CupboardImg from './assets/cupboard.avif'
import ChairImg from './assets/chairImg.png'
import LightingImg from './assets/lighting.avif'

import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';
  
  
export const stats = [
    {
    value: '10',
    text: 'Years in the industry'
}, 
{
    value: '12',
    text: 'Stores across the US'
}, 
{
    value: '10k+ ',
    text: 'Furniture sold'
}, 
{
    value: '1000+',
    text: 'Selections to choose from'
}, 
];

export const features = {
    image: <Chair1 />,
    title: 'We Create your home more aesthetic',
    subtitle:
      'Furniture power is a software as services for multipurpose business management system',
    buttonText: 'Show Now',
    items: [
      {
        icon: <IoIosCheckmarkCircle />,
        title: 'Valuation Services',
        subtitle:
          'Sometimes features require a short description.  This can be detailed description',
      },
      {
        icon: <IoIosCheckmarkCircle />,
        title: 'Development of Furniture Models',
        subtitle:
          'Sometimes features require a short description.  This can be detailed description',
      },
    ],
    feature2: {
      image: <Table />,
      title: 'The Best Furniture Manufacturer of your choice',
      subtitle:
        'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
    },
  };
  
  export const newInStore = {
    title: 'New In Store Now',
    subtitle: 'Get the latest items immediately with promo prices',
    link: 'Check all',
    icon: <IoIosArrowRoundForward />,
    products: [
      {
        name: 'chair',
        image: <ChairImg />,
      },
      {
        name: 'bed',
        image: <BedImg />,
      },
      {
        name: 'cupboard',
        image: <CupboardImg />,
      },
      {
        name: 'lighting',
        image: <LightingImg />,
      },
    ],
  };