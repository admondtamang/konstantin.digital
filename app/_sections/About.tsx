import { Label } from '@/components/Label';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto flex max-w-xl flex-col-reverse items-center gap-8 py-8 md:gap-16 lg:max-w-container lg:flex-row">
        <div>
          <h3 className="font-accent text-3xl font-medium md:text-4xl">
            Hey, I am Admond
          </h3>
          <p className="my-5 text-xl md:text-2xl">
            An engineer - or simply a developer - who loves to build web apps
          </p>
          <p className="my-5 opacity-90">
            Driven by the intersection of product innovation and web
            development. Enjoys engaging with users and developing ideas, all
            while coding to a good lo-fi playlist.🎧
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Label color="gray">4+ years of building web apps</Label>
          </div>
        </div>
        <div className="max-w-[580px] flex-shrink-0 rounded-md">
          <Image
            src="/images/portraits/profile-light.webp"
            alt="Admond Tamang"
            width={480 * 2}
            height={324 * 2}
            sizes="(max-width: 768px) 100vw, 760px"
            className="h-full w-full rounded-md object-cover"
          />
          <span className="mt-2 hidden text-center text-xs opacity-50 md:block">
            Building web apps since high school. Waiting for yours since.
          </span>
        </div>
      </div>
    </div>
  );
};
