import Chair1 from './assets/Chair1.png'
import Table from './assets/table1.avif'
import BedImg from './assets/bed.avif'
import CupboardImg from './assets/cupboard.avif'
import ChairImg from './assets/chairImg.png'
import LightingImg from './assets/lighting.avif'
import Cupboards from './assets/cupboards.jpeg'
import Light from './assets/light.jpeg'
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';
  
import Product1 from './assets/product1.avif'
import Product2 from './assets/product2.avif'
import Product3 from './assets/product3.avif'
import Product4 from './assets/product4.avif'
import Product5 from './assets/product5.avif'
import Product6 from './assets/product6.avif'
import Product7 from './assets/product7.avif'
import Product8 from './assets/product8.avif'
import Product9 from './assets/product9.avif'
import Product10 from './assets/product10.avif'
  
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
        image: <Cupboards />,
      },
      {
        name: 'lighting',
        image: <Light />,
      },
    ],
  };

  export const products = {
    title: 'All Products',
    subtitle:
      'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
    pages: [
      {
        productList: [
          {
            image: <Product1 />,
            icon: <IoMdAddCircle />,
            name: 'Ceiling Light',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Product2 />,
            icon: <IoMdAddCircle />,
            name: 'Wood Chair',
            price: 50,
            oldPrice: 70,
          },
          {
            image: <Product3 />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Product4 />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Product5 />,
            icon: <IoMdAddCircle />,
            name: 'Treos Seroes 911',
            price: 200,
            oldPrice: 210,
          },
          {
            image: <Product6 />,
            icon: <IoMdAddCircle />,
            name: 'Multi bilderman slibber',
            price: 45,
            oldPrice: 50,
          },
          {
            image: <Product7 />,
            icon: <IoMdAddCircle />,
            name: 'XORA corner desk',
            price: 320,
            oldPrice: 325,
          },
          {
            image: <Product8 />,
            icon: <IoMdAddCircle />,
            name: 'Black Forest Series Wood',
            price: 225,
            oldPrice: 240,
          },
          {
            image: <Product9 />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Product10 />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
        ],
      },
      {
        productList: [
          {
            image: <Product1 />,
            icon: <IoMdAddCircle />,
            name: 'Ceiling Light',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Product2 />,
            icon: <IoMdAddCircle />,
            name: 'Wood Chair',
            price: 50,
            oldPrice: 70,
          },
          {
            image: <Product3 />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Product4 />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Product5 />,
            icon: <IoMdAddCircle />,
            name: 'Treos Seroes 911',
            price: 200,
            oldPrice: 210,
          },
          {
            image: <Product6 />,
            icon: <IoMdAddCircle />,
            name: 'Multi bilderman slibber',
            price: 45,
            oldPrice: 50,
          },
          {
            image: <Product7 />,
            icon: <IoMdAddCircle />,
            name: 'XORA corner desk',
            price: 320,
            oldPrice: 325,
          },
          {
            image: <Product8 />,
            icon: <IoMdAddCircle />,
            name: 'Black Forest Series Wood',
            price: 225,
            oldPrice: 240,
          },
          {
            image: <Product9 />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Product10 />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
        ],
      },
    ],
  };
  