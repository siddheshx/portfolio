import React, { FunctionComponent } from 'react'
import { Category } from '../types'

export const NavItem: FunctionComponent<{ value: Category | 'all', handlerFilterCateogry: Function, active: string }> = ({
    value,
    handlerFilterCateogry,
    active
}) => {

    let clasName = "capitalize cursor-pointer hover:text-green";
    if (active === value) {
        clasName += " text-green";
    }

    return (
        <li 
            onClick={() => handlerFilterCateogry(value)} 
            className={clasName}
        >
            {value}
        </li>
    )
}


const ProjectsNavbar: FunctionComponent<{handlerFilterCateogry: Function, active: string}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} /> 
            <NavItem value="nestjs" {...props} /> 
            <NavItem value="express" {...props} />
            <NavItem value="mongo" {...props} />
            <NavItem value="nextjs" {...props} />
        </div>
    )
}

export default ProjectsNavbar
