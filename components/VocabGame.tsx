'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, animate, type PanInfo } from 'framer-motion';
import CardVocab from './ui/card-vocab';

export interface VocabWord {
  id: string;
  vocab: string;
  definition: string;
  type: VocabType;
  example?: string;
}

export type SwipeAction = 'remember' | 'forgot';

export default function VocabGame({ words }: { words: VocabWord[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [results, setResults] = useState<{ wordId: string; action: SwipeAction }[]>([]);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const currentCard = words[currentIndex];

  // Xử lý chuyển thẻ khi Click nút hoặc Drag xong
  const handleAction = async (action: SwipeAction) => {
    if (!currentCard) return;

    // Tọa độ lướt: Forgot -> Lướt sang trái (-300px), Remember -> Lướt sang phải (300px)
    const targetX = action === 'remember' ? 300 : -300;

    // Tạo hiệu ứng trượt thẻ bằng animate
    await animate(x, targetX, {
      duration: 0.3,
      ease: 'easeInOut',
    });

    // Lưu kết quả và chuyển từ
    setResults((prev) => [...prev, { wordId: currentCard.id, action }]);
    setCurrentIndex((prev) => prev + 1);

    // Reset lại vị trí x = 0 cho thẻ tiếp theo
    x.set(0);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      handleAction('remember');
    } else if (info.offset.x < -100) {
      handleAction('forgot');
    } else {
      // Vuốt chưa tới ngưỡng thì nảy về vị trí cũ
      animate(x, 0, { duration: 0.2 });
    }
  };

  if (currentIndex >= words.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#07070e] p-4 text-white">
        <div className="bg-[#0b0b16] border border-white/10 p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full">
          <h2 className="text-2xl font-bold text-white mb-2">Hoàn thành bài học! 🎉</h2>
          <p className="text-gray-400 text-sm mb-6">Bạn đã hoàn thành tất cả từ vựng.</p>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setResults([]);
            }}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition active:scale-95"
          >
            Học lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#07070e] p-4 text-white">
      <div className="mb-4 text-sm font-semibold text-gray-400">
        Từ {currentIndex + 1} / {words.length}
      </div>

      {/* Container cha cố định kích thước để không che nút bấm */}
      <div className="relative w-[220px] h-[280px] flex items-center justify-center my-4">
        <motion.div
          key={currentCard.id}
          style={{ x, rotate, opacity }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="absolute w-full h-full cursor-grab active:cursor-grabbing select-none"
        >
          <CardVocab 
            vocab={currentCard.vocab} 
            definition={currentCard.definition} 
            type={currentCard.type}
            example={currentCard.example}
          />
        </motion.div>
      </div>

      {/* Cụm nút bấm đẹp mắt, nhận sự kiện và trượt thẻ theo đúng hướng */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={() => handleAction('forgot')}
          className="px-6 py-3 bg-red-500/20 text-red-400 border border-red-500/30 font-semibold rounded-full shadow-lg hover:bg-red-500/30 transition active:scale-95"
        >
          ❌ Forgot
        </button>
        <button
          onClick={() => handleAction('remember')}
          className="px-6 py-3 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold rounded-full shadow-lg hover:bg-emerald-500/30 transition active:scale-95"
        >
          ✅ Remember
        </button>
      </div>
    </div>
  );
}