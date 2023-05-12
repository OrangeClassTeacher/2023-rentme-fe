import { FC } from 'react';
import Image from 'next/image';

import bimage from '@/assets/backimg.svg';

const UserCommentCard: FC = () => (
    <>
  <div className="w-[300px] h-[600px]">
  <Image src={bimage} alt="" className="w-full h-full object-cover" />
</div>
</>
);

export default UserCommentCard;
