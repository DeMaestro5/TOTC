import Button from './Button';
import Logo from './logo';

export default function Footer() {
  return (
    <section className='bg-navy text-white w-full h-85 flex flex-col justify-center items-center'>
      <div className='flex justify-between items-center w-fit gap-6 pb-12'>
        <Logo transparent={true} />
        <div className='bg-white/20 h-10 w-[1px] self-center' />
        <p className='font-bold text-base leading-tight'>
          Virtual Class <br /> for Zoom
        </p>
      </div>
      <p className='text-lavender-gray font-semibold tracking-widest pb-4'>
        Subscribe to get our Newsteller
      </p>
      <div className='flex gap-4 w-[480px]'>
        <input
          placeholder='Your Email'
          className='rounded-full w-full h-12 border border-white/20 bg-transparent px-6 text-white placeholder:text-white/40 outline-none'
        />
        <Button variant='primary' size='md'>
          Subscribe
        </Button>
      </div>
      <div className='flex justify-between items-center gap-4 pt-10 pb-3'>
        <p className='text-lavender-gray hover:underline cursor-pointer'>
          Careers
        </p>
        <div className='bg-white/30 h-4 w-[1px] self-center' />
        <p className='text-lavender-gray hover:underline cursor-pointer'>
          Privacy Policy
        </p>
        <div className='bg-white/30 h-4 w-[1px] self-center' />
        <p className='text-lavender-gray hover:underline cursor-pointer'>
          Terms and Conditions
        </p>
      </div>
      <p className='text-lavender-gray'>© 2026 Class Technologies inc.</p>
    </section>
  );
}
