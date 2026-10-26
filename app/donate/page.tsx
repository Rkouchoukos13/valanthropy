import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate | VAlanthropy",
  description: "Explore ways to support VAlanthropy.",
};

const givingOptions = [
  {
    number: "01",
    title: "Give through NCF",
    description:
      "Learn about giving through the National Christian Foundation.",
    href: "#ncf",
    action: "Explore NCF giving",
  },
  {
    number: "02",
    title: "Major gifts",
    description:
      "Help support VAlanthropy’s work with a significant contribution.",
    href: "#major-gifts",
    action: "Explore major gifts",
  },
  {
    number: "03",
    title: "Stock transfers",
    description:
      "Explore contributing stock as another way to support our mission.",
    href: "#stock-transfers",
    action: "Explore stock giving",
  },
  {
    number: "04",
    title: "Other ways to give",
    description:
      "Find information about additional donation methods.",
    href: "#other-giving",
    action: "Explore other options",
  },
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4"
      >
        Skip to content
      </a>

      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          {/* TODO: Replace this text with the official VAlanthropy logo. */}
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-[#16345c]"
          >
            VAlanthropy<span className="text-[#b52c38]">.</span>
          </Link>

          <nav aria-label="Donation navigation">
            <a
              href="#ways-to-give"
              className="inline-flex rounded-lg bg-[#b52c38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#92232e]"
            >
              Ways to give
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="bg-[#16345c] text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:items-center md:py-28">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Give with purpose
              </p>

              <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                Help move our mission forward.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Your generosity supports VAlanthropy’s work. Explore the
                ways you can give and choose an option that works for you.
              </p>

              <a
                href="#ways-to-give"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#b52c38] px-6 py-4 font-semibold transition hover:bg-[#92232e]"
              >
                Explore giving options
                <ArrowDown aria-hidden="true" size={18} />
              </a>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10">
              <Heart
                aria-hidden="true"
                className="text-red-300"
                size={40}
                strokeWidth={1.5}
              />
              <h2 className="mt-6 text-2xl font-semibold">
                A meaningful way to help.
              </h2>
              <p className="mt-4 leading-7 text-blue-100">
                From major gifts to stock contributions, there are several
                ways to support the mission.
              </p>
            </div>
          </div>
        </section>

        <section
          id="ways-to-give"
          aria-labelledby="giving-heading"
          className="scroll-mt-6 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-sm font-bold uppercase tracking-widest text-[#b52c38]">
              Make a difference
            </p>
            <h2
              id="giving-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[#16345c] md:text-4xl"
            >
              Choose your way to give.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Explore each option below to learn more.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {givingOptions.map((option) => (
                <article
                  key={option.number}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-7"
                >
                  <span className="text-sm font-bold text-[#b52c38]">
                    {option.number}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-[#16345c]">
                    {option.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {option.description}
                  </p>
                  <a
                    href={option.href}
                    className="mt-6 inline-flex items-center gap-2 self-start font-semibold text-[#16345c] underline-offset-4 hover:underline"
                  >
                    {option.action}
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="ncf"
          aria-labelledby="ncf-heading"
          className="mx-auto max-w-6xl scroll-mt-6 px-6 py-16 md:py-20"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#b52c38]">
                National Christian Foundation
              </p>
              <h2
                id="ncf-heading"
                className="mt-3 text-3xl font-bold text-[#16345c]"
              >
                Giving through NCF
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                This section will explain how to support VAlanthropy
                through the National Christian Foundation and provide
                the official giving link.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-7">
              <h3 className="text-lg font-bold text-[#16345c]">
                Giving information
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                VAlanthropy’s NCF giving link and step-by-step
                instructions are awaiting confirmation.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="additional-heading"
          className="border-t border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2
              id="additional-heading"
              className="text-3xl font-bold text-[#16345c]"
            >
              Additional giving information
            </h2>

            <div className="mt-8 divide-y divide-slate-200">
              <details id="major-gifts" className="scroll-mt-6 py-6">
                <summary className="cursor-pointer text-xl font-semibold text-[#16345c]">
                  Major gifts
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Contact details for discussing a major gift will be
                  added once confirmed by VAlanthropy.
                </p>
              </details>

              <details id="stock-transfers" className="scroll-mt-6 py-6">
                <summary className="cursor-pointer text-xl font-semibold text-[#16345c]">
                  Stock transfers
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Verified stock transfer instructions and a contact
                  for assistance will be added here.
                </p>
              </details>

              <details id="other-giving" className="scroll-mt-6 py-6">
                <summary className="cursor-pointer text-xl font-semibold text-[#16345c]">
                  Other donation methods
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Additional accepted donation methods will be listed
                  once confirmed by VAlanthropy.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#16345c] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p className="font-bold">VAlanthropy</p>
          <p className="text-sm text-blue-100">
            Thank you for supporting our mission.
          </p>
        </div>
      </footer>
    </div>
  );
}