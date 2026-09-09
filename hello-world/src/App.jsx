import { useState } from 'react'

import './App.css'
import { Welcome } from './Welcome';
import Button from './Button'

import { Hello, HelloWithoutJsx } from './Hello';
import { Product } from './Product';
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList';
import { NameList } from './NameList';
import { Alert } from './Alert';
import { CustomButton } from './CustomButton';
import { Contact } from './Contact';
import { NewsLetter } from './NewsLetter';
import { Menu } from './Menu';

function App() {

  return (
    <>
      {/* <h1>Codevolution React course</h1> */}
      <Hello />
      <HelloWithoutJsx />

      {/* welcome {child} component inside app {parent} component */}
      <Welcome test="Leo" alias="Lion" />
      <Welcome test="Tiger" alias="none" />
      <Welcome test="Li" alias="none" />
      <Button />

      <Product title="Gaming Laptop" price={1299.99} inStock={true} categories={["Electronics", "Computers"]} />
      <UserDetails name="Bruce Wayne" isOnline={true} isPremuim={true} />
      <UserDetails name="Iron Wayne" isOnline={true} hideOffline={true} isNewUser={true}/>
      <ProductList />
      <NameList/>
      <Alert> Your changes have been saved</Alert>
      <CustomButton/>
      <Contact/>
      <NewsLetter/>
      <Menu />
    </>
    // <></> and <React.Fragment><React.Fragment/> are same


  );
}

export default App;
