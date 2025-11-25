'use client';
import { useRouter } from  'next/navigation';

export default function About() {
  const router = useRouter();

  const handleClick = ()=> {
    router.push('/')
  };
  
  return (
    <div>
      <h1>What is what we call mind, anyway?</h1>
      <p>Here we are going to resume the key elements to 'build a mind'. An easy-to-define concept,
        don't you think?
      </p>
      <button onClick={handleClick}>Go back</button>

    </div>
  );
}