import { useEffect, useRef } from 'react';

// Contador global de modales que solicitan scroll lock
let lockCount = 0;

const useScrollLock = (isLocked: boolean) => {
    const wasLocked = useRef(false);

    useEffect(() => {
        if (isLocked && !wasLocked.current) {
            lockCount++;
            wasLocked.current = true;
            if (lockCount === 1) {
                document.body.style.overflow = 'hidden';
            }
        } else if (!isLocked && wasLocked.current) {
            lockCount = Math.max(0, lockCount - 1);
            wasLocked.current = false;
            if (lockCount === 0) {
                document.body.style.overflow = '';
            }
        }

        return () => {
            // Cleanup al desmontar: liberar el lock si estaba activo
            if (wasLocked.current) {
                lockCount = Math.max(0, lockCount - 1);
                wasLocked.current = false;
                if (lockCount === 0) {
                    document.body.style.overflow = '';
                }
            }
        };
    }, [isLocked]);
};

export default useScrollLock;
