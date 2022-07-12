import { useEffect, useRef, useState } from "react";

/**
 * @param btnRef btn ref 对象
 * @returns wave列表与生成wave的方法
 */
export function useWaves(btnRef: React.RefObject<HTMLButtonElement>) {
  // 存储wave的数组
  const [waveList, setwaveList] = useState<
    { top: number; left: number; key: number; size: number }[]
  >([]);

  // 定时删除wave
  const timer = useRef<NodeJS.Timeout>();

  // 防抖
  useEffect(() => {
    if (waveList.length !== 0) {
      const timeOut = setTimeout(() => {
        setwaveList([]);
      }, 500);
      if (!timer.current) {
        timer.current = timeOut;
      } else {
        clearTimeout(timer.current);
        timer.current = timeOut;
      }
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, [waveList]);

  // wave生成
  function getClickPos(e: React.MouseEvent) {
    let x = e.clientX;
    let y = e.clientY;
    const rect = btnRef.current?.getBoundingClientRect();
    const size = btnRef.current ? Math.max(btnRef.current.clientHeight, btnRef.current.clientWidth) : 0
    if (rect) {
      const absLeft = x - rect.left;
      const absTop = y - rect.top;
      const wave = { left: absLeft, top: absTop, key: Date.now(), size }; // wave定位
      setwaveList([...waveList, wave]);
    }
  }

  return { waveList, getClickPos };
}