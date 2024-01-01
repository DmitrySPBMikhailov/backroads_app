import React from 'react';
import {pageLinks} from '../data';
import PageLink from './PageLink';

const PageLinks = ({parentClass, childClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
        {pageLinks.map((link) => {
        return (
            <PageLink childClass={childClass} link={link} key={link.id} />
        )
        })}
    </ul>
  )
}

export default PageLinks