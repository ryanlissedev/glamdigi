import DarkModeButton from './components/DarkModeButton';

export default function Home() {


  return (
    <section>
      <h1 className="animate-[slide-down-fade_1.5s_ease-in-out] p-8 text-center text-5xl  font-bsmnt uppercase">
        Home
      </h1>
      
      <DarkModeButton />
    </section>
  );
}