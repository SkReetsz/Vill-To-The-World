
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Music,
  User,
  Image,
  Mail,
  Play,
  Pause,
  Download,
  Phone,
  Globe
} from "lucide-react";

export default function MusicSite() {
  const [active, setActive] = useState("home");
  const [playing, setPlaying] = useState(false);
  const [fans, setFans] = useState(12847);
  const audioRef = useRef(null);

  const sections = [
    { id: "home", label: "Home", icon: <Music size={18} /> },
    { id: "music", label: "Music", icon: <Music size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "journey", label: "Journey", icon: <Globe size={18} /> },
    { id: "visuals", label: "Visuals", icon: <Image size={18} /> },
    { id: "epk", label: "EPK", icon: <Download size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFans((f) => f + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) audio.pause();
    else audio.play();

    setPlaying(!playing);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-3 left-4 z-50 font-bold">
        VILL <span className="text-green-400">TO THE WORLD</span>
      </div>

      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1 className="text-6xl font-bold">
          VILL TO THE WORLD
        </motion.h1>

        <div className="mt-4">Live Fans: {fans}</div>

        <div className="mt-6">
          <audio ref={audioRef} src="/vill-nigga.mp3" />
          <button onClick={togglePlay} className="px-4 py-2 bg-white text-black rounded-full">
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </section>
    </div>
  );
}
