'use client'
import React from 'react'
import { useReferralStore } from '@/store/referral'
export default function ReferralPanel(){
  const { points, invites, addInvite } = useReferralStore()
  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold">Referral</h3>
      <p>Points: {points}</p>
      <button onClick={()=>addInvite('friend-'+Date.now())} className="mt-2 px-3 py-1 bg-green-600 text-white rounded">Invite</button>
      <ul>{invites.map(i=><li key={i}>{i}</li>)}</ul>
    </div>
  )
}
