import Window from "@/pages/Home/components/window";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="min-h-screen bg-[url(https://placehold.co/600x400)]"
    >
      <Window />
    </motion.div>
  );
}
