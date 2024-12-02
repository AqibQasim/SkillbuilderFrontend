import React from 'react'
import Image from 'next/image'
import LayoutWidth from './LayoutWidth';

const Condition = ({heading, text}) => {
  return (
    <LayoutWidth>
      <div>
        <div>
          <div className="mb-2 flex gap-2 text-xl font-semibold">
            <h1>{heading}</h1>
            <Image src="/flag.png" width={26} height={5} />
          </div>
          <p>
            {text}
          </p>
        </div>
      </div>
    </LayoutWidth>
  );
}

export default Condition