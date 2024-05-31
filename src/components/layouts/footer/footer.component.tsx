import { BsGithub } from 'react-icons/bs';

import styles from './footer.module.scss';

const Footer = () =>
{
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <span>© 2021 - { new Date().getFullYear() } UnlimitedPotential LLC</span>
                <a
                    href='https://github.com/blue0316/my-portfolio'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsGithub />
                    {/* Source Code */}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
