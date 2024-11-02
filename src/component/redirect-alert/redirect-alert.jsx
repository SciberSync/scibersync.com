"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function RedirectAlert(props) {
    const router = useRouter();

    useEffect(() => {
        router.push(props.link);
    }, []);
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h4>Taking you to {props.label}</h4></div>
  )
}

export default RedirectAlert