import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Connect, Collaborate,{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">Grow Together</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Join professionals worldwide to discover opportunities, find perfect partners, and access resources to scale your business.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#register"
            className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:outline-blue-600"
          >
            Get started
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#learn-more"
            className="group inline-flex ring-1 ring-slate-200 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}