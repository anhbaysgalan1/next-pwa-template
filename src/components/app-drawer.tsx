import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  className?: string
}

const links = [
  {
    title: 'Tasks',
    icon: (
      <svg
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
      >
        <path
          d='M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 110-14 7 7 0 010 14z'
          stroke='currentColor'
        />
      </svg>
    ),
    href: '/',
  },
  {
    title: 'Saved',
    icon: (
      <svg
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
      >
        <path
          d='M7.5 13.5l-.354.354a.5.5 0 00.708 0L7.5 13.5zM1.536 7.536l-.354.353.354-.353zm5-5l-.354.353.354-.353zM7.5 3.5l-.354.354a.5.5 0 00.708 0L7.5 3.5zm.964-.964l-.353-.354.353.354zm-.61 10.61L1.889 7.182l-.707.707 5.964 5.965.708-.708zm5.257-5.964l-5.965 5.964.708.708 5.964-5.965-.707-.707zM6.182 2.889l.964.965.708-.708-.965-.964-.707.707zm1.672.965l.964-.965-.707-.707-.965.964.708.708zM10.964 1c-1.07 0-2.096.425-2.853 1.182l.707.707A3.037 3.037 0 0110.964 2V1zM14 5.036c0 .805-.32 1.577-.89 2.146l.708.707A4.036 4.036 0 0015 5.036h-1zm1 0A4.036 4.036 0 0010.964 1v1A3.036 3.036 0 0114 5.036h1zM4.036 2c.805 0 1.577.32 2.146.89l.707-.708A4.036 4.036 0 004.036 1v1zM1 5.036A3.036 3.036 0 014.036 2V1A4.036 4.036 0 000 5.036h1zm.89 2.146A3.035 3.035 0 011 5.036H0c0 1.07.425 2.096 1.182 2.853l.707-.707z'
          fill='currentColor'
        />
      </svg>
    ),
    href: '/saved',
  },
  {
    title: 'Notifications',
    icon: (
      <svg
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
      >
        <path
          d='M1 10.5h13m-11.5 0v-5a5 5 0 0110 0v5m-7 1.5v.5a2 2 0 104 0V12'
          stroke='currentColor'
        />
      </svg>
    ),
    href: '/notifications',
  },
]

const AppDrawer = ({ className }: Props) => {
  const { pathname } = useRouter()

  return (
    <div
      className={`${className} mt-20 p-6 w-64 h-full text-fg bg-ui-base border-r fixed left-0 transparent-colors duration-150 ease-in-out`}
    >
      <nav className='space-y-1 w-full flex flex-col'>
        {links.map((link) => (
          <Link href={link.href}>
            <a
              className={`px-3 w-full h-10 leading-none text-sm font-medium rounded-md flex items-center focus:bg-ui-overlay focus:outline-none ${
                pathname === link.href
                  ? 'text-inverse hover:text-inverse bg-primary hover:bg-primary'
                  : 'text-muted hover:text-fg hover:bg-ui-overlay'
              }
            `}
            >
              {link.title}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default AppDrawer
