import { FC } from 'react';
import Image from 'next/image';

import gif from '@/assets/giphy.gif';

const UserCommentCard: FC = () => (
    <>
  <div className="w-full h-[290px]">
  <Image src={gif} alt="" className="w-full h-full object-cover" />
</div>
</>
);

export default UserCommentCard;
