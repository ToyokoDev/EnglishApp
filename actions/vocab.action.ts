'use server';

import { db } from '@/db';
import { vocab } from '@/db/schema';

interface CreateVocabParams {
    userId: string;
    word: string;
    definition: string;
    type: string;
}

export async function createVocabAction(data: CreateVocabParams) {
    try {
        await db.insert(vocab).values({
            userId: data.userId,
            word: data.word,
            definition: data.definition, // Lưu ý đặt đúng tên cột trong Schema Drizzle của bạn
            type: data.type,
        });
        return { success: true };
    } catch (error) {
        console.error("Lỗi chèn DB:", error);
        return { success: false, error: "Không thể lưu vào cơ sở dữ liệu!" };
    }
}