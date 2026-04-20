/**
 * @módulo SocialFloat
 * @descripción Botones flotantes de acceso rápido a las redes sociales del proyecto.
 * @arquitectura src/components/social-float/index.tsx
 */

import styles from './SocialFloat.module.css';

const SocialFloat = () => {
    return (
        <div className={styles['contenedor-social-fixed']}>
            <div className={styles['social-item']}>
                <a href="https://www.facebook.com/qr?id=61561227159190" target="_blank" rel="noopener noreferrer">
                    <img src="/static/redes-sociales/facebook.svg" alt="facebook" />
                </a>
            </div>
            <div className={styles['social-item']}>
                <a href="https://www.instagram.com/cortometraje_yuredo?utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <img src="/static/redes-sociales/instagram.svg" alt="instagram" />
                </a>
            </div>
            <div className={styles['social-item']}>
                <a href="https://www.tiktok.com/@yuredocortometraje?_t=8pOJNhytfpW&_r=1" target="_blank" rel="noopener noreferrer">
                    <img src="/static/redes-sociales/tiktok.svg" alt="tiktok" />
                </a>
            </div>
            <div className={styles['social-item']}>
                <a href="https://youtube.com/@cortometrajeyuredo?si=_1ToUwIKw8ZSSfVf&cxqr=t4ylk6KvHXAMol17MkgXwQ" target="_blank" rel="noopener noreferrer">
                    <img src="/static/redes-sociales/youtube.svg" alt="youtube" />
                </a>
            </div>
        </div>
    );
};

export default SocialFloat;
