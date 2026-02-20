import styles from './SocialFloat.module.css';

const SocialFloat = () => {
    return (
        <div className={styles['contenedor-social-fixed']}>
            <div className={styles['social-item']}>
                <a href="https://www.facebook.com/qr?id=61561227159190" target="_blank" rel="noopener noreferrer">
                    <img src="/static/redes_sociales/face.svg" alt="facebook" />
                </a>
            </div>
            <div className={styles['social-item']}>
                <a href="https://www.instagram.com/cortometraje_yuredo?utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <img src="/static/redes_sociales/instagram.svg" alt="instagram" />
                </a>
            </div>
            <div className={styles['social-item']}>
                <a href="https://www.tiktok.com/@yuredocortometraje?_t=8pOJNhytfpW&_r=1" target="_blank" rel="noopener noreferrer">
                    <img src="/static/redes_sociales/tictok.svg" alt="tictok" />
                </a>
            </div>
            <div className={styles['social-item']}>
                <a href="https://youtube.com/@cortometrajeyuredo?si=_1ToUwIKw8ZSSfVf&cxqr=t4ylk6KvHXAMol17MkgXwQ" target="_blank" rel="noopener noreferrer">
                    <img src="/static/redes_sociales/youtube.svg" alt="youtube" />
                </a>
            </div>
        </div>
    );
};

export default SocialFloat;
