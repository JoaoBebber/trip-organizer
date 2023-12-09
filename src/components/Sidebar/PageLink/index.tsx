'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@phosphor-icons/react'

import styles from './styles.module.css'

interface PageLinkProps {
  path: string
  name: string
  icon: Icon
}

export default function PageLink({ path, name, icon }: PageLinkProps) {
  const pathname = usePathname()

  const Img = icon

  const activeClassName = styles.item + ' ' + styles.activePage

  return (
    <li className={pathname === path ? activeClassName : styles.item}>
      <Link href={path}>
        <Img size={32} />
        <span>{name}</span>
      </Link>
    </li>
  )
}
