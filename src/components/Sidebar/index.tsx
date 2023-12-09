'use client'

import Link from 'next/link'
import { AirplaneTakeoff, Bed, DotsThreeOutline, ForkKnife, MapTrifold, Notebook, Power, ProjectorScreenChart, ShoppingBagOpen, TrainSimple } from '@phosphor-icons/react/dist/ssr'

import Logo from '../Logo'
import PageLink from './PageLink'

import styles from './styles.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <section>
        <header>
          <Link href='/'>
            <Logo />
          </Link>
        </header>

        <ul>
          <PageLink path='/dashboard' name='Dashboard' icon={ProjectorScreenChart} />
          <PageLink path='/aviao' name='Avião' icon={AirplaneTakeoff} />
          <PageLink path='/transporte' name='Transporte' icon={TrainSimple} />
          <PageLink path='/comida' name='Comida' icon={ForkKnife} />
          <PageLink path='/hotel' name='Hotel' icon={Bed} />
          <PageLink path='/passeio' name='Passeio' icon={MapTrifold} />
          <PageLink path='/compras' name='Compras' icon={ShoppingBagOpen} />
          <PageLink path='/outros' name='Outros' icon={DotsThreeOutline} />
          <PageLink path='/resumo' name='Resumo' icon={Notebook} />
        </ul>
      </section>

      <footer>
        <Link href='/' className={styles.signOut}>
          <Power size={32} />
          <span>Sair</span>
        </Link>
      </footer>
    </aside>
  )
}
