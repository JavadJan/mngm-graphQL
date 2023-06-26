import React from 'react'
import { FaEnvelope, FaIdBadge, FaPhone } from 'react-icons/fa'

export const ClientInfo = ({client}) => {
  return (
    <>
    <h4 className='mt-4'>Client Information</h4>
    {client && <ul className='non-style'>
        <li>
            <FaIdBadge/>: {client.name}
        </li>
        <li>
            <FaEnvelope/>: {client.email}
        </li>
        <li>
            <FaPhone/>: {client.phone}
        </li>
    </ul>}
    </>
  )
}
