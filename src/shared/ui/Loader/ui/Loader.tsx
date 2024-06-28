import { FC } from 'react'
import classes from './Loader.module.scss'

const Loader: FC = () => {
  return <span className={classes.loader}></span>
}

export { Loader }
