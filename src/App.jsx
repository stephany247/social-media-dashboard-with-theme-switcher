import { useEffect, useState } from "react";
import "./App.css";
import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
import youtubeIcon from "./assets/images/icon-youtube.svg";
import upIcon from "./assets/images/icon-up.svg";
import downIcon from "./assets/images/icon-down.svg";

function App() {
  const socialStats = [
    {
      username: "@nathanf",
      icon: facebookIcon,
      followers: 1987,
      platform: "Followers",
      todayChange: 12,
      borderColor: "border-primary-facebook",
      direction: upIcon,
    },
    {
      username: "@nathanf",
      icon: twitterIcon,
      followers: 1044,
      platform: "Followers",
      todayChange: 99,
      borderColor: "border-primary-twitter",
      direction: upIcon,
    },
    {
      username: "@realnathanf",
      icon: instagramIcon,
      followers: "11k",
      platform: "Followers",
      todayChange: 1099,
      borderColor: "instagram-border",
      direction: upIcon,
    },
    {
      username: "Nathan F.",
      icon: youtubeIcon,
      followers: 8239,
      platform: "Subscribers",
      todayChange: 144,
      borderColor: "border-primary-youtube",
      direction: downIcon,
    },
  ];

  const engagementStats = [
    {
      metric: "Page Views",
      count: 87,
      change: "3%",
      icon: facebookIcon,
      direction: upIcon,
    },
    {
      metric: "Likes",
      count: 52,
      change: "2%",
      icon: facebookIcon,
      direction: downIcon,
    },
    {
      metric: "Likes",
      count: 5462,
      change: "2257%",
      icon: instagramIcon,
      direction: upIcon,
    },
    {
      metric: "Profile Views",
      count: "52k",
      change: "1375%",
      icon: instagramIcon,
      direction: upIcon,
    },
    {
      metric: "Retweets",
      count: 117,
      change: "303%",
      icon: twitterIcon,
      direction: upIcon,
    },
    {
      metric: "Likes",
      count: 507,
      change: "553%",
      icon: twitterIcon,
      direction: upIcon,
    },
    {
      metric: "Likes",
      count: 107,
      change: "19%",
      icon: youtubeIcon,
      direction: downIcon,
    },
    {
      metric: "Total Views",
      count: 1407,
      change: "12%",
      icon: youtubeIcon,
      direction: downIcon,
    },
  ];

  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full mx-auto max-w-screen-xl">
        <div className="grid sm:grid-cols-2 w-full">
          <div className="text-left border-b border-dark-text sm:border-none py-4">
            <h1 className="text-text-white text-2xl">Social Media Dashboard</h1>
            <p className="">Total Followers: 23,004</p>
          </div>
          <div className="flex items-center justify-between sm:justify-end sm:gap-2 mt-4 mb-8 sm:m-0 w-full">
            <p>Dark Mode</p>
            <label className="flexitems-center justify-center gap-1 cursor-pointer text-xs">
              <button
                aria-pressed={isDark}
                onClick={() => setIsDark(!isDark)}
                className="w-10 h-6 rounded-full place-self-center bg-gradient-to-r from-toggle-from to-toggle-to hover:bg-primary-soft-cyan relative transition-all duration-300 ease-in-out"
              >
                <div
                  className={`w-4 h-4 bg-background rounded-full absolute top-1 transition-all ${
                    isDark ? "right-1" : "left-1"
                  }`}
                ></div>
              </button>
            </label>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:my-8 gap-8 w-full">
          {socialStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-card-bg flex flex-col items-center justify-center sm:justify-start gap-6 rounded-lg p-8 ${stat.borderColor} border-t-4`}
            >
              <div className="flex items-center justify-center gap-2">
                <img
                  src={stat.icon}
                  alt={`${stat.platform} icon`}
                  className="size-full"
                />
                <p className="font-semibold text-nowrap">{stat.username}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold text-text-white">
                  {stat.followers}
                </h1>
                <p className="uppercase tracking-widest font-light">
                  {stat.platform}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={stat.direction} className="w-3"></img>
                <p
                  className={`font-semibold ${
                    stat.direction === upIcon
                      ? "text-primary-lime-green"
                      : "text-primary-bright-red"
                  }`}
                >
                  {stat.todayChange} Today
                </p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-text-white text-2xl text-left font-bold mt-16 mb-8 w-full">
          Overview - Today
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 w-full">
          {engagementStats.map((stats, index) => (
            <div
              key={index}
              className="bg-card-bg flex flex-col items-center justify-center sm:justify-start gap-6 rounded-lg p-6"
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold">{stats.metric}</p>
                <img src={stats.icon}></img>
              </div>
              <div className="flex items-center justify-between w-full">
                <h1 className="text-3xl font-bold text-text-white">
                  {stats.count}
                </h1>
                <div className="flex items-center gap-1">
                  <img
                    src={stats.direction}
                    alt="icon"
                    className="size-2"
                  ></img>
                  <p
                    className={`font-semibold ${
                      stats.direction === upIcon
                        ? "text-primary-lime-green"
                        : "text-primary-bright-red"
                    }`}
                  >
                    {stats.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-primary-lime-green"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-primary-facebook">
          Onyinye Oguocha
        </a>
        .
      </footer>
    </>
  );
}

export default App;
