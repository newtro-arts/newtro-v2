import getIpfsLink from '@/lib/ipfs/getIpfsLink';
import Image from "next/image";
import Link from 'next/link';
import CopyButton from '../Commons/CopyButton';
import AllCreatorsButton from './AllCreatorsButton';

const CreatorDetails = ({ creator }: { creator: Record<string, any> }) => {
  const avatar = creator.user_profile.avatar;
  const address = creator.address;
  const ensRecord = creator.ens_record;

  return (
    <div className="max-w-[500px] mx-auto space-y-8 xl:max-w-full">
      <div className='space-y-8 text-center xl:space-y-0 xl:text-left xl:grid xl:grid-cols-[1fr_auto] xl:gap-y-5'>
        <h1 className="pragmatica-text uppercase font-light text-3xl/8 md:text-5xl/10">
          {creator.user_profile.display_name ?? creator.user_profile.username}
        </h1>
        <AllCreatorsButton className='hidden xl:flex' />
        <CopyButton text={address} className='w-full text-[9px]/4 uppercase md:text-sm/5 xl:max-w-[90px]' />
      </div>

      <div className='space-y-8 xl:space-y-0 xl:flex xl:gap-5'>
        <img
          alt='pfp'
          src={avatar ? getIpfsLink(avatar) : '/default-avatar.png'}
          className="w-full border border-fourth-green border-squircle object-cover aspect-square xl:w-[350px]"
        />

        <div className='space-y-8 xl:space-y-0 xl:flex xl:flex-wrap xl:gap-x-5 xl:gap-y-9'>
          <div className='p-6 border border-fourth-green xl:p-[1.875rem] xl:basis-full'>
            <h5 className='mb-[10px] text-sm text-center xl:text-left xl:mb-4'>Description</h5>
            <p>{ensRecord?.text_records?.description ?? '-'}</p>
          </div>

          <div className='py-6 border border-fourth-green xl:p-[1.875rem] xl:flex-1'>
            <h5 className='mb-[10px] text-sm text-center xl:text-left xl:mb-4'>Social Media</h5>
            <div className='flex justify-center items-center gap-7'>
              <Link href={`https://zora.co/@${creator.user_profile.username}`} target='_blank'>
                <Image src='/icons/zora-orb.png' alt='zora-orb' width={40} height={40} />
              </Link>
              {ensRecord?.text_records?.twitter && (
                <Link href={ensRecord.text_records.twitter} target='_blank'>
                  <Image src='/icons/x-bg.png' alt='x' width={40} height={40} />
                </Link>
              )}
              <Link href={`https://warpcast.com/${creator.user_profile.username}`} target='_blank'>
                <Image src='/warpcast.png' alt='warpcast' width={40} height={40} />
              </Link>
            </div>
          </div>

          <div className='p-[1.875rem] border border-fourth-green hidden xl:block xl:flex-1'>
            <h5 className='mb-[10px] text-sm text-center xl:text-left xl:mb-4'>Address</h5>
            <CopyButton text={address} className='w-full text-[9px]/4 uppercase md:text-sm/5' />
          </div>
        </div>

      </div>

      <AllCreatorsButton className='xl:hidden' />
    </div>
  )
};

export default CreatorDetails;