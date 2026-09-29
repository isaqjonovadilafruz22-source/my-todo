"use client";
import {
  Menu,
  Moon,
  Sun,
  ListTodo,
  Settings,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#333] dark:bg-[#101828] dark:text-white">
      <div className="bg-[#F3F4F6] text-[#333] dark:bg-[#101828] dark:text-white">
        <header className="relative min-h-screen">
          <aside className="absolute left-0 top-0 flex h-screen w-16 flex-col items-center border-r border-[#ddd] bg-white dark:border-[#374151] dark:bg-[#1F2937]">
            <button className="flex h-14 w-full items-center justify-center border-b border-[#ddd]">
              <Menu size={22} />
            </button>

            <button className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3F4F6] dark:bg-[#374151]">
              <ListTodo size={20} />
            </button>

            <button className="mt-2 flex h-10 w-10 items-center justify-center">
              <Settings size={20} />
            </button>
          </aside>

          <main className="ml-16 min-h-screen">
            <div className="relative flex h-[80px] items-center justify-center">
              <h1 className="font-[Lato] text-[30px] font-bold">My Tasks</h1>
            </div>

            <div className="flex justify-center gap-5">
              <input
                type="text"
                placeholder="Type your task here..."
                className="
                h-12
                w-[450px]
                rounded-[7px]
                border
                border-[#ddd]
                bg-white
                px-4
                text-[12px]
                outline-0

                dark:border-[#374151]
                dark:bg-[#4A5565]
                dark:text-white
                dark:placeholder:text-[#A9A9A9]
              "
              />

              <button
                className="
                flex
                h-12
                items-center
                gap-1
                rounded-xl
                bg-black
                px-5
                text-white

                dark:bg-[#4A5565]
                dark:text-[#A9A9A9]
              "
              >
                <Plus size={24} />
                Add
              </button>
            </div>

            <div className="absolute left-[284px] top-[150px] flex items-center bg-[#F3F4F6] dark:bg-[#101828]">
              <img
                src="/selfie .jpg"
                alt="Selfie"
                className="h-[450px] w-[550px] object-contain mix-blend-multiply"
              />

              <div className="ml-[-20px]">
                <h1 className="font-[Lato] text-[18px] font-normal italic leading-tight dark:text-white">
                  Empty as my motivation on Monday😅.
                  <br />
                  Let's start adding stuff!
                </h1>
              </div>
            </div>
          </main>
        </header>

        <main className="relative min-h-screen border-t border-[#ddd] bg-[#F3F4F6] text-[#333] dark:border-[#374151] dark:bg-[#101828] dark:text-white ">
          <aside className="absolute left-0 top-0 flex h-full w-[180px] flex-col border-r border-[#ddd] bg-white dark:border-[#374151] dark:bg-[#1F2937]">
            <button className="flex h-14 w-full items-center px-5">
              <Menu size={22} />
            </button>

            <div className="flex flex-col items-center border-b border-[#ddd] pb-5 dark:border-[#374151]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-300 text-xl">
                <img src="/avatar.jpg" alt="Avatar" />
              </div>

              <p className="mt-2 text-[20px] font-bold">Jane Doe</p>

              <p className="text-[12px] text-[#999]">janedoe@gmail.com</p>
            </div>

            <button className="mx-2 mt-4 flex h-12 items-center gap-3 rounded-lg bg-[#F3F4F6] px-3 text-[10px] dark:bg-white dark:text-[#333]">
              <ListTodo size={17} />
              My Tasks
            </button>

            <button className="mx-2 mt-2 flex h-12 items-center gap-3 px-3 text-[10px]">
              <Settings size={20} />
              Settings
            </button>
          </aside>

          <main className="ml-[150px] min-h-screen">
            <div className="relative flex h-[90px] items-center justify-center">
              <h1 className="font-[Lato] text-[30px] font-bold">My Tasks</h1>
            </div>

            <div className="flex justify-center gap-5">
              <input
                type="text"
                placeholder="Type your task here..."
                className="
                h-12
                w-[450px]
                rounded-[7px]
                border
                border-[#ddd]
                bg-white
                px-4
                text-[14px]
                outline-0

                dark:border-[#374151]
                dark:bg-[#4A5565]
                dark:text-white
                dark:placeholder:text-[#A9A9A9]
              "
              />

              <button
                className="
                flex
                h-14
                items-center
                gap-1
                rounded-xl
                bg-black
                px-5
                text-white

                dark:bg-[#4A5565]
                dark:text-[#A9A9A9]
              "
              >
                <Plus size={24} />
                Add
              </button>
            </div>

            <div className="mx-auto mt-7 flex w-[520px] justify-between text-[15px] text-[#999]">
              <div>
                <span className="text-[#333] dark:text-white">All</span>
                {" | "}
                Active
                {" | "}
                Completed
              </div>

              <span>2 tasks left</span>
            </div>

            <div className="mx-auto mt-3 flex h-[50px] w-[520px] items-center justify-between rounded-[7px] border border-[#ddd] bg-white px-4 dark:border-[#374151] dark:bg-[#1F2937]">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="h-4 w-4" />

                <span className="text-[14px]">Learn React</span>
              </div>

              <div className="flex items-center gap-4">
                <Pencil size={15} />

                <Trash2 size={15} />
              </div>
            </div>

            <div className="mx-auto mt-3 flex h-[50px] w-[520px] items-center justify-between rounded-[7px] border border-[#ddd] bg-white px-4 dark:border-[#374151] dark:bg-[#1F2937]">
              <div className="flex items-center gap-4">
                <input type="checkbox" defaultChecked className="h-4 w-4" />

                <span className="text-[14px] text-[#999] line-through">
                  Prototyping To-Do List
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Pencil size={15} />

                <Trash2 size={15} />
              </div>
            </div>

            <div className="mx-auto mt-3 flex h-[50px] w-[520px] items-center justify-between rounded-[7px] border border-[#ddd] bg-white px-4 dark:border-[#374151] dark:bg-[#1F2937]">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="h-4 w-4" />

                <span className="text-[14px]">Push to Github</span>
              </div>

              <div className="flex items-center gap-4">
                <Pencil size={15} />

                <Trash2 size={15} />
              </div>
            </div>
          </main>
        </main>
      </div>
    </div>
  );
}
