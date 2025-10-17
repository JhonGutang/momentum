"use client";

import * as React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900">
      {/* AppBar */}
      <header className="sticky top-0 z-10 w-full bg-zinc-900 text-white shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="text-xl font-bold tracking-tight">Momentum</div>
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition text-sm font-semibold"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-4">
        <section className="w-full max-w-2xl flex flex-col items-center text-center py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Welcome to Momentum
          </h1>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200 mb-8">
            A modern starter app powered by Next.js and shadcn/ui.
          </p>
          <a
            href="#"
            className="mb-4 inline-block text-base px-8 py-3 font-semibold rounded-full bg-zinc-900 text-white shadow hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition"
          >
            Get Started
          </a>
          <div className="mt-4 flex flex-row gap-3 justify-center">
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener"
              className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white underline transition"
            >
              shadcn/ui Docs
            </a>
            <span className="text-zinc-300 dark:text-zinc-700 px-1 select-none">|</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener"
              className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white underline transition"
            >
              Next.js Docs
            </a>
            <span className="text-zinc-300 dark:text-zinc-700 px-1 select-none">|</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener"
              className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white underline transition"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-zinc-100 dark:bg-zinc-800 text-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          © {new Date().getFullYear()} Momentum. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
