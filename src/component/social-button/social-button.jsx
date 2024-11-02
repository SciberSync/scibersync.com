"use client"
import React from 'react';

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbListLetters } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLinkSlash } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { IoGlobe } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


function SocialButton(props) {
    const { id, link } = props;
    const router = useRouter();

    const SOCIAL_MAP = {
        ['facebook']: {
            icon: <RiFacebookCircleLine />,
            label: 'Facebook'
        },
        ['instagram']: {
            icon: <FaInstagram />,
            label: 'Instagram'
        },
        ['x']: {
            icon: <FaXTwitter />,
            label: 'X'
        },
        ['linkedin']: {
            icon: <FaLinkedinIn />,
            label: 'LinkedIn'
        },
        ['blog']: {
            icon: <TbListLetters />,
            label: 'Blog'
        },
        ['website']: {
            icon: <IoGlobe />,
            label: 'Website'
        },
        ['email']: {
            icon: <MdEmail />,
            label: 'Email'
        }
    }

    const handleNavigate = () => {
        router.push(link);
    }

    const renderContent = () => {
        let result = <></>;
        if(id) {
            result =
                <div onClick={handleNavigate} style={{border: '1px solid grey', borderRadius: '4px', minWidth: '10rem', padding: '0.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '2.5rem', cursor: 'pointer'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0.5rem'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {SOCIAL_MAP[id]?.icon}
                        </div>
                        <div>
                            <p style={{fontSize: 11, verticalAlign: 'center'}}>{SOCIAL_MAP[id]?.label}</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <FaLinkSlash />
                    </div>
                </div>
        }
        return result;
    }

    return (
        <>
            {renderContent()}
        </>
    )
}

export default SocialButton;