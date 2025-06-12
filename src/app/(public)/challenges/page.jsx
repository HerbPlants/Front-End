"use client";

import React, { useState, useEffect } from "react";
import ActivityCard from "@/components/my-components/ActivityCard";
import MissionCard from "@/components/my-components/MissionCard";
import LeaderboardItem from "@/components/my-components/LeaderBoard";
import NotFoundPlants from "@/components/my-components/NotFoundPlants";
import QuizModal from "@/components/my-components/QuizzModal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeRight,
  fadeLeft,
  containerStagger,
} from "@/lib/motionVariants"; // pastikan ini ada
import QuizSoonDialog from "@/components/my-components/QuizSoonDialog";
import SurveySoonDialog from "@/components/my-components/SurveySoonDialog";

const tabChallage = [
  { name: "all", value: "All" },
  { name: "misi-harian", value: "Misi Harian" },
  { name: "misi-eksklusif", value: "Misi Eksklusif" },
  { name: "misi-selesai", value: "Misi Selesai" },
];

const missions = [
  {
    title: "Tambahkan minimal 3 tanaman ke koleksi pribadimu",
    current: 2,
    total: 3,
    type: "daily",
  },
  {
    title: "Temukan 5 tanaman herbal dan identifikasi pakai fitur snap",
    current: 5,
    total: 5,
    type: "daily",
  },
  {
    title: "Baca 10 tanaman baru di halaman Explore",
    current: 10,
    total: 10,
    type: "daily",
  },
  {
    title: "Selesaikan semua misi harian selama 7 hari berturut-turut",
    current: 3,
    total: 7,
    type: "exclusive",
  },
];

const ChallagePage = () => {
  const [missionData, setMissionData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isQuizDialogOpen, setIsQuizDialogOpen] = useState(false);
  const [isSurveyDialogOpen, setIsSurveyDialogOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const fullname = localStorage.getItem("fullName");

    if (token && fullname) {
      setCurrentUser(fullname);
    }

    if (!token) {
      setTimeout(() => {
        toast({
          className: "bg-dark-green-shades-20 text-white border-none",
          title: "Anda belum login",
          description: (
            <h2 className="text-sm">
              Progress misi hanya tersedia untuk user yang sudah login!
            </h2>
          ),
          action: (
            <ToastAction
              className="text-sm hover:bg-green-shades-85 hover:text-dark-green-shades-20 py-4 px-6"
              onClick={() => {
                router.push("/login");
              }}
              altText="Okey"
            >
              Login
            </ToastAction>
          ),
          duration: 3500,
        });
      }, 100);
    }

    const updatedMissions = missions.map((mission) => {
      const current = token ? mission.current : 0;
      return {
        ...mission,
        current,
        completed: current >= mission.total,
      };
    });

    setMissionData(updatedMissions);
  }, []);

  const allMissions = missionData;
  const dailyMissions = missionData.filter(
    (m) => m.type === "daily" && !m.completed
  );
  const exclusiveMissions = missionData.filter(
    (m) => m.type === "exclusive" && !m.completed
  );
  const completedMissions = missionData.filter((m) => m.completed);

  const baseLeaderboard = [
    { name: "Hera", points: 3000, rank: 1 },
    { name: "Yudistira", points: 2700, rank: 2 },
    { name: "Anggara", points: 2600, rank: 3 },
    { name: "Fahirah", points: 2100, rank: 4 },
  ];

  const currentUserEntry = currentUser
    ? { name: currentUser, points: 120, rank: 7, isCurrentUser: true }
    : null;

  const leaderboardData = currentUserEntry
    ? [...baseLeaderboard, currentUserEntry]
    : baseLeaderboard;

  const activities = [
    {
      title: "Quiz Time",
      image: "/images/assets/3tanah.jpg",
      alt: "Herb Quiz",
      points: "10 P",
      actionText: "Mulai",
      heading: "Herb Quiz",
      description:
        "Uji pengetahuanmu tentang tanaman herbal dari bentuk daun hingga manfaatnya dan dapatkan poin",
    },
    {
      title: "Survey Time",
      image: "/images/assets/hutanhujan.jpg",
      alt: "Survey",
      points: "5 P",
      actionText: "Ikuti",
      heading: "Survey Pengalamanmu",
      description:
        "Isi survei singkat ini untuk berbagi pengalamanmu setelah menjelajahi dunia tanaman herbal bla bla bla",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="px-4 md:px-9 py-8 space-y-12 mx-auto max-w-screen-xl">
      {/* Header */}
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row items-center gap-8 md:gap-12"
      >
        <motion.div
          variants={fadeRight}
          className="w-full md:w-1/3 flex justify-center"
        >
          <img
            src="/images/assets/win.png"
            alt="Herbal Mascot"
            className="max-w-screen-sm sm:max-w-screen-md h-auto object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeLeft}
          className="w-full lg:w-2/3 text-center lg:text-left flex flex-col gap-5 md:gap-10"
        >
          <p className="text-3xl md:text-5xl text-dark-green-shades-15 font-semibold underline decoration-green-shades-70 underline-offset-[14px] md:underline-offset-[20px]">
            Challenges for Fun
          </p>
          <h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-dark-green-shades-15 leading-tight">
            Cari, Temukan, dan Kalahkan Misi Harian!
          </h4>
          <p className="text-lg md:text-xl text-dark-grey-shades-20 mx-auto">
            Uji pengetahuanmu soal tanaman herbal lewat misi seru dan kumpulkan
            badge eksklusif. Belajar jadi lebih menyenangkan!
          </p>
        </motion.div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="p-4 rounded-md text-white font-medium"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="rounded-b-2xl flex justify-center gap-28 text-dark-grey-shades-99 bg-dark-green-shades-20 py-11">
              <div className="block lg:hidden w-full px-4">
                <Select value={activeTab} onValueChange={setActiveTab}>
                  <SelectTrigger className="w-full bg-white text-black">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {tabChallage.map((tab) => (
                      <SelectItem key={tab.name} value={tab.name}>
                        {tab.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="hidden lg:flex lg:justify-between lg:w-full lg:px-14 xl:px-20">
                {tabChallage.map((tab) => (
                  <TabsTrigger
                    key={tab.name}
                    value={tab.name}
                    className="text-dark-grey-shades-90 data-[state=active]:border-dark-green-shades-30 data-[state=active]:border data-[state=active]:bg-dark-green-shades-25 data-[state=active]:text-white"
                  >
                    {tab.value}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
          </div>

          {[
            { key: "all", data: allMissions },
            { key: "misi-harian", data: dailyMissions },
            { key: "misi-eksklusif", data: exclusiveMissions },
            { key: "misi-selesai", data: completedMissions, isComplete: true },
          ].map(({ key, data, isComplete }) => (
            <TabsContent key={key} value={key}>
              <motion.div
                variants={containerStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-4 mt-8"
              >
                {data.length > 0 ? (
                  data.map((m, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      <MissionCard
                        title={m.title}
                        current={m.current}
                        total={m.total}
                        isComplete={isComplete || m.completed}
                      />
                    </motion.div>
                  ))
                ) : (
                  <NotFoundPlants>
                    <p className="text-center italic text-gray-500 text-lg mt-8">
                      {key === "misi-selesai"
                        ? "Kamu belum menyelesaikan misi apapun. Ayo mulai sekarang! 🏁"
                        : key === "misi-harian"
                        ? "Tidak ada misi harian saat ini. Coba lagi besok ya! 🌿"
                        : key === "misi-eksklusif"
                        ? "Misi eksklusif belum tersedia. Tetap semangat! 🌟"
                        : "Belum ada misi tersedia. Yuk mulai jelajahi tanaman herbal! 🌱"}
                    </p>
                  </NotFoundPlants>
                )}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>

      {/* Activities */}
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-10"
        >
          Quiz Time
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <ActivityCard
                {...item}
                onActionClick={() => {
                  if (item.title === "Quiz Time") {
                    setIsQuizDialogOpen(true);
                  } else {
                    setIsSurveyDialogOpen(true);
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leaderboard */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-green-shades-95 border border-green-shades-90 p-6 rounded-lg shadow-sm flex flex-col gap-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-dark-grey-shades-15">
            Leaderboard
          </h2>
          <p className="text-lg text-dark-grey-shades-30">
            Peringkat Teratas Bulan Ini
          </p>
        </div>
        <div className="bg-dark-green-shades-20 text-white md:text-lg p-4 rounded-lg">
          Selamat kepada para <em>Herb Heroes</em> bulan ini! Terus semangat
          belajar dan kumpulkan lebih banyak poin!
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-green-shades-80 rounded text-sm">
            <tbody>
              {leaderboardData.map((user, index) => (
                <LeaderboardItem key={index} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <SurveySoonDialog open={isSurveyDialogOpen} onOpenChange={setIsSurveyDialogOpen} />
      <QuizSoonDialog
        open={isQuizDialogOpen}
        onOpenChange={setIsQuizDialogOpen}
      />
    </div>
  );
};

export default ChallagePage;
