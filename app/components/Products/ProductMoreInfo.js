import React from 'react'
import { Tabs } from '@mantine/core';
import { BiDetail } from 'react-icons/bi';
import { BsInfoSquare, BsStar } from 'react-icons/bs';
import Additional from './Additional';
import Description from './Description';
import Reviews from './Reviews';


const ProductMoreInfo = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container">
       <div>
       <Tabs color="yellow" variant="pills" radius="sm" orientation="vertical" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<BiDetail size="1.6rem" />} > Description </Tabs.Tab>
        <Tabs.Tab value="messages"  icon={<BsInfoSquare size="1.3rem" />}> Additional Information </Tabs.Tab>
        <Tabs.Tab value="settings" icon={<BsStar size="1.3rem" />}>Reviews</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pl="xs">
      {<Description/>}
      </Tabs.Panel>

      <Tabs.Panel value="messages" pl="xs">
      {<Additional/>}
      </Tabs.Panel>

      <Tabs.Panel value="settings" pl="xs">
      {<Reviews/>} 
      </Tabs.Panel>
    </Tabs>
       </div>
      </div>
    </div>
  )
}

export default ProductMoreInfo