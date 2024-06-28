import { FC } from 'react'
import { Loader } from 'shared/ui/Loader'
import classes from './PageLoader.module.scss'

const PageLoader: FC = () => {
  return (
    <div className={classes.pageLoader}>
      <Loader />
    </div>
  )
}

export { PageLoader }
