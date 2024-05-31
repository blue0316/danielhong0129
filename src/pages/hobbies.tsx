import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import hobbies from '@/data/hobbies.data.json';

import HobbyCard from '@/components/pages/hobbies/hobby-card/hobby-card.component';

import styles from '@/styles/hobbies.module.scss';

const Hobbies: NextPage = () =>
{

    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Portfolio Hobbies'/>
                <meta name='subject' content='Portfolio Hobbies'/>
                <meta name='description' content='Daniel Hong Hobbies'/>
                <meta name='keywords' content='Daniel Hong, IQ, Quantum, Intelligent, Hobbies'/>
                <meta name='author' content='Daniel Hong'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://danielhong0129.vercel.com/hobbies'/>
                <meta property='og:title' content='Daniel Hong'/>
                <meta property='og:description' content='Daniel Hong Hobbies'/>
                <meta property='og:image' content='https://danielhong0129.vercel.com/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://danielhong0129.vercel.com/hobbies'/>
                <meta property='twitter:title' content='Daniel Hong'/>
                <meta property='twitter:description' content='Daniel Hong Hobbies'/>

                <title>Daniel Hong &mdash; Hobbies</title>
            </Head>

            <section className={styles.hobbies}>
                <h2 className={styles.hobbiesHeading}>Hobbies</h2>

                <div className={styles.hobbiesBoxes}>
                    {
                        hobbies.map(hobby =>
                        {
                            return (
                                <HobbyCard
                                    key={hobby.id}
                                    src={hobby.src}
                                    title={hobby.title}
                                    description={hobby.description}
                                    width={hobby.width}
                                    height={hobby.height}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};

export default Hobbies;
