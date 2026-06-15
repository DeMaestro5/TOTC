import Avatar from './components/UI/Avatar';
import Badge from './components/UI/Badge';
import Button from './components/UI/Button';
import Rating from './components/UI/Rating';

function App() {
  return (
    <>
      <div className='p-10 flex flex-col gap-6'>
        {/* Variants */}
        <div className='flex gap-4 items-center'>
          <Button variant='primary'>Join for free</Button>
          <Button variant='secondary'>Sign Up</Button>
          <Button variant='outline'>Learn More</Button>
          <Button variant='white'>Watch how it works</Button>
        </div>

        {/* Sizes */}
        <div className='flex gap-4 items-end'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>

        {/* States */}
        <div className='flex gap-4 items-center'>
          <Button isLoading>Loading...</Button>
          <Button disabled>Disabled</Button>
        </div>

        {/* With icons */}
        <div className='flex gap-4 items-center'>
          <Button rightIcon={<span>▶</span>}>Watch how it works</Button>
          <Button variant='outline' leftIcon={<span>+</span>}>
            Add Course
          </Button>
        </div>
      </div>

      <div className='p-10 flex gap-4 flex-wrap'>
        <Badge variant='primary'>News</Badge>
        <Badge variant='secondary'>Design</Badge>
        <Badge variant='accent'>Popular</Badge>
        <Badge variant='orange'>Business</Badge>
        <Badge variant='navy'>Premium</Badge>
        <Badge variant='pink'>Live</Badge>
      </div>

      <div className='p-10 flex gap-4 flex-wrap'>
        <Avatar alt={'test'} size={'sm'} initials='TS' />
        <Avatar alt={'test'} size={'md'} initials='TS' />
        <Avatar alt={'test'} size={'lg'} initials='TS' />
      </div>

      <div className='p-10 flex gap-4 flex-wrap'>
        <Rating rating={3} maxStars={5} showCount={true} />
      </div>
    </>
  );
}

export default App;
