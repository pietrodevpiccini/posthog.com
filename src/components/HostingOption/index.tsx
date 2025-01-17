import React from 'react'
import hostingSprite from './images/sprite-hosting.svg'

interface HostingOptionProps {
    handle: string
    name: string
    url: string
}

export const HostingOption = ({ handle, name, url }: HostingOptionProps) => {
    return (
        <li className="mr-1 mb-2">
            <a
                href={`${url}`}
                className="flex items-center flex-row py-2 px-3 rounded-full whitespace-nowrap border-white border-2 border-solid border-opacity-10 hover:text-white hover:border-opacity-20 hover:bg-orange hover:border-orange"
            >
                <svg className="icon width-[18px] height-[18px] mr-1" style={{ width: '18px', height: '18px' }}>
                    <use href={hostingSprite + '#hosting-' + `${handle}`} />
                </svg>
                <span className="text-white text-xs text-opacity-70 leading-tight">{name}</span>
            </a>
        </li>
    )
}
