"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import ActivityCard from "@/components/my-components/ActivityCard";
import MissionCard from "@/components/my-components/MissionCard";
import LeaderboardItem from "@/components/my-components/LeaderBoard";
import QuizModal from "@/components/my-components/QuizzModal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NotFoundPlants from "@/components/my-components/NotFoundPlants";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

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

// let missions = [];

const ChallagePage = () => {
  const [missionData, setMissionData] = useState([]);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

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

  const leaderboardData = [
    { name: "Hera", points: 250 },
    { name: "Yudistira", points: 200 },
    { name: "Anggara", points: 150 },
    { name: "Fahirah", points: 90 },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(true);

  const questions = [
    {
      question: "Kunyit memiliki warna khas pada bagian...",
      options: ["Batangnya", "Daunnya", "Rimpangnya", "Bunganya"],
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowModal(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="px-4 md:px-9 py-8 space-y-12 mx-auto max-w-screen-xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/images/assets/win.png"
            alt="Herbal Mascot"
            className="max-w-screen-sm sm:max-w-screen-md h-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-2/3 text-center lg:text-left flex flex-col gap-5 md:gap-10">
          <p className="text-3xl md:text-5xl text-dark-green-shades-15 font-semibold underline decoration-green-shades-70 underline-offset-[14px] md:underline-offset-[20px]">
            Challenges for Fun
          </p>
          <h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-dark-green-shades-15 leading-tight">
            Cari, Temukan, dan Kalahkan Misi Harian!
          </h4>
          <p className="text-lg md:text-xl text-dark-grey-shades-20 mx-auto ">
            Uji pengetahuanmu soal tanaman herbal lewat misi seru dan kumpulkan
            badge eksklusif. Belajar jadi lebih menyenangkan!
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className=" p-4 rounded-md text-white font-medium">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="rounded-b-2xl flex justify-center gap-28 text-dark-grey-shades-99 bg-dark-green-shades-20 py-11">
              <div className="block lg:hidden w-full px-4">
                <Select value={activeTab} onValueChange={setActiveTab}>
                  <SelectTrigger className="w-full bg-white text-black">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="misi-harian">Misi Harian</SelectItem>
                    <SelectItem value="misi-eksklusif">
                      Misi Eksklusif
                    </SelectItem>
                    <SelectItem value="misi-selesai">Misi Selesai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="hidden lg:px-14 xl:px-20 lg:w-full lg:flex lg:justify-between">
                {tabChallage.map((tab, index) => (
                  <TabsTrigger
                    key={index}
                    value={tab.name}
                    className={`text-dark-grey-shades-90 data-[state=active]:border-dark-green-shades-30 data-[state=active]:border data-[state=active]:bg-dark-green-shades-25 data-[state=active]:text-white ${
                      tab.name === "all" && "px-10"
                    }`}
                  >
                    {tab.value}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="space-y-4 mt-8">
              {allMissions.length > 0 ? (
                allMissions.map((mission, index) => (
                  <MissionCard
                    key={index}
                    title={mission.title}
                    current={mission.current}
                    total={mission.total}
                  />
                ))
              ) : (
                <NotFoundPlants>
                  <p className="w-full text-center font-medium italic text-gray-500 mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-lg md:text-lg lg:text-xl">
                    Belum ada misi tersedia. Yuk mulai jelajahi tanaman herbal!
                    🌱
                  </p>
                </NotFoundPlants>
              )}
            </div>
          </TabsContent>

          <TabsContent value="misi-harian">
            <div className="space-y-4 mt-8">
              {dailyMissions.length > 0 ? (
                dailyMissions.map((mission, index) => (
                  <MissionCard
                    key={index}
                    title={mission.title}
                    current={mission.current}
                    total={mission.total}
                  />
                ))
              ) : (
                <NotFoundPlants>
                  <p className="w-full text-center font-medium italic text-gray-500 mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-lg md:text-lg lg:text-xl">
                    Tidak ada misi harian saat ini. Coba lagi besok, ya! 🌿
                  </p>
                </NotFoundPlants>
              )}
            </div>
          </TabsContent>

          <TabsContent value="misi-eksklusif">
            <div className="space-y-4 mt-8">
              {exclusiveMissions.length > 0 ? (
                exclusiveMissions.map((mission, index) => (
                  <MissionCard
                    key={index}
                    title={mission.title}
                    current={mission.current}
                    total={mission.total}
                  />
                ))
              ) : (
                <NotFoundPlants>
                  <p className="w-full text-center font-medium italic text-gray-500 mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-lg md:text-lg lg:text-xl">
                    Misi eksklusif belum tersedia. Tetap semangat dan cek
                    kembali nanti! 🌟
                  </p>
                </NotFoundPlants>
              )}
            </div>
          </TabsContent>

          <TabsContent value="misi-selesai">
            <div className="space-y-4 mt-8">
              {completedMissions.length > 0 ? (
                completedMissions.map((mission, index) => (
                  <MissionCard
                    key={index}
                    title={mission.title}
                    current={mission.current}
                    total={mission.total}
                  />
                ))
              ) : (
                <NotFoundPlants>
                  <p className="w-full text-center font-medium italic text-gray-500 mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-lg md:text-lg lg:text-xl">
                    Kamu belum menyelesaikan misi apapun. Ayo mulai tantangan
                    pertamamu! 🏁
                  </p>
                </NotFoundPlants>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Activities */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-10">
        Quiz Time
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((item, index) => (
          <ActivityCard
            key={index}
            title={item.title}
            image={item.image}
            alt={item.alt}
            heading={item.heading}
            description={item.description}
            points={item.points}
            actionText={item.actionText}
          />
        ))}
      </div>

      {/* Leaderboard */}
      <div className="bg-green-shades-95 border border-green-shades-90 p-6 rounded-lg shadow-sm flex flex-col gap-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-dark-grey-shades-15">
            Leaderboard
          </h2>
          <p className="text-lg text-dark-grey-shades-30">
            Peringkat Teratas Bulan ini
          </p>
        </div>

        <div className="bg-dark-green-shades-20 text-white md:text-lg p-4 rounded-lg">
          Selamat kepada para <em>Herb Heroes</em> bulan ini! Terus semangat
          belajar dan kumpulkan lebih banyak poin untuk jadi yang terbaik!
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-green-shades-80 rounded overflow-hidden text-sm">
            <tbody>
              {leaderboardData.map((user, index) => (
                <LeaderboardItem
                  key={index}
                  rank={index + 1}
                  name={user.name}
                  points={user.points}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {/* {showModal && (
        <QuizModal
          questionNumber={currentQuestion + 1}
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onClose={() => setShowModal(false)}
        />
      )} */}
    </div>
  );
};

export default ChallagePage;
