import {
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconCopyright,
} from '@tabler/icons-react'

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between mx-48 my-18 gap-4">
      <span className="flex items-center text-neutral-700 dark:text-neutral-400">
        <IconCopyright stroke={1.25} size={18} className="mr-1.5" /> 2025
        JeongHoon Lim, All rights reserved.
      </span>
      <div className="flex gap-4 text-neutral-700 dark:text-neutral-400">
        <a
          href="https://github.com/hoony6134"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub stroke={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/hoony6134/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin stroke={1.5} />
        </a>
        <a
          href="https://open.spotify.com/artist/73DiCrbvla9WAvdUvwuznm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandSpotify stroke={1.5} />
        </a>
        <a
          href="mailto:admin@scian.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconAt stroke={1.5} />
        </a>
      </div>
      <span className="text-xs text-neutral-500">
        Made with ❤️ using React. You can{' '}
        <a
          href="https://github.com/hoony6134/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Source
        </a>{' '}
        on GitHub.
      </span>
    </div>
  )
}
