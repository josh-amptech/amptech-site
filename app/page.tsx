import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Guide from "@/components/sections/Guide";
import Plan from "@/components/sections/Plan";
import SocialProof from "@/components/sections/SocialProof";
import Success from "@/components/sections/Success";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Guide />
      <Plan />
      <SocialProof />
      <Success />
      <ClosingCTA />
    </main>
  );
}
