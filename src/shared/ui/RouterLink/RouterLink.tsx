import { IChildrenProp } from 'app/types/reactChildren'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames'

interface IRouterLink extends LinkProps, IChildrenProp {
  className?: string
}

const RouterLink: FC<IRouterLink> = ({
  to, className, children, ...other
}) => (
  <Link to={to} className={classNames(className)} {...other}>
    {children}
  </Link>
)

export default RouterLink
