import React from 'react';
import SocialButton from '@/component/social-button/social-button';

const LOGO_URL = 'https://imgur.com/onh9SOw.jpeg';

function HomePage() {
    const socials = [
        {
            id: 'instagram',
            link: 'https://instagram.com/scibersync'
        },
        {
            id: 'x',
            link: 'https://x.com/scibersync'
        },
        {
            id: 'facebook',
            link: 'https://facebook.com/scibersync',
        },
        {
            id: 'blog',
            link: 'https://blog.scibersync.com'
        },
        {
            id: 'email',
            link: 'mailto:hello@scibersync.com'
        }
    ]
  return (
    <div>
        <div>
            <h4>SciberSync</h4>
        </div>
        <div>
            <img src={LOGO_URL} style={{height: 300, width: 300, borderRadius: '50%'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '0.3rem'}}>
                {socials.map((social, index)=>{
                    return (
                        <SocialButton key={`${social.id}${index}`} id={social.id} link={social.link} />
                    )
                })}
        </div>
    </div>
  )
}

export default HomePage
